---
toc: false
layout: post
title: Bingo
permalink: /fopsbingo/
---

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Friends of Poway Seniors Bingo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --sage:    #4a7c59;
    --sage-lt: #7aad8b;
    --sage-dk: #2e5238;
    --gold:    #c9913d;
    --gold-lt: #e8c37a;
    --warm:    #f0ebe0;
    --white:   #ffffff;
    --red:     #b34b4b;
    --red-lt:  #d17a7a;
    --teal:    #2a7c6f;
    --teallt:  #3da090;
    --navy:    #1a2e3b;
    --green:   #27ae60;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  #fops-bingo-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--sage-dk);
    min-height: 100vh;
    color: var(--white);
  }
  h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }

  /* NAV */
  .fops-nav {
    background: rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky; top: 0; z-index: 500;
    backdrop-filter: blur(10px);
  }
  .fops-nav-inner {
    max-width: 1100px; margin: 0 auto; padding: 0 2rem;
    height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  }
  .fops-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
  .fops-logo-icon {
    width: 38px; height: 38px; background: var(--sage); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  .fops-logo span { font-family: 'Playfair Display', serif; font-size: 1.02rem; font-weight: 700; color: var(--white); }
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

  /* PAGE TABS */
  .page-tabs {
    max-width: 1200px; margin: 0 auto;
    padding: 1.5rem 2rem 0; display: flex; gap: 0.5rem;
  }
  .tab-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 600;
    padding: 0.6rem 1.5rem;
    border-radius: 12px 12px 0 0;
    border: 1px solid rgba(255,255,255,0.1); border-bottom: none;
    background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6);
    cursor: pointer; transition: all 0.2s;
  }
  .tab-btn.active { background: rgba(255,255,255,0.13); color: var(--white); border-color: rgba(255,255,255,0.2); }
  .tab-btn:hover:not(.active) { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.9); }
  .tab-content { display: none; }
  .tab-content.active { display: block; }

  /* INFO TAB */
  .bingo-hero { padding: 2.5rem 2rem 1rem; text-align: center; }
  .bingo-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700;
    color: var(--white); line-height: 1.1; margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .bingo-subtitle { font-size: 1.2rem; color: var(--gold-lt); font-weight: 400; margin-bottom: 1.5rem; letter-spacing: 0.5px; }
  .api-status { max-width: 1200px; margin: 0 auto 1rem; padding: 0 2rem; }
  .status-banner {
    background: rgba(0,0,0,0.3); border-radius: 50px;
    padding: 0.75rem 1.5rem; display: inline-flex;
    align-items: center; gap: 1rem; font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .status-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  .status-dot.connected { background: #4caf50; box-shadow: 0 0 10px #4caf50; }
  .status-dot.disconnected { background: #f44336; box-shadow: 0 0 10px #f44336; }
  .status-text.connected { color: #a5d6a7; }
  .status-text.disconnected { color: #ef9a9a; }
  .bingo-grid {
    max-width: 1200px; margin: 0 auto; padding: 2rem 2rem 4rem;
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
  }
  .bingo-info, .volunteer-section {
    background: rgba(255,255,255,0.07); backdrop-filter: blur(8px);
    border-radius: 24px; padding: 2rem; border: 1px solid rgba(255,255,255,0.1);
  }
  .info-section { margin-bottom: 2.5rem; }
  .info-section h2 {
    font-size: 1.6rem; color: var(--gold-lt); margin-bottom: 1.25rem;
    display: flex; align-items: center; gap: 0.5rem;
    border-bottom: 2px solid rgba(201,145,61,0.3); padding-bottom: 0.75rem;
  }
  .info-card {
    background: rgba(0,0,0,0.25); border-radius: 20px; padding: 1.75rem; margin-bottom: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
  .info-card h3 { color: var(--gold-lt); font-size: 1.3rem; margin-bottom: 1.25rem; font-weight: 600; }
  .info-row { display: flex; gap: 1rem; margin-bottom: 1rem; line-height: 1.6; font-size: 1.05rem; }
  .info-label { font-weight: 600; min-width: 80px; color: var(--gold-lt); }
  .info-value { color: var(--white); font-weight: 500; }
  .hours-list { list-style: none; }
  .hours-list li { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.15); font-size: 1.1rem; }
  .hours-list li:last-child { border-bottom: none; }
  .day { font-weight: 700; color: var(--gold-lt); font-size: 1.1rem; }
  .time { color: var(--white); font-weight: 600; }
  .doors-open-notice {
    margin-top: 1.5rem; padding: 1.25rem;
    background: linear-gradient(145deg, rgba(201,145,61,0.15), rgba(201,145,61,0.25));
    border-left: 6px solid var(--gold); border-radius: 0 12px 12px 0;
    font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
  .doors-open-notice p { font-size: 1.2rem; color: var(--gold-lt); margin-bottom: 0.5rem; }
  .doors-open-notice .note { font-size: 0.95rem; color: rgba(255,255,255,0.8); font-weight: 400; margin-top: 0.5rem; }
  .price-tag { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 2px solid rgba(201,145,61,0.3); font-size: 1.2rem; }
  .price-tag:last-child { border-bottom: none; }
  .price-label { font-weight: 600; }
  .price-value { font-weight: 800; color: var(--gold-lt); font-size: 1.4rem; }
  .rule-item { display: flex; gap: 1rem; margin-bottom: 1rem; align-items: flex-start; font-size: 1.05rem; }
  .rule-bullet { color: var(--gold-lt); font-size: 1.3rem; font-weight: 700; }
  .lunch-card {
    background: linear-gradient(145deg, rgba(201,145,61,0.15), rgba(201,145,61,0.25));
    border-radius: 16px; padding: 1.5rem; margin-top: 1rem; border-left: 5px solid var(--gold);
  }
  .lunch-title { color: var(--gold-lt); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.75rem; }
  .lunch-detail { font-size: 1rem; color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; }
  .lunch-highlight { color: var(--gold-lt); font-weight: 600; }
  .concessions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
  .concession-item { background: rgba(255,255,255,0.1); border-radius: 12px; padding: 1rem; text-align: center; font-weight: 600; }
  .free-coffee { background: rgba(201,145,61,0.3); border: 1px dashed var(--gold); }

  /* VOLUNTEER FORM */
  .volunteer-header { text-align: center; margin-bottom: 2rem; }
  .volunteer-header h2 { font-size: 2rem; color: var(--gold-lt); margin-bottom: 0.5rem; }
  .volunteer-header p { color: rgba(255,255,255,0.8); font-size: 1.05rem; }
  .form-group { margin-bottom: 1.5rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  label { display: block; margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 600; color: var(--gold-lt); }
  input, select, textarea {
    width: 100%; padding: 0.9rem 1rem;
    background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.15);
    border-radius: 12px; font-size: 1rem; color: var(--white);
    font-family: 'DM Sans', sans-serif; transition: all 0.2s;
  }
  input:focus, select:focus, textarea:focus { outline: none; border-color: var(--gold); background: rgba(255,255,255,0.15); }
  input::placeholder { color: rgba(255,255,255,0.4); }
  select option { background: var(--sage-dk); color: var(--white); }
  .checkbox-group { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 0.5rem; }
  .checkbox-item {
    display: flex; align-items: center; gap: 0.5rem;
    background: rgba(255,255,255,0.1); padding: 0.75rem; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .checkbox-item input[type="checkbox"] { width: auto; margin-right: 0.25rem; transform: scale(1.1); }
  .checkbox-item label { margin-bottom: 0; color: var(--white); font-weight: 500; }
  .btn-submit {
    width: 100%; padding: 1.2rem;
    background: linear-gradient(145deg, var(--gold), #b07e2e);
    color: var(--white); border: none; border-radius: 50px;
    font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: all 0.3s;
    margin-top: 1.5rem; text-transform: uppercase; letter-spacing: 1px;
    box-shadow: 0 5px 20px rgba(201,145,61,0.4);
  }
  .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(201,145,61,0.6); }
  .alert { padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; font-weight: 500; animation: slideIn 0.3s ease; }
  @keyframes slideIn { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .alert-success { background: rgba(76,175,80,0.2); border: 2px solid #4caf50; color: #a5d6a7; }
  .alert-error { background: rgba(244,67,54,0.2); border: 2px solid #f44336; color: #ef9a9a; }

  /* GAME TAB */
  #game-tab-content {
    max-width: 1000px; margin: 0 auto;
    padding: 1rem 1rem 3rem;
    display: flex; flex-direction: column; align-items: center;
  }
  #title-screen {
    background: linear-gradient(150deg, #1a2e3b 0%, #24415a 50%, #2a7c6f 100%);
    border-radius: 24px; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 14px; padding: 3rem 2rem; width: 100%;
  }
  .badge {
    background: rgba(200,147,42,0.2); border: 1px solid rgba(200,147,42,0.5);
    border-radius: 100px; padding: 5px 18px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold-lt);
  }
  #title-screen h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 6vw, 58px); font-weight: 700; color: #fff;
    text-align: center; line-height: 1.1; letter-spacing: -1px;
  }
  #title-screen h1 em { color: var(--gold-lt); font-style: italic; }
  .title-desc { font-size: clamp(13px,1.8vw,15px); color: rgba(255,255,255,0.6); text-align: center; max-width: 420px; line-height: 1.6; font-weight: 300; }
  .info-pills { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
  .info-pill { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; padding: 5px 14px; font-size: 12px; color: rgba(255,255,255,0.75); }
  .pixel-btn {
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
    background: var(--gold); border: none; color: var(--navy);
    padding: 13px 36px; border-radius: 50px; cursor: pointer;
    box-shadow: 0 8px 28px rgba(200,147,42,0.4); transition: all 0.18s ease; margin-top: 6px;
  }
  .pixel-btn:hover { background: var(--gold-lt); transform: translateY(-2px); box-shadow: 0 12px 36px rgba(200,147,42,0.5); }
  .pixel-btn.secondary { background: transparent; border: 2px solid var(--gold-lt); color: var(--gold-lt); box-shadow: none; }
  .pixel-btn.secondary:hover { background: rgba(232,184,75,0.12); }
  #game-wrapper { display: none; flex-direction: column; align-items: center; width: 100%; }
  #hud {
    width: 100%; display: flex; justify-content: space-between; align-items: center;
    padding: 8px 20px; background: var(--navy); border-radius: 16px 16px 0 0;
  }
  .hud-left { display: flex; align-items: center; gap: 10px; }
  .hud-logo { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: var(--gold-lt); }
  .hud-sep { width: 1px; height: 18px; background: rgba(255,255,255,0.15); }
  .hud-sub { font-size: 11px; color: rgba(255,255,255,0.45); font-weight: 500; letter-spacing: 0.5px; }
  .hud-right { display: flex; gap: 22px; }
  .hud-stat { display: flex; flex-direction: column; align-items: flex-end; }
  .hud-lbl { font-size: 9px; color: rgba(255,255,255,0.38); letter-spacing: 1px; text-transform: uppercase; }
  .hud-val { font-size: 14px; font-weight: 600; color: var(--gold-lt); }
  #game-area { display: flex; gap: 14px; width: 100%; padding: 12px 14px; background: rgba(0,0,0,0.2); }
  #caller-panel { display: flex; flex-direction: column; gap: 10px; width: 200px; flex-shrink: 0; }
  .panel-title { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.85); }
  #called-display {
    background: var(--navy); border-radius: 12px; padding: 14px;
    display: flex; flex-direction: column; align-items: center; gap: 4px;
  }
  #called-letter { font-family: 'Playfair Display', serif; font-size: clamp(26px,4vw,40px); font-weight: 700; line-height: 1; }
  #called-number { font-family: 'Playfair Display', serif; font-size: clamp(36px,5vw,54px); font-weight: 700; color: #fff; line-height: 1; }
  #called-label { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 1px; margin-top: 2px; }
  #call-btn {
    width: 100%; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
    background: var(--teal); border: none; color: #fff; padding: 11px 0;
    border-radius: 50px; cursor: pointer; box-shadow: 0 4px 14px rgba(42,124,111,0.35); transition: all 0.15s ease;
  }
  #call-btn:hover { background: var(--teallt); transform: translateY(-1px); }
  #call-btn:disabled { background: #aaa; cursor: not-allowed; transform: none; box-shadow: none; }
  #recent-box { background: rgba(255,255,255,0.08); border: 1px solid rgba(200,147,42,0.2); border-radius: 10px; padding: 10px 12px; flex: 1; overflow-y: auto; max-height: 200px; }
  #recent-box h4 { font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 8px; }
  #recent-list { display: flex; flex-wrap: wrap; gap: 5px; }
  .rcall { width: 36px; height: 26px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; }
  #card-panel { flex: 1; display: flex; flex-direction: column; gap: 7px; }
  .card-header { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px; }
  .card-header-cell {
    background: var(--navy); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: clamp(16px,2.5vw,24px); font-weight: 700; color: var(--gold-lt); padding: 7px 0;
  }
  #bingo-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px; flex: 1; }
  .bingo-cell {
    background: rgba(255,255,255,0.92); border: 2px solid rgba(26,46,59,0.1); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: clamp(14px,2vw,20px); font-weight: 700; color: var(--navy);
    cursor: pointer; transition: all 0.15s ease; user-select: none; position: relative;
    box-shadow: 0 2px 6px rgba(26,46,59,0.1); min-height: 48px;
  }
  .bingo-cell:hover:not(.marked):not(.free) { border-color: var(--gold); transform: scale(1.04); box-shadow: 0 4px 12px rgba(200,147,42,0.3); }
  .bingo-cell.marked { background: var(--navy); border-color: var(--navy); color: #fff; transform: scale(1.02); }
  .bingo-cell.marked::after { content: ''; position: absolute; inset: 5px; background: radial-gradient(circle, var(--gold-lt) 30%, transparent 70%); border-radius: 50%; opacity: 0.35; }
  .bingo-cell.free { background: var(--gold); border-color: var(--gold); color: var(--navy); font-size: clamp(8px,1.1vw,11px); font-family: 'DM Sans', sans-serif; font-weight: 700; letter-spacing: 0.5px; cursor: default; }
  .bingo-cell.winning { background: var(--green) !important; border-color: var(--green) !important; animation: winPulse 0.5s ease infinite alternate; }
  @keyframes winPulse { from { transform: scale(1); } to { transform: scale(1.06); } }
  #board-panel { width: 155px; flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; }
  .board-col { display: flex; flex-direction: column; gap: 3px; }
  .board-col-hdr { background: var(--navy); border-radius: 6px; text-align: center; font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; padding: 4px 0; }
  .board-num { border-radius: 5px; text-align: center; font-size: 10px; font-weight: 600; padding: 3px 0; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); transition: all 0.2s; }
  .board-num.called { color: #fff !important; font-weight: 700; }
  #controls-bar {
    width: 100%; display: flex; justify-content: center; gap: 24px;
    padding: 6px 16px; background: var(--navy); border-radius: 0 0 16px 16px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }
  .ctrl { display: flex; align-items: center; gap: 7px; font-size: 11px; color: rgba(255,255,255,0.5); }
  .ctrl-key { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; padding: 2px 8px; font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.75); }
  #win-screen {
    display: none; background: linear-gradient(150deg, #1a2e3b 0%, #24415a 50%, #2a7c6f 100%);
    border-radius: 24px; flex-direction: column; align-items: center; justify-content: center;
    gap: 20px; padding: 3rem 2rem; width: 100%;
  }
  #win-screen h2 { font-family: 'Playfair Display', serif; font-size: clamp(22px,4vw,38px); color: var(--gold-lt); text-align: center; line-height: 1.3; font-weight: 700; }
  .win-detail { font-size: clamp(13px,2vw,16px); color: rgba(255,255,255,0.7); text-align: center; max-width: 400px; line-height: 1.6; }
  .win-stats { display: flex; gap: 20px; }
  .win-stat { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 14px 22px; text-align: center; }
  .win-stat-val { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: var(--gold-lt); }
  .win-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.45); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }
  #bingo-flash { display: none; position: fixed; inset: 0; background: rgba(26,46,59,0.8); align-items: center; justify-content: center; z-index: 600; }
  #bingo-flash.show { display: flex; }
  .bingo-word { font-family: 'Playfair Display', serif; font-size: clamp(60px,12vw,120px); font-weight: 700; color: var(--gold-lt); text-shadow: 0 0 60px rgba(232,184,75,0.6); animation: popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275); letter-spacing: 8px; }
  @keyframes popIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  #toast { position: fixed; top: 80px; left: 50%; transform: translateX(-50%) translateY(-20px); background: var(--navy); color: #fff; padding: 10px 22px; border-radius: 50px; font-size: 13px; font-weight: 600; border: 1px solid rgba(200,147,42,0.4); opacity: 0; transition: all 0.3s ease; z-index: 550; white-space: nowrap; pointer-events: none; }
  #toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* FOOTER */
  .fops-footer { background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.08); padding: 1.5rem 2rem; }
  .fops-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
  .fops-footer-inner span { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
  .fops-footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .fops-footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.18s; }
  .fops-footer-links a:hover { color: var(--white); }

  @media (max-width: 900px) {
    .bingo-grid { grid-template-columns: 1fr; }
    .fops-logo span { display: none; }
    .form-row { grid-template-columns: 1fr; }
    #game-area { flex-direction: column; }
    #caller-panel { width: 100%; flex-direction: row; flex-wrap: wrap; }
    #board-panel { width: 100%; }
  }
