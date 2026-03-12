---
toc: false
layout: post
title: Friends of Poway Seniors Frontend
description: A redesign of the Friends of Poway Seniors Website
permalink: /fops/
sticky_rank: 1
---

<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Friends of Poway Seniors</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
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
    --radius:  12px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--text);
    line-height: 1.65;
  }

  h1,h2,h3,h4 { font-family: 'Playfair Display', serif; line-height: 1.2; }

  /* ── NAV ───────────────────────────────────────────────── */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(250,247,242,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(74,124,89,0.15);
    padding: 0 2rem;
  }
  .nav-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    height: 70px;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; color: var(--sage-dk);
  }
  .nav-logo-icon {
    width: 40px; height: 40px;
    background: var(--sage);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .nav-logo span { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; }
  .nav-links { display: flex; align-items: center; gap: 0.25rem; }
  .nav-links a {
    text-decoration: none; color: var(--muted); font-size: 0.9rem; font-weight: 500;
    padding: 0.4rem 0.85rem; border-radius: 6px; transition: all 0.2s;
  }
  .nav-links a:hover { background: var(--warm); color: var(--sage-dk); }
  .nav-donate {
    background: var(--sage) !important; color: var(--white) !important;
    padding: 0.45rem 1.1rem !important; border-radius: 20px !important;
  }
  .nav-donate:hover { background: var(--sage-dk) !important; }

  /* ── HERO ──────────────────────────────────────────────── */
  .hero {
    min-height: 88vh;
    background: linear-gradient(135deg, var(--sage-dk) 0%, var(--sage) 60%, var(--sage-lt) 100%);
    display: flex; align-items: center;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(201,145,61,0.18) 0%, transparent 70%);
  }
  .hero-pattern {
    position: absolute; top: 0; right: 0; width: 55%; height: 100%;
    opacity: 0.06;
    background-image: repeating-linear-gradient(45deg, var(--white) 0px, var(--white) 1px, transparent 1px, transparent 40px),
                      repeating-linear-gradient(-45deg, var(--white) 0px, var(--white) 1px, transparent 1px, transparent 40px);
  }
  .hero-content {
    position: relative; z-index: 2;
    max-width: 1200px; margin: 0 auto; padding: 5rem 2rem;
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.15); color: var(--gold-lt);
    border: 1px solid rgba(255,255,255,0.25);
    font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.4rem 1rem; border-radius: 20px; margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.8rem); color: var(--white);
    margin-bottom: 1.25rem;
  }
  .hero h1 em { color: var(--gold-lt); font-style: normal; }
  .hero p {
    font-size: 1.1rem; color: rgba(255,255,255,0.82);
    max-width: 480px; margin-bottom: 2rem; font-weight: 300;
  }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--white);
    text-decoration: none; font-weight: 600; font-size: 0.95rem;
    padding: 0.85rem 1.75rem; border-radius: 30px;
    transition: all 0.25s; box-shadow: 0 4px 20px rgba(201,145,61,0.4);
  }
  .btn-primary:hover { background: #b07e2e; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(201,145,61,0.5); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    border: 2px solid rgba(255,255,255,0.5); color: var(--white);
    text-decoration: none; font-weight: 600; font-size: 0.95rem;
    padding: 0.85rem 1.75rem; border-radius: 30px;
    transition: all 0.25s;
  }
  .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: var(--white); }
  .hero-card {
    background: rgba(255,255,255,0.12); backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px; padding: 2rem;
  }
  .hero-card h3 { color: var(--white); font-size: 1.1rem; margin-bottom: 1rem; }
  .hero-stat { margin-bottom: 1.25rem; }
  .hero-stat .num { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: var(--gold-lt); }
  .hero-stat .label { font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-top: 2px; }
  .hero-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }

  /* ── ALERT BANNER ──────────────────────────────────────── */
  .alert-banner {
    background: var(--gold); color: var(--white);
    padding: 0.9rem 2rem; text-align: center; font-size: 0.92rem; font-weight: 500;
  }
  .alert-banner a { color: var(--white); font-weight: 700; text-underline-offset: 3px; }

  /* ── SECTION BASE ──────────────────────────────────────── */
  section { padding: 5rem 2rem; }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-label {
    font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--sage); margin-bottom: 0.6rem;
  }
  .section-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: var(--text); margin-bottom: 1rem; }
  .section-sub { font-size: 1.05rem; color: var(--muted); max-width: 560px; }
  .section-header { margin-bottom: 3rem; }
  .section-header.centered { text-align: center; }
  .section-header.centered .section-sub { margin: 0 auto; }

  /* ── SERVICES GRID ─────────────────────────────────────── */
  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;
  }
  .service-card {
    background: var(--white); border-radius: var(--radius);
    padding: 2rem; border: 1px solid rgba(74,124,89,0.1);
    transition: all 0.3s; position: relative; overflow: hidden;
  }
  .service-card::before {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--sage), var(--gold));
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .service-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }
  .service-card:hover::before { transform: scaleX(1); }
  .service-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: var(--warm); display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 1.25rem;
  }
  .service-card h3 { font-size: 1.15rem; margin-bottom: 0.6rem; color: var(--text); }
  .service-card p { font-size: 0.92rem; color: var(--muted); }
  .service-card a { color: var(--sage); font-weight: 600; text-decoration: none; font-size: 0.9rem; }

  /* ── MISSION / ABOUT ───────────────────────────────────── */
  .about-section { background: var(--white); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .about-image-stack { position: relative; height: 420px; }
  .img-placeholder {
    border-radius: var(--radius); overflow: hidden; position: absolute;
  }
  .img-main {
    width: 80%; height: 320px; top: 0; left: 0;
    background: linear-gradient(135deg, var(--sage-lt), var(--sage-dk));
    display: flex; align-items: center; justify-content: center;
    color: var(--white); font-size: 5rem;
  }
  .img-secondary {
    width: 55%; height: 200px; bottom: 0; right: 0;
    background: linear-gradient(135deg, var(--gold-lt), var(--gold));
    display: flex; align-items: center; justify-content: center;
    color: var(--white); font-size: 3rem;
    border: 4px solid var(--cream);
  }
  .mission-pillars { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2rem; }
  .pillar {
    display: flex; gap: 1rem; align-items: flex-start;
    padding: 1.1rem 1.25rem; background: var(--cream); border-radius: 10px;
  }
  .pillar-icon { font-size: 1.3rem; flex-shrink: 0; }
  .pillar h4 { font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--text); }
  .pillar p { font-size: 0.88rem; color: var(--muted); margin-top: 2px; }

  /* ── PROGRAMS ──────────────────────────────────────────── */
  .programs-section { background: var(--warm); }
  .program-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
  .program-card {
    background: var(--white); border-radius: 16px; overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06); transition: all 0.3s;
  }
  .program-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.12); transform: translateY(-3px); }
  .program-header {
    padding: 1.5rem 1.75rem 1.25rem;
    border-bottom: 1px solid var(--warm);
  }
  .program-tag {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--sage); background: rgba(74,124,89,0.1); border-radius: 20px;
    padding: 0.25rem 0.75rem; display: inline-block; margin-bottom: 0.75rem;
  }
  .program-card h3 { font-size: 1.3rem; color: var(--text); }
  .program-body { padding: 1.25rem 1.75rem 1.75rem; }
  .program-body p { font-size: 0.92rem; color: var(--muted); margin-bottom: 1.25rem; }
  .program-meta { display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--muted); }
  .program-meta span { display: flex; align-items: center; gap: 5px; }
  .learn-link { color: var(--sage); font-weight: 600; text-decoration: none; font-size: 0.9rem; }
  .learn-link:hover { text-decoration: underline; }

  /* ── IMPACT STATS ──────────────────────────────────────── */
  .impact-section {
    background: linear-gradient(135deg, var(--sage-dk) 0%, var(--sage) 100%);
    color: var(--white);
  }
  .impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
  .impact-item {
    text-align: center; padding: 2.5rem 1rem;
    background: rgba(255,255,255,0.08); border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .impact-num { font-family: 'Playfair Display', serif; font-size: 2.8rem; font-weight: 700; color: var(--gold-lt); }
  .impact-label { font-size: 0.88rem; color: rgba(255,255,255,0.75); margin-top: 6px; }

  /* ── VOLUNTEER ─────────────────────────────────────────── */
  .volunteer-section { background: var(--cream); }
  .volunteer-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; }
  .vol-list { display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; }
  .vol-item {
    display: flex; align-items: center; gap: 1rem;
    background: var(--white); padding: 1rem 1.25rem; border-radius: 10px;
    border: 1px solid rgba(74,124,89,0.1); transition: border-color 0.2s;
  }
  .vol-item:hover { border-color: var(--sage-lt); }
  .vol-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--sage); flex-shrink: 0; }
  .vol-item span { font-size: 0.95rem; font-weight: 500; }
  .vol-cta {
    background: linear-gradient(135deg, var(--sage-dk), var(--sage));
    border-radius: 20px; padding: 3rem; color: var(--white); text-align: center;
  }
  .vol-cta h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .vol-cta p { font-size: 0.92rem; color: rgba(255,255,255,0.8); margin-bottom: 1.75rem; }

  /* ── UPCOMING ──────────────────────────────────────────── */
  .upcoming-section { background: var(--white); }
  .events-list { display: flex; flex-direction: column; gap: 1rem; }
  .event-item {
    display: flex; gap: 1.5rem; align-items: flex-start;
    padding: 1.5rem; background: var(--cream); border-radius: var(--radius);
    border: 1px solid transparent; transition: all 0.2s;
  }
  .event-item:hover { border-color: var(--sage-lt); background: var(--white); }
  .event-date {
    flex-shrink: 0; width: 60px; height: 60px; border-radius: 12px;
    background: var(--sage); color: var(--white); text-align: center;
    display: flex; flex-direction: column; justify-content: center;
  }
  .event-date .day { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; line-height: 1; }
  .event-date .month { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.85; }
  .event-info h4 { font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem; }
  .event-info p { font-size: 0.88rem; color: var(--muted); }

  /* ── CONTACT / FOOTER ──────────────────────────────────── */
  .contact-section { background: var(--warm); }
  .contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; }
  .contact-card {
    background: var(--white); border-radius: var(--radius);
    padding: 1.75rem; border: 1px solid rgba(74,124,89,0.1);
    margin-bottom: 1rem;
  }
  .contact-card h4 { font-family: 'DM Sans',sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--sage-dk); margin-bottom: 0.5rem; }
  .contact-card p { font-size: 0.9rem; color: var(--muted); line-height: 1.7; }
  .contact-card a { color: var(--sage); text-decoration: none; }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--text); display: block; margin-bottom: 0.4rem; }
  .form-group input, .form-group textarea, .form-group select {
    width: 100%; padding: 0.75rem 1rem;
    border: 1.5px solid rgba(74,124,89,0.2); border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.92rem; color: var(--text);
    background: var(--white); outline: none; transition: border-color 0.2s;
  }
  .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--sage); }
  .form-group textarea { resize: vertical; min-height: 110px; }
  .btn-submit {
    background: var(--sage); color: var(--white);
    border: none; padding: 0.9rem 2rem;
    border-radius: 30px; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s; width: 100%;
  }
  .btn-submit:hover { background: var(--sage-dk); }

  footer {
    background: var(--sage-dk); color: rgba(255,255,255,0.8);
    padding: 3rem 2rem 1.5rem;
  }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem; margin-bottom: 2.5rem; }
  .footer-brand p { font-size: 0.88rem; color: rgba(255,255,255,0.6); margin-top: 0.75rem; max-width: 280px; }
  .footer-col h5 { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold-lt); margin-bottom: 1rem; }
  .footer-col a { display: block; font-size: 0.88rem; color: rgba(255,255,255,0.65); text-decoration: none; margin-bottom: 0.5rem; transition: color 0.2s; }
  .footer-col a:hover { color: var(--white); }
  .footer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 0 0 1.25rem; }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: rgba(255,255,255,0.5); }
  .footer-logo { display: flex; align-items: center; gap: 10px; color: var(--white); text-decoration: none; }
  .footer-logo-icon { width: 36px; height: 36px; background: var(--sage); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
  .footer-logo span { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; }

  /* ── RESPONSIVE ────────────────────────────────────────── */
  @media (max-width: 900px) {
    .hero-content, .about-grid, .volunteer-grid, .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .hero-card { display: none; }
    .impact-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-top { grid-template-columns: 1fr 1fr; }
    .about-image-stack { height: 280px; }
    .img-main { height: 240px; }
  }
  @media (max-width: 600px) {
    nav { padding: 0 1rem; }
    .nav-links { display: none; }
    section { padding: 3.5rem 1.25rem; }
    .impact-grid { grid-template-columns: 1fr 1fr; }
    .footer-top { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .hero-content { padding: 3.5rem 1.25rem; }
  }

  /* ── ANIMATIONS ────────────────────────────────────────── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.65s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.22s; }
  .delay-3 { animation-delay: 0.34s; }
  .delay-4 { animation-delay: 0.46s; }
</style>
</head>
<body>

<!-- ALERT BANNER -->
<div class="alert-banner">
  🍽️ <strong>New Congregate Senior Lunch Program</strong> — Chef Charlie's Classic Cooking, starting Feb 1st. Reservations required by 1 PM the day before.
  <a href="https://poway.org/1073/Meal-Program" target="_blank">Learn more →</a>
</div>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      <div class="nav-logo-icon">🌲</div>
      <span>Friends of Poway Seniors</span>
    </a>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#programs">Programs</a>
      <a href="#impact">Impact</a>
      <a href="#volunteer">Volunteer</a>
      <a href="#events">Events</a>
      <a href="#contact">Contact</a>
      <a href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgateway.clearent.net%2Fpaylink%2F000001634294%2F16126366" target="_blank" class="nav-donate">Donate</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-pattern"></div>
  <div class="hero-content">
    <div>
      <div class="hero-badge fade-up">🌿 Serving Poway Since 1974</div>
      <h1 class="fade-up delay-1">Enriching Lives,<br><em>One Senior at a Time</em></h1>
      <p class="fade-up delay-2">The Friends of Poway Seniors supports our seniors and marginalized communities through volunteer opportunities, material provisions, and community outreach programs.</p>
      <div class="hero-btns fade-up delay-3">
        <a href="#programs" class="btn-primary">Explore Programs ↓</a>
        <a href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgateway.clearent.net%2Fpaylink%2F000001634294%2F16126366" target="_blank" class="btn-outline">Donate Now ♥</a>
      </div>
    </div>
    <div class="hero-card fade-up delay-4">
      <h3>Our 2025 Impact at a Glance</h3>
      <div class="hero-stats-grid">
        <div class="hero-stat">
          <div class="num">700</div>
          <div class="label">Tax returns prepared this season</div>
        </div>
        <div class="hero-stat">
          <div class="num">$180k+</div>
          <div class="label">Saved in tax prep costs</div>
        </div>
        <div class="hero-stat">
          <div class="num">16</div>
          <div class="label">IRS-certified tax volunteers</div>
        </div>
        <div class="hero-stat">
          <div class="num">94%</div>
          <div class="label">Returns filed for local seniors</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES QUICK LINKS -->
<section style="padding: 3.5rem 2rem; background: var(--white);">
  <div class="section-inner">
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🍽️</div>
        <h3>Senior Lunch Program</h3>
        <p>Daily congregate lunch with Chef Charlie. Reservations required by 1 PM the prior day.</p><br>
        <a href="https://poway.org/1073/Meal-Program" target="_blank">Reserve your seat →</a>
      </div>
      <div class="service-card">
        <div class="service-icon">🎱</div>
        <h3>BINGO Fundraiser</h3>
        <p>Our popular BINGO events directly fund the 5-day-a-week senior meal program.</p><br>
        <a href="https://www.friendsofpowayseniors.org/bingo" target="_blank">Upcoming BINGO dates →</a>
      </div>
      <div class="service-card">
        <div class="service-icon">🧾</div>
        <h3>Free Tax Preparation</h3>
        <p>IRS-certified volunteers help seniors file their taxes at no cost through our TCE grant.</p><br>
        <a href="#contact">Get more info →</a>
      </div>
      <div class="service-card">
        <div class="service-icon">🛍️</div>
        <h3>ReRuns ReSale Shoppe</h3>
        <p>Donate and shop secondhand goods. Proceeds support seniors, shelter, and animal welfare.</p><br>
        <a href="https://www.friendsofpowayseniors.org/reruns-resale-shoppe-3" target="_blank">Visit the shoppe →</a>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT / MISSION -->
<section class="about-section" id="about">
  <div class="section-inner">
    <div class="about-grid">
      <div class="about-image-stack">
        <div class="img-placeholder img-main">🌳</div>
        <div class="img-placeholder img-secondary">🤝</div>
      </div>
      <div>
        <div class="section-label">Who We Are</div>
        <h2 class="section-title">A New Journey,<br>The Same Heart</h2>
        <p style="color: var(--muted); margin-bottom: 0.75rem;">Founded in 1974 as the Poway Valley Senior Citizens Corporation, we have evolved into <strong>Friends of Poway Seniors</strong> — broader in mission, unwavering in passion.</p>
        <p style="color: var(--muted);">We positively impact lives through volunteerism, resource access, and deep community partnerships across Poway and San Diego County.</p>
        <div class="mission-pillars">
          <div class="pillar">
            <div class="pillar-icon">🏠</div>
            <div>
              <h4>Transitional Housing Support</h4>
              <p>Furnishing homes for domestic violence victims — in partnership with Soroptimist International of Poway & Crisis House.</p>
            </div>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🧥</div>
            <div>
              <h4>Homeless Outreach</h4>
              <p>Distributing essentials across San Diego County to ease the discomfort of living on the streets.</p>
            </div>
          </div>
          <div class="pillar">
            <div class="pillar-icon">🐾</div>
            <div>
              <h4>Animal Welfare</h4>
              <p>Gifting donations to Helen Woodward Animal Rescue and Scratch My Belly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROGRAMS -->
<section class="programs-section" id="programs">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-label">What We Do</div>
      <h2 class="section-title">Our Programs</h2>
      <p class="section-sub">Comprehensive support for seniors and the broader Poway community.</p>
    </div>
    <div class="program-cards">
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Nutrition</div>
          <h3>Congregate Senior Lunch</h3>
        </div>
        <div class="program-body">
          <p>Chef Charlie and his team provide a hot, budget-friendly lunch five days a week at the Mickey Cafagna Center — offering seniors social connection and a reliable daily meal.</p>
          <div class="program-meta">
            <span>📍 Mickey Cafagna Center</span>
            <span>📅 Mon–Fri</span>
          </div>
          <br><a class="learn-link" href="https://poway.org/1073/Meal-Program" target="_blank">Visit program page →</a>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Financial</div>
          <h3>Free Tax Counseling</h3>
        </div>
        <div class="program-body">
          <p>Under an IRS cooperative grant, 16 certified volunteer tax preparers helped 700 seniors file returns this season — saving the community over $180,000 in preparation fees.</p>
          <div class="program-meta">
            <span>📍 Villa de Vida Community</span>
            <span>🆓 Free</span>
          </div>
          <br><a class="learn-link" href="#contact">Get more info →</a>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Social</div>
          <h3>BINGO Fundraiser</h3>
        </div>
        <div class="program-body">
          <p>BINGO is one of our most popular community events. All proceeds directly support the senior meal program — fun for participants, life-changing for those who depend on the lunches.</p>
          <div class="program-meta">
            <span>📍 13094 Civic Center Dr.</span>
            <span>📞 (858) 668-4689</span>
          </div>
          <br><a class="learn-link" href="https://www.friendsofpowayseniors.org/bingo" target="_blank">See schedule →</a>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Resale & Donations</div>
          <h3>ReRuns ReSale Shoppe</h3>
        </div>
        <div class="program-body">
          <p>Our thrift shoppe accepts donated goods and redistributes proceeds to seniors, domestic violence shelters, homeless individuals, and animal rescues — all since July 2021.</p>
          <div class="program-meta">
            <span>📍 12511 Poway Rd. Suite E</span>
            <span>📞 (858) 883-5885</span>
          </div>
          <br><a class="learn-link" href="https://www.friendsofpowayseniors.org/reruns-resale-shoppe-3" target="_blank">Learn more →</a>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Education</div>
          <h3>Senior Birthday Certificate</h3>
        </div>
        <div class="program-body">
          <p>We honor and celebrate Poway seniors with our birthday certificate program — a meaningful gesture that strengthens community connection and recognizes our valued elders.</p>
          <div class="program-meta">
            <span>🎂 Annual program</span>
          </div>
          <br><a class="learn-link" href="https://www.friendsofpowayseniors.org/basic-01" target="_blank">More details →</a>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-tag">Workforce</div>
          <h3>Home Caregiver Training</h3>
        </div>
        <div class="program-body">
          <p>In partnership with Poway Adult School, we promote tuition-free caregiver training for individuals providing direct non-medical care to loved ones at home.</p>
          <div class="program-meta">
            <span>🆓 Tuition-free</span>
          </div>
          <br><a class="learn-link" href="https://poway.augusoft.net" target="_blank">View course →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- IMPACT STATS -->
<section class="impact-section" id="impact">
  <div class="section-inner">
    <div class="section-header centered" style="color: var(--white);">
      <div class="section-label" style="color: var(--gold-lt);">By the Numbers</div>
      <h2 class="section-title" style="color: var(--white);">Our 2025 Impact</h2>
    </div>
    <div class="impact-grid">
      <div class="impact-item">
        <div class="impact-num">700</div>
        <div class="impact-label">Tax Returns Prepared</div>
      </div>
      <div class="impact-item">
        <div class="impact-num">$180k+</div>
        <div class="impact-label">Saved in Tax Prep Costs</div>
      </div>
      <div class="impact-item">
        <div class="impact-num">16</div>
        <div class="impact-label">IRS-Certified Volunteers</div>
      </div>
      <div class="impact-item">
        <div class="impact-num">94%</div>
        <div class="impact-label">Returns Filed for Local Seniors</div>
      </div>
    </div>
  </div>
</section>

<!-- VOLUNTEER -->
<section class="volunteer-section" id="volunteer">
  <div class="section-inner">
    <div class="volunteer-grid">
      <div>
        <div class="section-label">Get Involved</div>
        <h2 class="section-title">Volunteer With Us</h2>
        <p style="color:var(--muted);">Whether you have a few hours a week or want to take on a leadership role, there's a place for you at Friends of Poway Seniors.</p>
        <div class="vol-list">
          <div class="vol-item"><div class="vol-dot"></div><span>Serve lunch at the senior meal program</span></div>
          <div class="vol-item"><div class="vol-dot"></div><span>Sort & staff the ReRuns ReSale Shoppe</span></div>
          <div class="vol-item"><div class="vol-dot"></div><span>Help run BINGO events & fundraisers</span></div>
          <div class="vol-item"><div class="vol-dot"></div><span>Become an IRS-certified tax preparer</span></div>
          <div class="vol-item"><div class="vol-dot"></div><span>Assist with outreach and distribution drives</span></div>
        </div>
        <a href="https://www.friendsofpowayseniors.org/volunteer-opprotunity-2" target="_blank" class="btn-primary" style="display:inline-flex;">View All Opportunities →</a>
      </div>
      <div class="vol-cta">
        <div style="font-size:3rem;margin-bottom:1rem;">🤝</div>
        <h3>Ready to Make a Difference?</h3>
        <p>Our volunteers are the backbone of everything we do. Join a dedicated team changing lives every single day in Poway.</p>
        <a href="#contact" class="btn-primary">Contact Us to Start</a>
      </div>
    </div>
  </div>
</section>

<!-- EVENTS -->
<section class="upcoming-section" id="events">
  <div class="section-inner">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;">
      <div>
        <div class="section-label">What's On</div>
        <h2 class="section-title">Upcoming Events</h2>
        <p class="section-sub" style="margin-bottom:2rem;">Join us at our regular programs and special community events throughout the year.</p>
        <div class="events-list">
          <div class="event-item">
            <div class="event-date"><div class="day">Mon</div><div class="month">Weekly</div></div>
            <div class="event-info"><h4>Senior Congregate Lunch</h4><p>Mon–Fri at Mickey Cafagna Center. Reservation required by 1 PM prior day.</p></div>
          </div>
          <div class="event-item">
            <div class="event-date" style="background:var(--gold);"><div class="day">🎱</div><div class="month">BINGO</div></div>
            <div class="event-info"><h4>BINGO Fundraiser</h4><p>Regular BINGO nights at 13094 Civic Center Dr. Call (858) 668-4689 for schedule.</p></div>
          </div>
          <div class="event-item">
            <div class="event-date" style="background:var(--sage-dk);"><div class="day">🧾</div><div class="month">Tax</div></div>
            <div class="event-info"><h4>Free Tax Prep Season</h4><p>IRS-certified volunteers assist seniors annually. Check back for 2026 dates.</p></div>
          </div>
        </div>
      </div>
      <div>
        <div class="section-label">Our Partners</div>
        <h2 class="section-title">Community Partners</h2>
        <p class="section-sub" style="margin-bottom:2rem;">We work alongside trusted organizations to maximize our community impact.</p>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <div class="contact-card"><h4>🏙️ City of Poway</h4><p>Partners on the congregate lunch program and community facility support.</p></div>
          <div class="contact-card"><h4>🌸 Soroptimist International of Poway</h4><p>Partnering to furnish transitional housing for domestic violence survivors.</p></div>
          <div class="contact-card"><h4>🏠 Crisis House</h4><p>Providing emergency shelter resources and transition support services.</p></div>
          <div class="contact-card"><h4>🎓 Poway Adult School</h4><p>Offering tuition-free home caregiver training courses for the community.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact-section" id="contact">
  <div class="section-inner">
    <div class="contact-grid">
      <div>
        <div class="section-label">Get in Touch</div>
        <h2 class="section-title">Contact Us</h2>
        <p style="color:var(--muted);margin-bottom:2rem;">Have questions about our programs, want to volunteer, or need to arrange a donation drop-off? We'd love to hear from you.</p>
        <div class="contact-card">
          <h4>🛍️ ReRuns ReSale Shoppe</h4>
          <p>12511 Poway Rd. Suite E, Poway, CA 92064<br>
          <a href="tel:8588835885">(858) 883-5885</a><br>
          <em style="font-size:0.82rem;color:var(--gold);">Donation drop-offs by appointment only</em></p>
        </div>
        <div class="contact-card">
          <h4>🏢 Friends of Poway Seniors HQ</h4>
          <p>13094 Civic Center Dr., Poway, CA 92064<br>
          <a href="tel:8586684689">(858) 668-4689</a> — BINGO &amp; General Info</p>
        </div>
        <div class="contact-card">
          <h4>📋 Organization Details</h4>
          <p>PVSCC — 501(c)(3) Non-Profit<br>
          EIN: 51-0183384<br>
          <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank">📘 Follow us on Facebook</a></p>
        </div>
      </div>
      <div>
        <div style="background:var(--white);border-radius:var(--radius);padding:2rem;border:1px solid rgba(74,124,89,0.12);">
          <h3 style="font-size:1.35rem;margin-bottom:1.5rem;">Send a Message</h3>
          <div class="contact-form">
            <div class="form-row">
              <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane"></div>
              <div class="form-group"><label>Last Name</label><input type="text" placeholder="Doe"></div>
            </div>
            <div class="form-group"><label>Email Address</label><input type="email" placeholder="jane@example.com"></div>
            <div class="form-group">
              <label>I'm interested in…</label>
              <select>
                <option>General inquiry</option>
                <option>Volunteering</option>
                <option>Donation drop-off</option>
                <option>Senior lunch program</option>
                <option>Free tax preparation</option>
                <option>BINGO</option>
              </select>
            </div>
            <div class="form-group"><label>Message</label><textarea placeholder="Tell us how we can help…"></textarea></div>
            <button class="btn-submit">Send Message ✉️</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="#" class="footer-logo">
          <div class="footer-logo-icon">🌲</div>
          <span>Friends of Poway Seniors</span>
        </a>
        <p style="margin-top:0.75rem;">Supporting seniors and marginalized communities through volunteerism, material provisions, and community outreach since 1974.</p>
        <p style="margin-top:0.5rem;font-size:0.8rem;opacity:0.5;">PVSCC 501(c)(3) · EIN: 51-0183384</p>
      </div>
      <div class="footer-col">
        <h5>Programs</h5>
        <a href="https://poway.org/1073/Meal-Program" target="_blank">Senior Lunch</a>
        <a href="https://www.friendsofpowayseniors.org/bingo" target="_blank">BINGO</a>
        <a href="https://www.friendsofpowayseniors.org/reruns-resale-shoppe-3" target="_blank">ReRuns Shoppe</a>
        <a href="https://www.friendsofpowayseniors.org/basic-01" target="_blank">Birthday Certificates</a>
      </div>
      <div class="footer-col">
        <h5>Organization</h5>
        <a href="#about">About Us</a>
        <a href="#volunteer">Volunteer</a>
        <a href="https://www.friendsofpowayseniors.org/resources-2" target="_blank">Resources</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-col">
        <h5>Support</h5>
        <a href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgateway.clearent.net%2Fpaylink%2F000001634294%2F16126366" target="_blank">Donate</a>
        <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank">Facebook</a>
        <a href="https://poway.org" target="_blank">City of Poway</a>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="footer-bottom">
      <span>© 2025 Poway Valley Senior Citizens Corporation. All rights reserved.</span>
      <span>Made with ♥ for Poway seniors</span>
    </div>
  </div>
</footer>

</body>
</html>