/**
 * model.js — Friends of Poway Seniors Attendance Predictor
 * 
 * A Random Forest-style ensemble model implemented in pure JavaScript.
 * Uses gradient boosted decision trees (simplified) to predict attendance
 * for: bingo, social_lunch, birthday_certificate, reruns_shoppe.
 *
 * EXPORTS:
 *   POWModel         — main model class
 *   encodeFeatures   — converts a raw event object into a numeric feature vector
 *   FEATURE_NAMES    — ordered list of feature names
 */

export const FEATURE_NAMES = [
  'month',
  'day_of_week',
  'event_type_encoded',
  'weather_encoded',
  'holiday_week',
  'prior_week_attendance',
  'members_notified',
  'flyer_sent',
  'season_encoded',
];

const EVENT_MAP   = { bingo: 0, social_lunch: 1, birthday_certificate: 2, reruns_shoppe: 3 };
const WEATHER_MAP = { sunny: 2, cloudy: 1, rainy: 0 };
const SEASON_MAP  = { winter: 0, spring: 1, summer: 2, fall: 3 };

/** Convert a raw event record into a numeric feature vector */
export function encodeFeatures(record) {
  return [
    Number(record.month),
    Number(record.day_of_week),
    EVENT_MAP[record.event_type] ?? 0,
    WEATHER_MAP[record.weather] ?? 1,
    Number(record.holiday_week),
    Number(record.prior_week_attendance),
    Number(record.members_notified),
    Number(record.flyer_sent),
    SEASON_MAP[record.season] ?? 0,
  ];
}

/** Parse CSV text into array of objects */
export function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((h, i) => { obj[h] = vals[i]; });
    return obj;
  });
}

// ─── Decision Tree ───────────────────────────────────────────────────────────

class DecisionNode {
  constructor({ featureIndex = null, threshold = null, left = null, right = null, value = null } = {}) {
    this.featureIndex = featureIndex;
    this.threshold    = threshold;
    this.left         = left;
    this.right        = right;
    this.value        = value; // leaf value
  }
  isLeaf() { return this.value !== null; }
}

function mse(values) {
  if (!values.length) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return values.reduce((s, v) => s + (v - mean) ** 2, 0) / values.length;
}

function bestSplit(X, y, featureIndices) {
  let bestGain = -Infinity, bestFi = null, bestThresh = null;
  const parentMse = mse(y);

  for (const fi of featureIndices) {
    const vals = [...new Set(X.map(r => r[fi]))].sort((a, b) => a - b);
    for (let i = 0; i < vals.length - 1; i++) {
      const thresh = (vals[i] + vals[i + 1]) / 2;
      const leftY  = y.filter((_, k) => X[k][fi] <= thresh);
      const rightY = y.filter((_, k) => X[k][fi] >  thresh);
      if (!leftY.length || !rightY.length) continue;
      const gain = parentMse
        - (leftY.length  / y.length) * mse(leftY)
        - (rightY.length / y.length) * mse(rightY);
      if (gain > bestGain) { bestGain = gain; bestFi = fi; bestThresh = thresh; }
    }
  }
  return { featureIndex: bestFi, threshold: bestThresh, gain: bestGain };
}

function buildTree(X, y, depth, maxDepth, minSamples, nFeatures) {
  if (depth >= maxDepth || y.length <= minSamples || new Set(y).size === 1) {
    return new DecisionNode({ value: y.reduce((a, b) => a + b, 0) / y.length });
  }
  // Random feature subset
  const allIdx = Array.from({ length: X[0].length }, (_, i) => i);
  const featureIndices = allIdx.sort(() => Math.random() - 0.5).slice(0, nFeatures);

  const { featureIndex, threshold, gain } = bestSplit(X, y, featureIndices);
  if (featureIndex === null || gain <= 0) {
    return new DecisionNode({ value: y.reduce((a, b) => a + b, 0) / y.length });
  }

  const leftMask  = X.map((r, i) => r[featureIndex] <= threshold ? i : -1).filter(i => i >= 0);
  const rightMask = X.map((r, i) => r[featureIndex] >  threshold ? i : -1).filter(i => i >= 0);

  return new DecisionNode({
    featureIndex,
    threshold,
    left:  buildTree(leftMask.map(i => X[i]),  leftMask.map(i => y[i]),  depth + 1, maxDepth, minSamples, nFeatures),
    right: buildTree(rightMask.map(i => X[i]), rightMask.map(i => y[i]), depth + 1, maxDepth, minSamples, nFeatures),
  });
}

function predictTree(node, x) {
  if (node.isLeaf()) return node.value;
  return x[node.featureIndex] <= node.threshold
    ? predictTree(node.left,  x)
    : predictTree(node.right, x);
}

// ─── Random Forest ───────────────────────────────────────────────────────────

class RandomForest {
  constructor({ nTrees = 50, maxDepth = 8, minSamples = 3 } = {}) {
    this.nTrees     = nTrees;
    this.maxDepth   = maxDepth;
    this.minSamples = minSamples;
    this.trees      = [];
  }