</style>
</head>
<body>
<div id="fops-bingo-root">

  <!-- Navigation -->
  <nav class="fops-nav">
    <div class="fops-nav-inner">
      <a href="/fops/" class="fops-logo">
        <div class="fops-logo-icon">FS</div>
        <span>Friends of Poway Seniors</span>
      </a>
      <div class="fops-menu">
        <div class="fops-dropdown" id="eventsDropdown">
          <button class="fops-nav-link" onclick="toggleDropdown(event)">
            Events <span class="fops-chevron">▼</span>
          </button>
          <div class="fops-dropdown-panel">
            <a href="/fopsshop/" class="fops-dp-item"><div class="fops-dp-icon">🛍️</div> ReRuns Shoppe</a>
            <a href="/fopsbingo/" class="fops-dp-item"><div class="fops-dp-icon">🎱</div> BINGO</a>
            <a href="/fopslunchmd/" class="fops-dp-item"><div class="fops-dp-icon">🍽️</div> Social Lunch</a>
            <a href="/fopsbday/" class="fops-dp-item"><div class="fops-dp-icon">🎂</div> Birthday Certificate</a>
          </div>
        </div>
        <a href="/fopsaboutus/" class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank" class="fops-nav-link fops-donate">Donate</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="bingo-hero">
    <h1 class="bingo-title">Friends of Poway Seniors Bingo</h1>
    <p class="bingo-subtitle">Weekly Games • Community • Prizes</p>
  </section>

  <!-- Tabs -->
  <div class="page-tabs">
    <button class="tab-btn active" onclick="switchTab('info')">📋 Info &amp; Volunteer</button>
    <button class="tab-btn" onclick="switchTab('game')">🎱 Play Bingo</button>
  </div>

  <!-- TAB: INFO & VOLUNTEER -->
  <div id="tab-info" class="tab-content active">
    <div class="api-status">
      <div class="status-banner" id="apiStatus">
        <span class="status-dot disconnected" id="statusDot"></span>
        <span class="status-text disconnected" id="statusText">Checking API connection...</span>
      </div>
    </div>

    <div class="bingo-grid">
      <!-- Left: Info -->
      <div class="bingo-info">
        <div class="info-section">
          <h2>Bingo</h2>
          <div class="info-card">
            <h3>Mickey Cafagna Community Center</h3>
            <div class="info-row"><span class="info-label">Address:</span><span class="info-value">13094 Civic Center Dr. Poway, CA 92064</span></div>
            <div class="info-row"><span class="info-label">Hall:</span><span class="info-value">Sycamore Hall</span></div>
            <ul class="hours-list">
              <li><span class="day">Tuesday</span><span class="time">Sales: 9:30 AM • Game: 11:30 AM</span></li>
              <li><span class="day">Sunday</span><span class="time">Sales: 10:30 AM • Game: 12:30 PM</span></li>
            </ul>
            <div class="doors-open-notice">
              <p>Doors Open at 9:00 AM</p>
              <div class="note">Maximum of two adjacent seats may be reserved per player</div>
            </div>
          </div>
        </div>

        <div class="info-section">
          <h2>Pricing</h2>
          <div class="info-card">
            <div class="price-tag"><span class="price-label">Minimum Buy-in</span><span class="price-value">$13.00</span></div>
            <div class="price-tag"><span class="price-label">One of Each Game</span><span class="price-value">$19.00</span></div>
            <div class="price-tag"><span class="price-label">Poway Ball</span><span class="price-value">$1.00 each</span></div>
          </div>
        </div>

        <div class="info-section">
          <h2>Tuesday Lunch Program</h2>
          <div class="lunch-card">
            <div class="lunch-title">Pre-order Required</div>
            <p class="lunch-detail"><span class="lunch-highlight">Deadline:</span> Orders by 1:00 PM day before Tuesday game</p>
            <p class="lunch-detail"><span class="lunch-highlight">Note:</span> Lunch not available on Sundays</p>
          </div>
        </div>

        <div class="info-section">
          <h2>Game Rules</h2>
          <div class="info-card">
            <div class="rule-item"><span class="rule-bullet">•</span><span>Numbers called every 13 seconds</span></div>
            <div class="rule-item"><span class="rule-bullet">•</span><span>Players must be 18 years or older</span></div>
            <div class="rule-item"><span class="rule-bullet">•</span><span>Please be respectful of Bingo Volunteers</span></div>
            <div class="rule-item"><span class="rule-bullet">•</span><span>Management reserves rights to refuse service</span></div>
          </div>
        </div>

        <div class="info-section">
          <h2>Concessions</h2>
          <div class="info-card">
            <div class="concessions-grid">
              <div class="concession-item">Snacks</div>
              <div class="concession-item">Daubers</div>
              <div class="concession-item">Credit Cards Accepted</div>
              <div class="concession-item free-coffee">Complimentary Coffee</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Volunteer -->
      <div class="volunteer-section">
        <div class="volunteer-header">
          <h2>Volunteer Opportunities</h2>
          <p>Join our team of Bingo volunteers</p>
        </div>
        <div id="alertContainer"></div>
        <form id="volunteerForm">
          <div class="form-row">
            <div class="form-group"><label for="first_name">First Name *</label><input type="text" id="first_name" required placeholder="John"></div>
            <div class="form-group"><label for="last_name">Last Name *</label><input type="text" id="last_name" required placeholder="Doe"></div>
          </div>
          <div class="form-group"><label for="email">Email Address *</label><input type="email" id="email" required placeholder="your.email@example.com"></div>
          <div class="form-group"><label for="phone">Phone Number</label><input type="tel" id="phone" placeholder="(858) 555-1234"></div>
          <div class="form-group">
            <label>Availability</label>
            <div class="checkbox-group">
              <div class="checkbox-item"><input type="checkbox" id="avail_tue" name="availability_days" value="Tuesday"><label for="avail_tue">Tuesday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_sun" name="availability_days" value="Sunday"><label for="avail_sun">Sunday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_both" name="availability_days" value="Both"><label for="avail_both">Both Days</label></div>
            </div>
          </div>
          <div class="form-group">
            <label>Preferred Role</label>
            <div class="checkbox-group">
              <div class="checkbox-item"><input type="checkbox" id="role_caller" name="preferred_roles" value="Number Caller"><label for="role_caller">Number Caller</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_sales" name="preferred_roles" value="Ticket Sales"><label for="role_sales">Ticket Sales</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_snacks" name="preferred_roles" value="Snack Bar"><label for="role_snacks">Snack Bar</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_setup" name="preferred_roles" value="Setup/Cleanup"><label for="role_setup">Setup / Cleanup</label></div>
            </div>
          </div>
          <div class="form-group"><label for="experience">Previous Experience (optional)</label><textarea id="experience" rows="2" placeholder="Please describe any relevant experience..."></textarea></div>
          <button type="button" class="btn-submit" id="submitBtn">Submit Volunteer Application</button>
        </form>
        <div style="margin-top: 1.5rem; text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem;">
          <p>You will be contacted within 3-5 business days.</p>
        </div>
      </div>
    </div>
  </div><!-- /tab-info -->

  <!-- TAB: PLAY BINGO -->
  <div id="tab-game" class="tab-content">
    <div id="game-tab-content">

      <!-- Title Screen -->
      <div id="title-screen">
        <div class="badge">Friends of Poway Seniors</div>
        <h1><em>Bingo</em> Night!</h1>
        <p class="title-desc">A classic game of Bingo — call numbers, mark your card, and shout BINGO when you win!</p>
        <div class="info-pills">
          <div class="info-pill">🎱 75-Ball Bingo</div>
          <div class="info-pill">5×5 Card</div>
          <div class="info-pill">Auto-Caller</div>
          <div class="info-pill">Row · Col · Diagonal</div>
        </div>
        <button class="pixel-btn" id="startBtn">Play Bingo →</button>
        <p style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;">Numbers on your card are marked automatically</p>
      </div>

      <!-- Game Wrapper -->
      <div id="game-wrapper">
        <div id="hud">
          <div class="hud-left">
            <div class="hud-logo">Friends of Poway Seniors</div>
            <div class="hud-sep"></div>
            <div class="hud-sub">Bingo Night</div>
          </div>
          <div class="hud-right">
            <div class="hud-stat"><div class="hud-lbl">Numbers Called</div><div class="hud-val" id="hud-called">0 / 75</div></div>
            <div class="hud-stat"><div class="hud-lbl">Marked</div><div class="hud-val" id="hud-marked">0 / 25</div></div>
          </div>
        </div>

        <div id="game-area">
          <div id="caller-panel">
            <div class="panel-title">📢 Caller</div>
            <div id="called-display">
              <div id="called-letter" style="color:#aaa;">—</div>
              <div id="called-number">—</div>
              <div id="called-label">LAST CALLED</div>
            </div>
            <button id="call-btn">Draw Next Number</button>
            <div id="recent-box">
              <h4>Called Numbers</h4>
              <div id="recent-list"></div>
            </div>
          </div>

          <div id="card-panel">
            <div class="card-header" id="card-header"></div>
            <div id="bingo-grid"></div>
          </div>

          <div id="board-panel"></div>
        </div>

        <div id="controls-bar">
          <div class="ctrl"><span class="ctrl-key">Draw Next Number</span> Call a ball</div>
          <div class="ctrl"><span class="ctrl-key">Space / Enter</span> Keyboard shortcut</div>
          <div class="ctrl">Rows · Columns · Diagonals win</div>
        </div>
      </div>

      <!-- Win Screen -->
      <div id="win-screen">
        <h2>🎉 BINGO!<br>You Won!</h2>
        <p class="win-detail">Congratulations! Thanks for playing Bingo Night with Friends of Poway Seniors!</p>
        <div class="win-stats">
          <div class="win-stat"><div class="win-stat-val" id="ws-called">—</div><div class="win-stat-lbl">Balls Called</div></div>
          <div class="win-stat"><div class="win-stat-val" id="ws-marked">—</div><div class="win-stat-lbl">Cells Marked</div></div>
        </div>
        <div style="display:flex;gap:12px;">
          <button class="pixel-btn" id="playAgainBtn">Play Again</button>
          <button class="pixel-btn secondary" id="keepGoingBtn">Keep Playing</button>
        </div>
      </div>

    </div>
  </div><!-- /tab-game -->

  <!-- Overlays -->
  <div id="bingo-flash"><div class="bingo-word">BINGO!</div></div>
  <div id="toast"></div>

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

