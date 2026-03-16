---
toc: false
layout: post
title: Friends of Poway Seniors
description: Home — Friends of Poway Seniors
permalink: /fops/
sticky_rank: 1
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
<title>Friends of Poway Seniors</title>
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
    display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  }
  .fops-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; flex-shrink: 0;
  }
  .fops-logo-icon {
    width: 38px; height: 38px; background: var(--sage); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  .fops-logo span {
    font-family: 'Playfair Display', serif;
    font-size: 1.02rem; font-weight: 700; color: var(--white);
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
  .fops-chevron {
    font-size: 0.55rem; opacity: 0.65;
    display: inline-block; transition: transform 0.2s;
  }
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

  /* ── HERO ── */
  .fops-hero {
    padding: 5rem 2rem 5rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .fops-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image:
      repeating-linear-gradient(55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
      repeating-linear-gradient(-55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px);
    pointer-events: none;
  }
  .fops-hero::after {
    content: ''; position: absolute; top: -100px; left: 50%;
    transform: translateX(-50%);
    width: 800px; height: 600px;
    background: radial-gradient(ellipse, rgba(201,145,61,0.1) 0%, transparent 65%);
    pointer-events: none;
  }
  .fops-hero-inner {
    position: relative; z-index: 2;
    max-width: 1000px; margin: 0 auto;
  }

  .fops-hero-top-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 7vw, 6rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.1;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .fops-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
    color: var(--gold-lt); font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.33rem 1rem; border-radius: 20px; margin-bottom: 2rem;
  }

  /* Big title + image row */
  .fops-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  .fops-big-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 8vw, 7rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.05;
    text-align: left;
  }
  .fops-big-title em {
    color: var(--gold-lt);
    font-style: italic;
    display: block;
  }
  .fops-hero-img {
    width: clamp(140px, 18vw, 220px);
    height: clamp(140px, 18vw, 220px);
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35));
    flex-shrink: 0;
  }

  .fops-hero-sub {
    font-size: 1.08rem; color: rgba(255,255,255,0.7);
    font-weight: 300; line-height: 1.78;
    max-width: 680px; margin: 0 auto;
  }

  /* ── DIVIDER ── */
  .fops-divider {
    max-width: 1100px; margin: 0 auto;
    border: none; border-top: 1px solid rgba(255,255,255,0.1);
  }

  /* ── MISSION & VISION ── */
  .fops-mv { padding: 5rem 2rem 7rem; }
  .fops-mv-inner { max-width: 1100px; margin: 0 auto; }
  .fops-mv-header { text-align: center; margin-bottom: 3rem; }
  .fops-eyebrow {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.13em;
    text-transform: uppercase; color: var(--gold-lt); margin-bottom: 0.6rem;
  }
  .fops-mv-header h2 {
    font-size: clamp(1.9rem, 3.5vw, 2.8rem); color: var(--white); margin-bottom: 0.75rem;
  }
  .fops-mv-header p {
    font-size: 0.97rem; color: rgba(255,255,255,0.6);
    max-width: 500px; margin: 0 auto; font-weight: 300; line-height: 1.7;
  }
  .fops-mv-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .fops-mv-card {
    border-radius: 20px; padding: 2.5rem;
    position: relative; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .fops-mv-card.mission { background: rgba(255,255,255,0.07); backdrop-filter: blur(8px); }
  .fops-mv-card.vision  { background: rgba(201,145,61,0.15); border-color: rgba(201,145,61,0.25); }
  .fops-mv-card::after {
    content: ''; position: absolute; top: -40px; right: -40px;
    width: 160px; height: 160px; border-radius: 50%;
    background: rgba(255,255,255,0.04); pointer-events: none;
  }
  .fops-pill {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.85); font-size: 0.68rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 0.28rem 0.85rem; border-radius: 20px; margin-bottom: 1.1rem;
  }
  .fops-mv-card.vision .fops-pill {
    background: rgba(201,145,61,0.25); border-color: rgba(201,145,61,0.4); color: var(--gold-lt);
  }
  .fops-mv-card h3 { font-size: 1.6rem; color: var(--white); margin-bottom: 1rem; }
  .fops-mv-card p  { font-size: 0.97rem; color: rgba(255,255,255,0.78); line-height: 1.8; }

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
  .fops-footer-links a {
    font-size: 0.8rem; color: rgba(255,255,255,0.5);
    text-decoration: none; transition: color 0.18s;
  }
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
  .fu4 { animation-delay: 0.35s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .fops-hero-top-title { font-size: clamp(2rem, 9vw, 3.5rem); }
    .fops-title-row { flex-direction: column; gap: 1.5rem; }
    .fops-big-title { text-align: center; font-size: clamp(2.8rem, 10vw, 4.5rem); }
    .fops-big-title em { display: inline; }
    .fops-mv-cards { grid-template-columns: 1fr; }
    .fops-logo span { display: none; }
    .fops-nav-link { padding: 0.4rem 0.65rem; font-size: 0.83rem; }
    .fops-hero { padding: 4rem 1.25rem 3.5rem; }
    .fops-mv { padding: 3.5rem 1.25rem 5rem; }
  }