  fit(X, y) {
    this.trees = [];
    const nFeatures = Math.max(1, Math.round(Math.sqrt(X[0].length)));
    for (let t = 0; t < this.nTrees; t++) {
      // Bootstrap sample
      const indices = Array.from({ length: X.length }, () => Math.floor(Math.random() * X.length));
      const Xb = indices.map(i => X[i]);
      const yb = indices.map(i => y[i]);
      this.trees.push(buildTree(Xb, yb, 0, this.maxDepth, this.minSamples, nFeatures));
    }
    return this;
  }

  predict(X) {
    return X.map(x => {
      const votes = this.trees.map(t => predictTree(t, x));
      return votes.reduce((a, b) => a + b, 0) / votes.length;
    });
  }

  predictOne(x) { return this.predict([x])[0]; }

  /** Feature importance via mean decrease in MSE */
  featureImportance(X, y) {
    const n = FEATURE_NAMES.length;
    const importance = new Array(n).fill(0);
    const baseScore = mse(y.map((_, i) => this.predictOne(X[i])).map((p, i) => p - y[i]));

    for (let fi = 0; fi < n; fi++) {
      const shuffled = [...X.map(r => [...r])];
      const col = shuffled.map(r => r[fi]).sort(() => Math.random() - 0.5);
      shuffled.forEach((r, i) => { r[fi] = col[i]; });
      const permScore = mse(shuffled.map((r, i) => this.predictOne(r) - y[i]));
      importance[fi] = Math.max(0, permScore - baseScore);
    }
    const total = importance.reduce((a, b) => a + b, 0) || 1;
    return importance.map(v => v / total);
  }

  toJSON() { return { nTrees: this.nTrees, maxDepth: this.maxDepth, minSamples: this.minSamples, trees: this.trees }; }

  static fromJSON(obj) {
    const rf = new RandomForest({ nTrees: obj.nTrees, maxDepth: obj.maxDepth, minSamples: obj.minSamples });
    rf.trees = obj.trees.map(t => hydrate(t));
    return rf;
  }
}

function hydrate(node) {
  const n = new DecisionNode(node);
  if (!n.isLeaf()) { n.left = hydrate(node.left); n.right = hydrate(node.right); }
  return n;
}

// ─── POWModel (main export) ──────────────────────────────────────────────────

export class POWModel {
  constructor() {
    this.forest     = new RandomForest({ nTrees: 60, maxDepth: 8, minSamples: 3 });
    this.trained    = false;
    this.trainStats = null; // { rmse, mae, r2, sampleCount }
  }

  /**
   * Train on an array of raw CSV record objects.
   * Each record must have all FEATURE_NAMES keys plus 'attendance'.
   */
  train(records) {
    if (!records.length) throw new Error('No training records provided');
    const X = records.map(r => encodeFeatures(r));
    const y = records.map(r => Number(r.attendance));

    this.forest.fit(X, y);
    this.trained = true;

    // Compute in-sample metrics
    const preds = this.forest.predict(X);
    const n     = y.length;
    const errors = preds.map((p, i) => p - y[i]);
    const mae    = errors.reduce((s, e) => s + Math.abs(e), 0) / n;
    const rmse   = Math.sqrt(errors.reduce((s, e) => s + e * e, 0) / n);
    const yMean  = y.reduce((a, b) => a + b, 0) / n;
    const ssTot  = y.reduce((s, v) => s + (v - yMean) ** 2, 0);
    const ssRes  = errors.reduce((s, e) => s + e * e, 0);
    const r2     = 1 - ssRes / ssTot;

    this.featureImportances = this.forest.featureImportance(X, y);
    this.trainStats = { rmse: +rmse.toFixed(2), mae: +mae.toFixed(2), r2: +r2.toFixed(4), sampleCount: n };
    return this.trainStats;
  }

  /** Predict attendance for one event. Returns { predicted, low, high } */
  predict(record) {
    if (!this.trained) throw new Error('Model not trained yet');
    const x   = encodeFeatures(record);
    const raw = this.forest.predictOne(x);
    // Crude prediction interval (±1 RMSE)
    const margin = this.trainStats?.rmse ?? 5;
    return {
      predicted: Math.round(raw),
      low:       Math.max(0, Math.round(raw - margin)),
      high:      Math.round(raw + margin),
    };
  }

  /** Serialize model to JSON string for localStorage or file save */
  serialize()  { return JSON.stringify({ forest: this.forest.toJSON(), trainStats: this.trainStats, featureImportances: this.featureImportances }); }

  /** Restore model from serialized JSON string */
  load(json) {
    const obj = JSON.parse(json);
    this.forest = RandomForest.fromJSON(obj.forest);
    this.trainStats = obj.trainStats;
    this.featureImportances = obj.featureImportances;
    this.trained = true;
  }
}