<!-- API / Volunteer form (module) -->
<script type="importmap">
  {
    "imports": {
      "@api/config": "{{ site.baseurl }}/assets/js/api/config.js"
    }
  }
</script>

<script type="module">
  import { pythonURI, fetchOptions } from '@api/config';

  window.switchTab = function(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    document.querySelectorAll('.tab-btn')[tab === 'info' ? 0 : 1].classList.add('active');
  };

  window.toggleDropdown = function(e) {
    e.stopPropagation();
    const dd = document.getElementById('eventsDropdown');
    if (dd) dd.classList.toggle('open');
  };
  document.addEventListener('click', e => {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });

  const statusDot  = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');

  async function testAPIConnection() {
    try {
      const res = await fetch(`${pythonURI}/api/bingo/test`, {
        ...fetchOptions, method: 'GET', headers: { 'Content-Type': 'application/json' }, mode: 'cors'
      });
      if (res.ok) {
        const data = await res.json();
        statusDot.className  = 'status-dot connected';
        statusText.className = 'status-text connected';
        statusText.textContent = `✅ API Ready · ${data.message || 'System online'}`;
      } else { throw new Error(`HTTP ${res.status}`); }
    } catch {
      statusDot.className  = 'status-dot disconnected';
      statusText.className = 'status-text disconnected';
      statusText.textContent = `⚠️ Backend unreachable · ensure server runs at ${pythonURI}`;
    }
  }

  const alertContainer = document.getElementById('alertContainer');
  const submitBtn      = document.getElementById('submitBtn');
  const volunteerForm  = document.getElementById('volunteerForm');

  function showAlert(msg, type = 'error') {
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = msg;
    alertContainer.appendChild(div);
    setTimeout(() => div.remove(), 5000);
  }

  async function submitVolunteerForm() {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    alertContainer.innerHTML = '';
    const firstName = document.getElementById('first_name').value.trim();
    const lastName  = document.getElementById('last_name').value.trim();
    const email     = document.getElementById('email').value.trim();
    if (!firstName || !lastName || !email) {
      showAlert('Please fill in all required fields (First Name, Last Name, Email)');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Volunteer Application';
      return;
    }
    const availabilityDays = [...document.querySelectorAll('input[name="availability_days"]:checked')].map(cb => cb.value);
    const preferredRoles   = [...document.querySelectorAll('input[name="preferred_roles"]:checked')].map(cb => cb.value);
    const payload = {
      first_name: firstName, last_name: lastName, email,
      phone: document.getElementById('phone').value.trim() || '',
      availability: availabilityDays.join(', '), availability_days: availabilityDays,
      preferred_roles: preferredRoles,
      experience: document.getElementById('experience').value.trim() || ''
    };
    try {
      const res = await fetch(`${pythonURI}/api/bingo/volunteer`, {
        ...fetchOptions, method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: 'cors',
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        showAlert(`${result.message || 'Application received!'} Volunteer ID: ${result.volunteer_id}`, 'success');
        volunteerForm.reset();
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else { showAlert(`Error: ${result.error || 'Submission failed'}`); }
    } catch {
      showAlert(`Network error. Could not reach backend at ${pythonURI}.`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Volunteer Application';
    }
  }

  submitBtn.onclick = submitVolunteerForm;
  testAPIConnection();
</script>

<!-- Bingo Game Engine (vanilla JS) -->
<script>
const LETTERS    = ['B','I','N','G','O'];
const COL_RANGES = { B:[1,15], I:[16,30], N:[31,45], G:[46,60], O:[61,75] };
const COL_COLORS = { B:'#c8932a', I:'#2a7c6f', N:'#2a5c7c', G:'#7c2a5c', O:'#c0392b' };

let gs = {
  card:[], marked:[], calledNums:new Set(),
  callOrder:[], callIndex:0, hasBingo:false, winningCells:new Set()
};

function range(lo,hi){const a=[];for(let i=lo;i<=hi;i++)a.push(i);return a;}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function numToLetter(n){if(n<=15)return'B';if(n<=30)return'I';if(n<=45)return'N';if(n<=60)return'G';return'O';}

function generateCard(){
  const cols=LETTERS.map(l=>{const[lo,hi]=COL_RANGES[l];return shuffle(range(lo,hi)).slice(0,5);});
  const rows=[];for(let r=0;r<5;r++)rows.push(cols.map(c=>c[r]));
  rows[2][2]=0;return rows;
}

function initGame(){
  gs.card=generateCard();
  gs.marked=Array.from({length:5},()=>Array(5).fill(false));
  gs.marked[2][2]=true;
  gs.calledNums=new Set();gs.callOrder=shuffle(range(1,75));
  gs.callIndex=0;gs.hasBingo=false;gs.winningCells=new Set();
  renderCard();renderBoard();renderRecentCalls();
  updateCalledDisplay('—','—','#aaa');updateHUD();
  document.getElementById('call-btn').disabled=false;
  document.getElementById('win-screen').style.display='none';
}

function renderCard(){
  document.getElementById('card-header').innerHTML=
    LETTERS.map(l=>`<div class="card-header-cell" style="color:${COL_COLORS[l]}">${l}</div>`).join('');
  const grid=document.getElementById('bingo-grid');grid.innerHTML='';
  for(let r=0;r<5;r++)for(let c=0;c<5;c++){
    const num=gs.card[r][c];const cell=document.createElement('div');
    cell.className='bingo-cell';cell.dataset.row=r;cell.dataset.col=c;
    if(num===0){cell.classList.add('free','marked');cell.textContent='FREE';}
    else{cell.textContent=num;if(gs.marked[r][c])cell.classList.add('marked');}
    if(gs.winningCells.has(`${r},${c}`))cell.classList.add('winning');
    cell.addEventListener('click',()=>onCellClick(r,c));
    grid.appendChild(cell);
  }
}

function onCellClick(r,c){
  if(gs.card[r][c]===0)return;
  const num=gs.card[r][c];
  if(!gs.calledNums.has(num)){showToast(`${numToLetter(num)}-${num} hasn't been called yet!`);return;}
  gs.marked[r][c]=!gs.marked[r][c];renderCard();updateHUD();checkBingo();
}

function callNext(){
  if(gs.callIndex>=75){showToast('All 75 numbers have been called!');document.getElementById('call-btn').disabled=true;return;}
  const num=gs.callOrder[gs.callIndex++];const letter=numToLetter(num);
  gs.calledNums.add(num);
  updateCalledDisplay(letter,num,COL_COLORS[letter]);
  let autoMarked=false;
  for(let r=0;r<5;r++)for(let c=0;c<5;c++)if(gs.card[r][c]===num){gs.marked[r][c]=true;autoMarked=true;}
  renderCard();renderRecentCalls();updateBoard(num);updateHUD();
  if(autoMarked)showToast(`${letter}-${num} is on your card! ✓`);
  checkBingo();
}

function updateCalledDisplay(l,n,color){
  document.getElementById('called-letter').textContent=l;
  document.getElementById('called-letter').style.color=color;
  document.getElementById('called-number').textContent=n;
}

function checkBingo(){
  if(gs.hasBingo)return;
  const m=gs.marked;const wins=[];
  for(let r=0;r<5;r++)if(m[r].every(v=>v))wins.push(...[0,1,2,3,4].map(c=>`${r},${c}`));
  for(let c=0;c<5;c++)if([0,1,2,3,4].every(r=>m[r][c]))wins.push(...[0,1,2,3,4].map(r=>`${r},${c}`));
  if([0,1,2,3,4].every(i=>m[i][i]))wins.push(...[0,1,2,3,4].map(i=>`${i},${i}`));
  if([0,1,2,3,4].every(i=>m[i][4-i]))wins.push(...[0,1,2,3,4].map(i=>`${i},${4-i}`));
  if(wins.length>0){
    gs.hasBingo=true;gs.winningCells=new Set(wins);renderCard();
    const flash=document.getElementById('bingo-flash');
    flash.classList.add('show');
    setTimeout(()=>{flash.classList.remove('show');showWinScreen();},1800);
  }
}

function showWinScreen(){
  document.getElementById('ws-called').textContent=gs.calledNums.size;
  document.getElementById('ws-marked').textContent=gs.marked.flat().filter(Boolean).length;
  document.getElementById('win-screen').style.display='flex';
  document.getElementById('game-wrapper').style.display='none';
}

function renderBoard(){
  const panel=document.getElementById('board-panel');
  panel.innerHTML='<div class="panel-title">📋 Board</div>';
  const row=document.createElement('div');row.style.cssText='display:flex;gap:4px;flex:1;';
  LETTERS.forEach(l=>{
    const[lo,hi]=COL_RANGES[l];
    const col=document.createElement('div');col.className='board-col';col.style.flex='1';
    const hdr=document.createElement('div');hdr.className='board-col-hdr';hdr.style.color=COL_COLORS[l];hdr.textContent=l;
    col.appendChild(hdr);
    for(let n=lo;n<=hi;n++){const d=document.createElement('div');d.className='board-num';d.id=`bn-${n}`;d.textContent=n;col.appendChild(d);}
    row.appendChild(col);
  });
  panel.appendChild(row);
}

function updateBoard(num){
  const el=document.getElementById(`bn-${num}`);
  if(el){el.classList.add('called');el.style.background=COL_COLORS[numToLetter(num)];}
}

function renderRecentCalls(){
  document.getElementById('recent-list').innerHTML=
    gs.callOrder.slice(0,gs.callIndex).slice(-20).reverse()
    .map(n=>`<div class="rcall" style="background:${COL_COLORS[numToLetter(n)]}">${numToLetter(n)}${n}</div>`).join('');
}

function updateHUD(){
  document.getElementById('hud-called').textContent=`${gs.calledNums.size} / 75`;
  document.getElementById('hud-marked').textContent=`${gs.marked.flat().filter(Boolean).length} / 25`;
}

let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}

document.getElementById('startBtn').addEventListener('click',()=>{
  window.switchTab('game');
  document.getElementById('title-screen').style.display='none';
  document.getElementById('game-wrapper').style.display='flex';
  document.getElementById('win-screen').style.display='none';
  initGame();
});
document.getElementById('call-btn').addEventListener('click',callNext);
document.getElementById('playAgainBtn').addEventListener('click',()=>{
  document.getElementById('win-screen').style.display='none';
  document.getElementById('game-wrapper').style.display='flex';
  initGame();
});
document.getElementById('keepGoingBtn').addEventListener('click',()=>{
  gs.hasBingo=false;
  document.getElementById('win-screen').style.display='none';
  document.getElementById('game-wrapper').style.display='flex';
  showToast('Keep going — playing for coverall! 🎱');
});

document.addEventListener('keydown',e=>{
  if((e.key===' '||e.key==='Enter')&&
     document.getElementById('tab-game').classList.contains('active')&&
     document.getElementById('game-wrapper').style.display!=='none'&&
     document.getElementById('win-screen').style.display==='none'){
    const btn=document.getElementById('call-btn');
    if(btn&&!btn.disabled){callNext();e.preventDefault();}
  }
});
</script>

</body>
</html>