</style>
</head>
<body>
<div id="fops-root">

  <!-- NAV -->
  <nav class="fops-nav">
    <div class="fops-nav-inner">
      <a href="/fops/" class="fops-logo">
        <div class="fops-logo-icon">🌲</div>
        <span>Friends of Poway Seniors</span>
      </a>
      <div class="fops-menu">
        <div class="fops-dropdown" id="eventsDropdown">
          <button class="fops-nav-link" onclick="toggleDropdown(event)">
            Events <span class="fops-chevron">▼</span>
          </button>
          <div class="fops-dropdown-panel">
            <a href="/fopsshop/" class="fops-dp-item">
              <div class="fops-dp-icon">🛍️</div> ReRuns Shoppe
            </a>
            <a href="/fopsbingo/" class="fops-dp-item">
              <div class="fops-dp-icon">🎱</div> BINGO
            </a>
            <a href="/fopslunchmd/" class="fops-dp-item">
              <div class="fops-dp-icon">🍽️</div> Social Lunch
            </a>
            <a href="/fopsbday/" class="fops-dp-item">
              <div class="fops-dp-icon">🎂</div> Birthday Certificate
            </a>
          </div>
        </div>
        <a href="/fopsaboutus/"   class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366"
           target="_blank" class="fops-nav-link fops-donate">♥ Donate</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="fops-hero">
    <div class="fops-hero-inner">
      <h1 class="fops-hero-top-title fu fu1">Friends of Poway Seniors</h1>
      <div class="fops-badge fu fu2">🌿 Serving Poway Since 1974</div>

      <!-- Big title + image side by side -->
      <div class="fops-title-row fu fu3">
        <h1 class="fops-big-title">
          Friends of<br><em>Poway Seniors</em>
        </h1>
        <img
          src="/images/capstone/fops.png"
          alt="Friends of Poway Seniors logo"
          class="fops-hero-img"
        />
      </div>

      <p class="fops-hero-sub fu fu4">
        The Poway Valley Senior Citizens Corporation was formed in 1974 and it is still here today. We are no longer the Poway Senior Center — our mission and vision have changed, but our passion to positively impact lives has not wavered. Please join us on our new journey.
      </p>
    </div>
  </section>

  <hr class="fops-divider"/>

  <!-- MISSION & VISION -->
  <section class="fops-mv">
    <div class="fops-mv-inner">
      <div class="fops-mv-header">
        <div class="fops-eyebrow">Our Purpose</div>
        <h2>Mission &amp; Vision</h2>
        <p>Everything we do flows from two core commitments — who we serve and the future we are working toward.</p>
      </div>
      <div class="fops-mv-cards">
        <div class="fops-mv-card mission">
          <div class="fops-pill">🌿 Mission</div>
          <h3>What We Do</h3>
          <p>To support our seniors and marginalized communities by providing volunteer opportunities, access to material provisions and monetary support for municipal-run senior programming and other community outreach programs.</p>
        </div>
        <div class="fops-mv-card vision">
          <div class="fops-pill">✨ Vision</div>
          <h3>What We Seek</h3>
          <p>For our seniors, and community-at-large to engage in, benefit from, and enjoy life to its fullest.</p>
        </div>
      </div>
    </div>
  </section>

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
  function toggleDropdown(e) {
    e.stopPropagation();
    document.getElementById('eventsDropdown').classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });
</script>

</body>
</html>