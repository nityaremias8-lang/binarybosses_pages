---
toc: false
layout: post
title: Friends of Poway Seniors – Event Predictor
description: Attendance Predictor — Friends of Poway Seniors
permalink: /fopspredictor/
---
<style>
.post-title, .page-title, h1.title,
.post-meta, .post-date, .reading-time,
.breadcrumbs, nav.breadcrumb,
.post-header, header.post-header,
article > h1:first-child,
.wrapper > h1, main > h1 { display: none !important; }
body, html { background: #2e5238 !important; margin: 0 !important; padding: 0 !important; }
.post-content, .content, main, article, .wrapper, #main-content {
  padding: 0 !important; margin: 0 !important;
  max-width: 100% !important; background: #2e5238 !important;
}
</style>

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Event Predictor — Friends of Poway Seniors</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --sage:    #4a7c59;
    --sage-lt: #7aad8b;
    --sage-dk: #2e5238;
    --gold:    #c9913d;
    --gold-lt: #e8c37a;
    --warm:    #f0ebe0;
    --white:   #ffffff;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  #fops-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--sage-dk);
    min-height: 100vh;
    color: var(--white);
  }
  h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }

  /* ── NAV ── */
  .fops-nav {
    background: rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky; top: 0; z-index: 500;
    backdrop-filter: blur(10px);
  }
  .fops-nav-inner {
    max-width: 1100px; margin: 0 auto; padding: 0 2rem;
    height: 68px;
    display: flex; align-items: center; justify-content: flex-end; gap: 0.1rem;
  }
  .fops-menu { display: flex; align-items: center; gap: 0.1rem; }
  .fops-nav-link {
    display: inline-flex; align-items: center; gap: 5px;
    text-decoration: none; color: rgba(255,255,255,0.82);
    font-size: 0.9rem; font-weight: 500;
    padding: 0.45rem 0.9rem; border-radius: 8px;
    border: none; background: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; white-space: nowrap;
    transition: background 0.17s, color 0.17s;
  }
  .fops-nav-link:hover { background: rgba(255,255,255,0.12); color: var(--white); }
  .fops-donate {
    background: var(--gold) !important; color: var(--white) !important;
    border-radius: 22px !important; font-weight: 600 !important;
    padding: 0.45rem 1.1rem !important; margin-left: 0.4rem;
    box-shadow: 0 2px 12px rgba(201,145,61,0.45);
  }
  .fops-donate:hover { background: #b07e2e !important; }

  /* ── DROPDOWN ── */
  .fops-dropdown { position: relative; }
  .fops-chevron { font-size: 0.55rem; opacity: 0.65; display: inline-block; transition: transform 0.2s; }
  .fops-dropdown.open .fops-chevron { transform: rotate(180deg); }
  .fops-dropdown-panel {
    position: absolute; top: calc(100% + 8px); left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: var(--white); border-radius: 14px;
    box-shadow: 0 16px 48px rgba(0,0,0,0.22);
    min-width: 220px; padding: 0.5rem;
    opacity: 0; visibility: hidden; pointer-events: none;
    transition: opacity 0.2s ease, transform 0.22s cubic-bezier(0.34,1.4,0.64,1), visibility 0.2s;
  }
  .fops-dropdown-panel::before {
    content: ''; position: absolute; top: -5px; left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px; height: 10px; background: var(--white); border-radius: 2px;
  }
  .fops-dropdown.open .fops-dropdown-panel {
    opacity: 1; visibility: visible; pointer-events: all;
    transform: translateX(-50%) translateY(0);
  }
  .fops-dp-item {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; color: #1e2a1e;
    font-size: 0.88rem; font-weight: 500;
    padding: 0.65rem 0.85rem; border-radius: 9px; transition: background 0.14s;
  }
  .fops-dp-item:hover { background: #f0ebe0; color: #2e5238; }
  .fops-dp-icon {
    width: 28px; height: 28px; background: #f0ebe0; border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.88rem; flex-shrink: 0;
  }

  /* ── PAGE HERO ── */
  .pred-hero {
    padding: 4rem 2rem 3rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .pred-hero::after {
    content: ''; position: absolute; top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 500px;
    background: radial-gradient(ellipse, rgba(201,145,61,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .pred-hero-inner { position: relative; z-index: 2; max-width: 700px; margin: 0 auto; }
  .pred-eyebrow {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.13em;
    text-transform: uppercase; color: var(--gold-lt); margin-bottom: 0.75rem;
  }
  .pred-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    color: var(--white); margin-bottom: 1rem;
  }
  .pred-hero h1 em { color: var(--gold-lt); font-style: italic; }
  .pred-hero p {
    font-size: 1rem; color: rgba(255,255,255,0.65);
    line-height: 1.75; font-weight: 300; max-width: 560px; margin: 0 auto;
  }

  /* ── STATUS BANNER ── */
  .pred-status {
    max-width: 820px; margin: 0 auto 2rem;
    padding: 0 2rem;
  }
  .status-bar {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px;
    padding: 0.7rem 1.1rem;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.65);
    display: flex; align-items: center; gap: 0.6rem;
  }
  .status-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #aaa; flex-shrink: 0;
    transition: background 0.3s;
  }
  .status-dot.ready   { background: #5dbb7d; box-shadow: 0 0 6px #5dbb7d88; }
  .status-dot.loading { background: var(--gold-lt); animation: pulse 1s infinite; }
  .status-dot.error   { background: #e07070; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

  /* ── MAIN LAYOUT ── */
  .pred-main {
    max-width: 820px; margin: 0 auto;
    padding: 0 2rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  /* ── CARD ── */
  .pred-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 2rem;
    backdrop-filter: blur(6px);
  }
  .pred-card h2 {
    font-size: 1.1rem; color: var(--white);
    margin-bottom: 1.4rem;
    display: flex; align-items: center; gap: 0.5rem;
  }

  /* ── FORM ── */
  .form-group { margin-bottom: 1.1rem; }
  .form-group label {
    display: block; font-size: 0.78rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: rgba(255,255,255,0.55); margin-bottom: 0.4rem;
  }
  .form-group select,
  .form-group input[type="number"] {
    width: 100%;
    background: rgba(255,255,255,0.08);
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 10px;
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    padding: 0.6rem 0.85rem;
    outline: none;
    transition: border-color 0.2s;
    appearance: none;
  }
  .form-group select option { background: #2e5238; color: #fff; }
  .form-group select:focus,
  .form-group input[type="number"]:focus { border-color: var(--sage-lt); }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }

  /* toggle row */
  .toggle-row {
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; padding: 0.6rem 0.85rem;
    margin-bottom: 0.75rem;
  }
  .toggle-label { font-size: 0.88rem; color: rgba(255,255,255,0.8); }
  .toggle-switch { position: relative; width: 40px; height: 22px; }
  .toggle-switch input { opacity: 0; width: 0; height: 0; }
  .toggle-slider {
    position: absolute; inset: 0;
    background: rgba(255,255,255,0.15); border-radius: 22px;
    cursor: pointer; transition: background 0.25s;
  }
  .toggle-slider::before {
    content: ''; position: absolute;
    width: 16px; height: 16px; border-radius: 50%;
    background: #fff; top: 3px; left: 3px;
    transition: transform 0.25s;
  }
  .toggle-switch input:checked + .toggle-slider { background: var(--sage); }
  .toggle-switch input:checked + .toggle-slider::before { transform: translateX(18px); }

  /* CSV upload area */
  .upload-area {
    border: 2px dashed rgba(255,255,255,0.2);
    border-radius: 12px; padding: 1.5rem;
    text-align: center; cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 1rem;
  }
  .upload-area:hover, .upload-area.drag-over {
    border-color: var(--sage-lt);
    background: rgba(122,173,139,0.08);
  }
  .upload-area p { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: 0.4rem; }
  .upload-area .upload-icon { font-size: 1.8rem; }
  .upload-filename {
    font-size: 0.8rem; color: var(--gold-lt);
    margin-top: 0.5rem; font-weight: 500;
  }
  #csv-file-input { display: none; }

  /* predict button */
  #predict-btn {
    width: 100%; padding: 0.85rem;
    background: linear-gradient(135deg, var(--sage), var(--sage-dk));
    color: #fff; border: none; border-radius: 12px;
    font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 600;
    cursor: pointer; margin-top: 0.5rem;
    transition: opacity 0.2s, transform 0.15s;
    box-shadow: 0 4px 18px rgba(46,82,56,0.4);
  }
  #predict-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
  #predict-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

  /* ── RESULT CARD ── */
  .result-card {
    background: rgba(201,145,61,0.12);
    border: 1px solid rgba(201,145,61,0.25);
    border-radius: 20px; padding: 2rem;
    display: none;
  }
  .result-card.visible { display: block; animation: fopsUp 0.4s ease both; }
  .result-number {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem; font-weight: 700;
    color: var(--gold-lt); line-height: 1;
    margin: 0.5rem 0;
  }
  .result-range {
    font-size: 0.85rem; color: rgba(255,255,255,0.55);
    margin-bottom: 1.5rem;
  }
  .result-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--gold-lt);
    margin-bottom: 0.25rem;
  }

  /* confidence bar */
  .conf-bar-wrap {
    background: rgba(255,255,255,0.08);
    border-radius: 20px; height: 8px;
    overflow: hidden; margin: 0.4rem 0 1.2rem;
  }
  .conf-bar-fill {
    height: 100%; border-radius: 20px;
    background: linear-gradient(90deg, var(--sage-lt), var(--gold-lt));
    transition: width 0.8s cubic-bezier(0.34,1.3,0.64,1);
    width: 0%;
  }

  /* feature importance mini-chart */
  .importance-section { margin-top: 1.5rem; }
  .importance-section h3 { font-size: 0.85rem; color: rgba(255,255,255,0.55); margin-bottom: 0.8rem; font-family: 'DM Sans', sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
  .imp-row { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
  .imp-name { font-size: 0.78rem; color: rgba(255,255,255,0.6); width: 130px; flex-shrink: 0; }
  .imp-bar-wrap { flex: 1; background: rgba(255,255,255,0.07); border-radius: 10px; height: 6px; overflow: hidden; }
  .imp-bar-fill { height: 100%; border-radius: 10px; background: var(--sage-lt); transition: width 0.7s ease; }
  .imp-pct { font-size: 0.72rem; color: rgba(255,255,255,0.4); width: 34px; text-align: right; flex-shrink: 0; }

  /* model stats */
  .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.75rem; margin-top: 1.2rem; }
  .stat-box {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px; padding: 0.75rem;
    text-align: center;
  }
  .stat-val { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--gold-lt); }
  .stat-lbl { font-size: 0.68rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.07em; margin-top: 2px; }

  /* full-width bottom section */
  .pred-bottom {
    max-width: 820px; margin: 0 auto;
    padding: 0 2rem 4rem;
  }

  /* ── FOOTER ── */
  .fops-footer {
    background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.08);
    padding: 1.5rem 2rem;
  }
  .fops-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 0.75rem;
  }
  .fops-footer-inner span { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
  .fops-footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .fops-footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.18s; }
  .fops-footer-links a:hover { color: var(--white); }

  /* ── ANIMATIONS ── */
  @keyframes fopsUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fu  { animation: fopsUp 0.6s ease both; }
  .fu1 { animation-delay: 0.05s; }
  .fu2 { animation-delay: 0.15s; }
  .fu3 { animation-delay: 0.25s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 680px) {
    .pred-main { grid-template-columns: 1fr; }
    .form-row  { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: repeat(3,1fr); }
  }
