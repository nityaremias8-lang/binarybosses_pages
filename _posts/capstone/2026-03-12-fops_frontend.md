---
toc: false
layout: post
title: Friends of Poway Seniors
description: Home Navigation
permalink: /fops/
sticky_rank: 1
---

<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Friends of Poway Seniors</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --sage:    #4a7c59;
    --sage-lt: #7aad8b;
    --sage-dk: #2e5238;
    --cream:   #faf7f2;
    --warm:    #f0ebe0;
    --gold:    #c9913d;
    --gold-lt: #e8c37a;
    --text:    #1e2a1e;
    --muted:   #6b7c6b;
    --white:   #ffffff;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    height: 100%;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
    background: var(--sage-dk);
    color: var(--text);
  }

  h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }

  /* ── PAGE WRAPPER ── */
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ── ALERT BANNER ── */
  .alert-banner {
    background: var(--gold);
    color: var(--white);
    padding: 0.65rem 2rem;
    text-align: center;
    font-size: 0.85rem;
    font-weight: 500;
    flex-shrink: 0;
  }
  .alert-banner a { color: var(--white); font-weight: 700; text-underline-offset: 3px; }

  /* ── HEADER ── */
  .site-header {
    background: rgba(250,247,242,0.07);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding: 0 2.5rem;
    flex-shrink: 0;
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 12px;
    text-decoration: none;
  }
  .nav-logo-icon {
    width: 42px; height: 42px;
    background: var(--sage);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
  .nav-logo span {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--white);
    letter-spacing: 0.01em;
  }
  .donate-btn {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--gold);
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.88rem;
    padding: 0.5rem 1.25rem;
    border-radius: 24px;
    transition: all 0.2s;
    box-shadow: 0 2px 12px rgba(201,145,61,0.4);
  }
  .donate-btn:hover { background: #b07e2e; transform: translateY(-1px); }

  /* ── MAIN CONTENT ── */
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem 1.5rem;
    position: relative;
    overflow: hidden;
  }

  /* Background geometric pattern */
  .main-content::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px);
    pointer-events: none;
  }
  .main-content::after {
    content: '';
    position: absolute;
    top: -30%; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 500px;
    background: radial-gradient(ellipse, rgba(201,145,61,0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  /* ── INTRO TEXT ── */
  .intro {
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative; z-index: 2;
  }
  .intro-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.1);
    color: var(--gold-lt);
    border: 1px solid rgba(255,255,255,0.2);
    font-size: 0.75rem; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.35rem 1rem; border-radius: 20px;
    margin-bottom: 1rem;
  }
  .intro h1 {
    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
    color: var(--white);
    margin-bottom: 0.6rem;
  }
  .intro h1 em { color: var(--gold-lt); font-style: italic; }
  .intro p {
    font-size: 0.97rem;
    color: rgba(255,255,255,0.65);
    max-width: 440px;
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.6;
  }

  /* ── NAV BUTTONS GRID ── */
  .nav-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
    max-width: 780px;
    position: relative; z-index: 2;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 1.6rem 1.75rem;
    text-decoration: none;
    color: var(--white);
    transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    backdrop-filter: blur(8px);
  }

  /* Hover shimmer */
  .nav-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.25s;
    border-radius: inherit;
  }
  .nav-btn:hover::before { opacity: 1; }

  /* Bottom accent line */
  .nav-btn::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    border-radius: 0 0 18px 18px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  .nav-btn:hover::after { transform: scaleX(1); }
  .nav-btn:hover {
    background: rgba(255,255,255,0.13);
    border-color: rgba(255,255,255,0.25);
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  }

  /* Per-button accent colors */
  .nav-btn.mission::after  { background: linear-gradient(90deg, var(--gold), var(--gold-lt)); }
  .nav-btn.events::after   { background: linear-gradient(90deg, var(--sage-lt), #a8d5b5); }
  .nav-btn.about::after    { background: linear-gradient(90deg, #7eb8d4, #a8d5ea); }
  .nav-btn.resources::after { background: linear-gradient(90deg, #c97e7e, #e8a8a8); }

  .btn-icon {
    width: 58px; height: 58px;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.7rem;
    flex-shrink: 0;
    transition: transform 0.25s;
  }
  .nav-btn:hover .btn-icon { transform: scale(1.1); }

  .mission  .btn-icon { background: rgba(201,145,61,0.25);  }
  .events   .btn-icon { background: rgba(122,173,139,0.25); }
  .about    .btn-icon { background: rgba(126,184,212,0.25); }
  .resources .btn-icon { background: rgba(201,126,126,0.25); }

  .btn-text { flex: 1; }
  .btn-label {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.25rem;
    line-height: 1.2;
  }
  .btn-desc {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.55);
    font-weight: 400;
    line-height: 1.4;
  }
  .btn-arrow {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.35);
    transition: all 0.25s;
    flex-shrink: 0;
  }
  .nav-btn:hover .btn-arrow {
    color: rgba(255,255,255,0.8);
    transform: translateX(4px);
  }

  /* ── FOOTER BAR ── */
  .footer-bar {
    flex-shrink: 0;
    padding: 0.75rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.08);
    background: rgba(0,0,0,0.15);
  }
  .footer-bar span {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }
  .footer-bar a {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-bar a:hover { color: var(--gold-lt); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .intro       { animation: fadeUp 0.6s ease both; }
  .nav-btn     { animation: fadeUp 0.6s ease both; }
  .nav-btn:nth-child(1) { animation-delay: 0.1s; }
  .nav-btn:nth-child(2) { animation-delay: 0.18s; }
  .nav-btn:nth-child(3) { animation-delay: 0.26s; }
  .nav-btn:nth-child(4) { animation-delay: 0.34s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .nav-grid { grid-template-columns: 1fr; max-width: 420px; gap: 1rem; }
    .intro { margin-bottom: 1.75rem; }
    .intro h1 { font-size: 1.7rem; }
    .nav-btn { padding: 1.25rem 1.25rem; }
    .btn-icon { width: 48px; height: 48px; font-size: 1.4rem; }
    .btn-label { font-size: 1.15rem; }
    .site-header { padding: 0 1.25rem; }
    .footer-bar { padding: 0.65rem 1.25rem; }
    .alert-banner { font-size: 0.78rem; padding: 0.5rem 1rem; }
    .donate-btn span { display: none; }
  }
</style>
</head>
<body>

<div class="page">

  <!-- ALERT BANNER -->
  <div class="alert-banner">
    🍽️ <strong>New Congregate Senior Lunch Program</strong> — Chef Charlie's Classic Cooking. Reservations required by 1 PM the day before.
    <a href="https://poway.org/1073/Meal-Program" target="_blank">Learn more →</a>
  </div>

  <!-- HEADER -->
  <header class="site-header">
    <div class="header-inner">
      <a href="/fops/" class="nav-logo">
        <div class="nav-logo-icon">🌲</div>
        <span>Friends of Poway Seniors</span>
      </a>
      <a href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgateway.clearent.net%2Fpaylink%2F000001634294%2F16126366" target="_blank" class="donate-btn">
        ♥ <span>Donate</span>
      </a>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="main-content">

    <div class="intro">
      <div class="intro-badge">🌿 Serving Poway Since 1974</div>
      <h1>Enriching Lives,<br><em>One Senior at a Time</em></h1>
      <p>Supporting seniors and marginalized communities through volunteer opportunities, material provisions, and community outreach.</p>
    </div>

    <div class="nav-grid">

      <!-- MISSION & VISION -->
      <a href="/fopsmissionandvision/" class="nav-btn mission">
        <div class="btn-icon">🌿</div>
        <div class="btn-text">
          <div class="btn-label">Mission & Vision</div>
          <div class="btn-desc">Our purpose, values, and the future we're building together</div>
        </div>
        <div class="btn-arrow">→</div>
      </a>

      <!-- EVENTS -->
      <a href="/fopsevents/" class="nav-btn events">
        <div class="btn-icon">📅</div>
        <div class="btn-text">
          <div class="btn-label">Events</div>
          <div class="btn-desc">BINGO nights, senior lunches, and upcoming community programs</div>
        </div>
        <div class="btn-arrow">→</div>
      </a>

      <!-- ABOUT US -->
      <a href="/fopsaboutus/" class="nav-btn about">
        <div class="btn-icon">🤝</div>
        <div class="btn-text">
          <div class="btn-label">About Us</div>
          <div class="btn-desc">Our history, team, partners, and community impact since 1974</div>
        </div>
        <div class="btn-arrow">→</div>
      </a>

      <!-- RESOURCES -->
      <a href="/fopsresources/" class="nav-btn resources">
        <div class="btn-icon">📚</div>
        <div class="btn-text">
          <div class="btn-label">Resources</div>
          <div class="btn-desc">Programs, services, and support available for seniors</div>
        </div>
        <div class="btn-arrow">→</div>
      </a>

    </div>
  </main>

  <!-- FOOTER BAR -->
  <div class="footer-bar">
    <span>© 2025 PVSCC 501(c)(3) · EIN: 51-0183384</span>
    <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank">📘 Facebook</a>
  </div>

</div>

</body>
</html>