</style>
</head>
<body>
<div id="fops-root">

  <!-- NAV -->
  <nav class="fops-nav">
    <div class="fops-nav-inner">
      <div class="fops-menu">
        <a href="/fops/" class="fops-nav-link">Home</a>
        <div class="fops-dropdown" id="eventsDropdown">
          <button class="fops-nav-link" onclick="window.toggleDropdown(event)">
            Events <span class="fops-chevron">▼</span>
          </button>
          <div class="fops-dropdown-panel">
            <a href="/fopsshop/" class="fops-dp-item"><div class="fops-dp-icon">🛍️</div> ReRuns Shoppe</a>
            <a href="/fopsbingo/" class="fops-dp-item"><div class="fops-dp-icon">🎱</div> BINGO</a>
            <a href="/fopslunch/" class="fops-dp-item"><div class="fops-dp-icon">🍽️</div> Social Lunch</a>
            <a href="/fopsbday/" class="fops-dp-item"><div class="fops-dp-icon">🎂</div> Birthday Certificate</a>
            <a href="/fopspredictor/" class="fops-dp-item"><div class="fops-dp-icon">🤖</div> Event Predictor</a>
          </div>
        </div>
        <a href="/fopsaboutus/" class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366"
           target="_blank" class="fops-nav-link fops-donate">♥ Donate</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="pred-hero">
    <div class="pred-hero-inner">
      <div class="pred-eyebrow fu fu1">🤖 Machine Learning Tool</div>
      <h1 class="fu fu2">Event <em>Attendance</em> Predictor</h1>
      <p class="fu fu3">Upload past attendance data to train the model, then fill in event details to get a predicted headcount — with a confidence range.</p>
    </div>
  </section>

  <!-- STATUS -->
  <div class="pred-status">
    <div class="status-bar">
      <div class="status-dot" id="status-dot"></div>
      <span id="status-text">Upload a CSV file to train the model before predicting.</span>
    </div>
  </div>

  <!-- MAIN GRID -->
  <div class="pred-main">

    <!-- LEFT: Train + Predict form -->
    <div>
      <!-- Train Card -->
      <div class="pred-card" style="margin-bottom:1.5rem;">
        <h2>📂 Step 1 — Train the Model</h2>

        <div class="upload-area" id="upload-area" onclick="document.getElementById('csv-file-input').click()">
          <div class="upload-icon">📄</div>
          <strong style="font-size:0.9rem;color:rgba(255,255,255,0.8);">Click or drag a CSV file here</strong>
          <p>Must include: month, day_of_week, event_type, weather, holiday_week,<br>prior_week_attendance, members_notified, flyer_sent, season, attendance</p>
          <div class="upload-filename" id="upload-filename"></div>
        </div>
        <input type="file" id="csv-file-input" accept=".csv"/>

        <button id="train-btn" onclick="window.trainModel()" disabled
          style="width:100%;padding:0.75rem;background:rgba(255,255,255,0.1);color:#fff;border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;font-family:'DM Sans',sans-serif;font-size:0.95rem;font-weight:600;cursor:pointer;transition:all 0.2s;">
          Train Model
        </button>

        <div class="stats-grid" id="train-stats" style="display:none;">
          <div class="stat-box"><div class="stat-val" id="stat-r2">—</div><div class="stat-lbl">R²</div></div>
          <div class="stat-box"><div class="stat-val" id="stat-mae">—</div><div class="stat-lbl">MAE</div></div>
          <div class="stat-box"><div class="stat-val" id="stat-rmse">—</div><div class="stat-lbl">RMSE</div></div>
        </div>
      </div>

      <!-- Predict Card -->
      <div class="pred-card">
        <h2>🔮 Step 2 — Predict Attendance</h2>

        <div class="form-row">
          <div class="form-group">
            <label>Event Type</label>
            <select id="f-event-type">
              <option value="bingo">BINGO</option>
              <option value="social_lunch">Social Lunch</option>
              <option value="birthday_certificate">Birthday Certificate</option>
              <option value="reruns_shoppe">ReRuns Shoppe</option>
            </select>
          </div>
          <div class="form-group">
            <label>Month</label>
            <select id="f-month">
              <option value="1">January</option><option value="2">February</option>
              <option value="3">March</option><option value="4">April</option>
              <option value="5">May</option><option value="6">June</option>
              <option value="7">July</option><option value="8">August</option>
              <option value="9">September</option><option value="10">October</option>
              <option value="11">November</option><option value="12">December</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Day of Week</label>
            <select id="f-day-of-week">
              <option value="0">Monday</option><option value="1">Tuesday</option>
              <option value="2">Wednesday</option><option value="3">Thursday</option>
              <option value="4">Friday</option><option value="5">Saturday</option>
              <option value="6">Sunday</option>
            </select>
          </div>
          <div class="form-group">
            <label>Season</label>
            <select id="f-season">
              <option value="winter">Winter</option><option value="spring">Spring</option>
              <option value="summer">Summer</option><option value="fall">Fall</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>Weather Forecast</label>
          <select id="f-weather">
            <option value="sunny">☀️ Sunny</option>
            <option value="cloudy">⛅ Cloudy</option>
            <option value="rainy">🌧️ Rainy</option>
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Prior Week Attendance</label>
            <input type="number" id="f-prior" value="20" min="0" max="200"/>
          </div>
          <div class="form-group">
            <label>Members Notified</label>
            <input type="number" id="f-notified" value="50" min="0" max="1000"/>
          </div>
        </div>

        <div class="toggle-row">
          <span class="toggle-label">Holiday week?</span>
          <label class="toggle-switch">
            <input type="checkbox" id="f-holiday"/>
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="toggle-row">
          <span class="toggle-label">Flyer sent out?</span>
          <label class="toggle-switch">
            <input type="checkbox" id="f-flyer" checked/>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <button id="predict-btn" onclick="window.runPredict()" disabled>Predict Attendance →</button>
      </div>
    </div>

    <!-- RIGHT: Result -->
    <div>
      <div class="pred-card result-card" id="result-card">
        <div class="result-label">Predicted Attendance</div>
        <div class="result-number" id="result-number">—</div>
        <div class="result-range" id="result-range">Range: — – —</div>

        <div class="result-label">Confidence</div>
        <div class="conf-bar-wrap">
          <div class="conf-bar-fill" id="conf-bar"></div>
        </div>
        <div style="font-size:0.78rem;color:rgba(255,255,255,0.4);margin-bottom:1.5rem;" id="conf-label">—</div>

        <div class="importance-section" id="importance-section">
          <h3>Feature Influence</h3>
          <div id="importance-bars"></div>
        </div>
      </div>

      <!-- placeholder before first prediction -->
      <div class="pred-card" id="result-placeholder" style="text-align:center;padding:3rem 2rem;">
        <div style="font-size:2.5rem;margin-bottom:1rem;">📊</div>
        <div style="font-size:0.95rem;color:rgba(255,255,255,0.5);line-height:1.7;">
          Train the model with your CSV, then fill in the event details to see a prediction here.
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="fops-footer">
    <div class="fops-footer-inner">
      <span>© 2025 PVSCC 501(c)(3) · EIN: 51-0183384</span>
      <div class="fops-footer-links">
        <a href="/fopsaboutus/">About Us</a>
        <a href="/fopsresources/">Resources</a>
        <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank">Facebook</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank">Donate</a>
      </div>
    </div>
  </footer>
</div>

<script>
// ============================================================
// COMPLETE MODEL CODE - ALL FUNCTIONS ARE GLOBALLY ACCESSIBLE
// ============================================================

(function() {
  // Feature configuration
  const FEATURE_NAMES = [
    'month','day_of_week','event_type_encoded','weather_encoded',
    'holiday_week','prior_week_attendance','members_notified','flyer_sent','season_encoded'
  ];
  
  const EVENT_MAP = { bingo: 0, social_lunch: 1, birthday_certificate: 2, reruns_shoppe: 3 };
  const WEATHER_MAP = { sunny: 2, cloudy: 1, rainy: 0 };
  const SEASON_MAP = { winter: 0, spring: 1, summer: 2, fall: 3 };

  function encodeFeatures(r) {
    return [
      Number(r.month), Number(r.day_of_week),
      EVENT_MAP[r.event_type] ?? 0,
      WEATHER_MAP[r.weather] ?? 1,
      Number(r.holiday_week),
      Number(r.prior_week_attendance),
      Number(r.members_notified),
      Number(r.flyer_sent),
      SEASON_MAP[r.season] ?? 0,
    ];
  }

  function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
      const vals = line.split(',').map(v => v.trim());
      const obj = {};
      headers.forEach((h, i) => { obj[h] = vals[i]; });
      return obj;
    });
  }

  // Decision Tree
  class DecisionNode {
    constructor({ featureIndex = null, threshold = null, left = null, right = null, value = null } = {}) {
      this.featureIndex = featureIndex;
      this.threshold = threshold;
      this.left = left;
      this.right = right;
      this.value = value;
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
        const leftY = y.filter((_, k) => X[k][fi] <= thresh);
        const rightY = y.filter((_, k) => X[k][fi] > thresh);
        if (!leftY.length || !rightY.length) continue;
        const gain = parentMse - (leftY.length / y.length) * mse(leftY) - (rightY.length / y.length) * mse(rightY);
        if (gain > bestGain) { bestGain = gain; bestFi = fi; bestThresh = thresh; }
      }
    }
    return { featureIndex: bestFi, threshold: bestThresh, gain: bestGain };
  }

  function buildTree(X, y, depth, maxDepth, minSamples, nFeatures) {
    if (depth >= maxDepth || y.length <= minSamples || new Set(y).size === 1) {
      return new DecisionNode({ value: y.reduce((a, b) => a + b, 0) / y.length });
    }
    const allIdx = Array.from({ length: X[0].length }, (_, i) => i);
    const featureIndices = allIdx.sort(() => Math.random() - 0.5).slice(0, nFeatures);
    const { featureIndex, threshold, gain } = bestSplit(X, y, featureIndices);
    if (featureIndex === null || gain <= 0) {
      return new DecisionNode({ value: y.reduce((a, b) => a + b, 0) / y.length });
    }
    const leftMask = X.map((r, i) => r[featureIndex] <= threshold ? i : -1).filter(i => i >= 0);
    const rightMask = X.map((r, i) => r[featureIndex] > threshold ? i : -1).filter(i => i >= 0);
    return new DecisionNode({
      featureIndex, threshold,
      left: buildTree(leftMask.map(i => X[i]), leftMask.map(i => y[i]), depth + 1, maxDepth, minSamples, nFeatures),
      right: buildTree(rightMask.map(i => X[i]), rightMask.map(i => y[i]), depth + 1, maxDepth, minSamples, nFeatures),
    });
  }

  function predictTree(node, x) {
    if (node.isLeaf()) return node.value;
    return x[node.featureIndex] <= node.threshold ? predictTree(node.left, x) : predictTree(node.right, x);
  }

  // Random Forest
  class RandomForest {
    constructor({ nTrees = 50, maxDepth = 8, minSamples = 3 } = {}) {
      this.nTrees = nTrees;
      this.maxDepth = maxDepth;
      this.minSamples = minSamples;
      this.trees = [];
    }
    fit(X, y) {
      this.trees = [];
      const nFeatures = Math.max(1, Math.round(Math.sqrt(X[0].length)));
      for (let t = 0; t < this.nTrees; t++) {
        const indices = Array.from({ length: X.length }, () => Math.floor(Math.random() * X.length));
        this.trees.push(buildTree(indices.map(i => X[i]), indices.map(i => y[i]), 0, this.maxDepth, this.minSamples, nFeatures));
      }
      return this;
    }
    predict(X) {
      return X.map(x => {
        const v = this.trees.map(t => predictTree(t, x));
        return v.reduce((a, b) => a + b, 0) / v.length;
      });
    }
    predictOne(x) { return this.predict([x])[0]; }
    featureImportance(X, y) {
      const n = FEATURE_NAMES.length, importance = new Array(n).fill(0);
      const preds = this.predict(X);
      const baseScore = mse(preds.map((p, i) => p - y[i]));
      for (let fi = 0; fi < n; fi++) {
        const shuffled = X.map(r => [...r]);
        const col = shuffled.map(r => r[fi]).sort(() => Math.random() - 0.5);
        shuffled.forEach((r, i) => { r[fi] = col[i]; });
        const permScore = mse(this.predict(shuffled).map((p, i) => p - y[i]));
        importance[fi] = Math.max(0, permScore - baseScore);
      }
      const total = importance.reduce((a, b) => a + b, 0) || 1;
      return importance.map(v => v / total);
    }
  }

  // POW Model
  class POWModel {
    constructor() {
      this.forest = new RandomForest({ nTrees: 60, maxDepth: 8, minSamples: 3 });
      this.trained = false;
      this.trainStats = null;
      this.featureImportances = null;
    }
    train(records) {
      if (!records.length) throw new Error('No training records');
      const X = records.map(r => encodeFeatures(r));
      const y = records.map(r => Number(r.attendance));
      this.forest.fit(X, y);
      this.trained = true;
      const preds = this.forest.predict(X);
      const n = y.length;
      const errors = preds.map((p, i) => p - y[i]);
      const mae = errors.reduce((s, e) => s + Math.abs(e), 0) / n;
      const rmse = Math.sqrt(errors.reduce((s, e) => s + e * e, 0) / n);
      const yMean = y.reduce((a, b) => a + b, 0) / n;
      const ssTot = y.reduce((s, v) => s + (v - yMean) ** 2, 0);
      const ssRes = errors.reduce((s, e) => s + e * e, 0);
      const r2 = 1 - ssRes / ssTot;
      this.featureImportances = this.forest.featureImportance(X, y);
      this.trainStats = { rmse: +rmse.toFixed(2), mae: +mae.toFixed(2), r2: +r2.toFixed(4), sampleCount: n };
      return this.trainStats;
    }
    predict(record) {
      if (!this.trained) throw new Error('Model not trained yet');
      const raw = this.forest.predictOne(encodeFeatures(record));
      const margin = this.trainStats?.rmse ?? 5;
      return {
        predicted: Math.round(raw),
        low: Math.max(0, Math.round(raw - margin)),
        high: Math.round(raw + margin),
      };
    }
  }

  // ============================================================
  // UI CONTROLLER
  // ============================================================
  const model = new POWModel();
  let csvRecords = null;

  // Helper: update status banner
  function setStatus(type, msg) {
    const dot = document.getElementById('status-dot');
    const text = document.getElementById('status-text');
    dot.className = 'status-dot ' + type;
    text.textContent = msg;
  }

  // Handle file upload
  function handleFile(file) {
    if (!file) return;
    document.getElementById('upload-filename').textContent = '📎 ' + file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        csvRecords = parseCSV(e.target.result);
        const trainBtn = document.getElementById('train-btn');
        trainBtn.disabled = false;
        trainBtn.style.background = 'linear-gradient(135deg, var(--sage), var(--sage-dk))';
        trainBtn.style.border = 'none';
        setStatus('loading', 'CSV loaded: ' + csvRecords.length + ' records. Click "Train Model" to continue.');
      } catch(err) {
        setStatus('error', 'Could not parse CSV. Check the format and try again.');
      }
    };
    reader.readAsText(file);
  }

  // Training function (global)
  window.trainModel = function() {
    if (!csvRecords) return;
    const btn = document.getElementById('train-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Training...';
    btn.disabled = true;
    setStatus('loading', 'Training the random forest — this may take a moment...');

    setTimeout(function() {
      try {
        const stats = model.train(csvRecords);
        document.getElementById('stat-r2').textContent = stats.r2.toFixed(2);
        document.getElementById('stat-mae').textContent = stats.mae;
        document.getElementById('stat-rmse').textContent = stats.rmse;
        document.getElementById('train-stats').style.display = 'grid';
        document.getElementById('predict-btn').disabled = false;
        btn.textContent = '✓ Re-train Model';
        btn.disabled = false;
        btn.style.background = 'rgba(93,187,125,0.2)';
        btn.style.border = '1.5px solid rgba(93,187,125,0.5)';
        setStatus('ready', 'Model trained on ' + stats.sampleCount + ' records. R² = ' + stats.r2.toFixed(3) + ' · RMSE = ' + stats.rmse + '. Ready to predict!');
      } catch(err) {
        setStatus('error', 'Training failed: ' + err.message);
        btn.textContent = 'Train Model';
        btn.disabled = false;
        btn.style.background = 'linear-gradient(135deg, var(--sage), var(--sage-dk))';
      }
    }, 80);
  };

  // Prediction function (global)
  window.runPredict = function() {
    if (!model.trained) {
      setStatus('error', 'Please train the model first by uploading a CSV and clicking "Train Model".');
      return;
    }

    const record = {
      event_type: document.getElementById('f-event-type').value,
      month: document.getElementById('f-month').value,
      day_of_week: document.getElementById('f-day-of-week').value,
      season: document.getElementById('f-season').value,
      weather: document.getElementById('f-weather').value,
      prior_week_attendance: document.getElementById('f-prior').value,
      members_notified: document.getElementById('f-notified').value,
      holiday_week: document.getElementById('f-holiday').checked ? 1 : 0,
      flyer_sent: document.getElementById('f-flyer').checked ? 1 : 0,
    };

    try {
      const { predicted, low, high } = model.predict(record);
      document.getElementById('result-number').textContent = predicted;
      document.getElementById('result-range').textContent = 'Estimated range: ' + low + ' – ' + high + ' attendees';

      const spread = high - low;
      const conf = Math.max(0, Math.min(100, Math.round(100 - spread * 2)));
      document.getElementById('conf-bar').style.width = conf + '%';
      document.getElementById('conf-label').textContent = conf + '% confidence';

      // Feature importance bars
      const impDiv = document.getElementById('importance-bars');
      impDiv.innerHTML = '';
      const imp = model.featureImportances || [];
      const labels = {
        month: 'Month', day_of_week: 'Day of Week', event_type_encoded: 'Event Type',
        weather_encoded: 'Weather', holiday_week: 'Holiday Week',
        prior_week_attendance: 'Prior Attendance', members_notified: 'Members Notified',
        flyer_sent: 'Flyer Sent', season_encoded: 'Season'
      };
      FEATURE_NAMES.forEach(function(name, i) {
        const pct = imp[i] ? (imp[i] * 100).toFixed(1) : '0.0';
        impDiv.innerHTML += '<div class="imp-row">' +
          '<div class="imp-name">' + (labels[name] || name) + '</div>' +
          '<div class="imp-bar-wrap"><div class="imp-bar-fill" style="width:' + pct + '%"></div></div>' +
          '<div class="imp-pct">' + pct + '%</div>' +
          '</div>';
      });

      document.getElementById('result-placeholder').style.display = 'none';
      document.getElementById('result-card').classList.add('visible');
      setStatus('ready', 'Prediction complete!');
    } catch(err) {
      setStatus('error', 'Prediction error: ' + err.message);
    }
  };

  // Dropdown toggle (global)
  window.toggleDropdown = function(e) {
    e.stopPropagation();
    document.getElementById('eventsDropdown').classList.toggle('open');
  };

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });

  // File upload handlers
  const uploadArea = document.getElementById('upload-area');
  const csvInput = document.getElementById('csv-file-input');

  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('drag-over');
  });
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    handleFile(e.dataTransfer.files[0]);
  });
  csvInput.addEventListener('change', function() {
    handleFile(csvInput.files[0]);
  });
})();
</script>
</body>
</html>