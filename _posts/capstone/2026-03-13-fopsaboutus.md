---
toc: false
layout: none
title: About Us
permalink: /fopsaboutus/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Friends of Poway Seniors | About Us</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --sage: #4a7c59;
      --sage-lt: #7aad8b;
      --sage-dk: #2e5238;
      --gold: #c9913d;
      --gold-lt: #e8c37a;
      --warm: #f0ebe0;
      --white: #ffffff;
      --deep-navy: #1a2e3b;
      --teal-accent: #2a7c6f;
      --stone: #ece5d8;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--sage-dk);
      color: var(--white);
      line-height: 1.5;
      scroll-behavior: smooth;
    }

    h1, h2, h3, .serif {
      font-family: 'Playfair Display', serif;
    }

    /* ===== NAVIGATION (mirroring bingo page, no birthday certificate) ===== */
    .fops-nav {
      background: rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: sticky;
      top: 0;
      z-index: 500;
      backdrop-filter: blur(10px);
    }

    .fops-nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .fops-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }

    .fops-logo-icon {
      width: 38px;
      height: 38px;
      background: var(--sage);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      color: white;
    }

    .fops-logo span {
      font-family: 'Playfair Display', serif;
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--white);
    }

    .fops-menu {
      display: flex;
      align-items: center;
      gap: 0.1rem;
    }

    .fops-nav-link {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.82);
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.45rem 0.9rem;
      border-radius: 8px;
      background: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      white-space: nowrap;
      transition: background 0.17s, color 0.17s;
    }

    .fops-nav-link:hover {
      background: rgba(255, 255, 255, 0.12);
      color: var(--white);
    }

    .fops-donate {
      background: var(--gold) !important;
      color: var(--white) !important;
      border-radius: 22px !important;
      font-weight: 600 !important;
      padding: 0.45rem 1.1rem !important;
      margin-left: 0.4rem;
      box-shadow: 0 2px 12px rgba(201, 145, 61, 0.45);
    }

    .fops-donate:hover {
      background: #b07e2e !important;
    }

    .fops-dropdown {
      position: relative;
    }

    .fops-chevron {
      font-size: 0.55rem;
      opacity: 0.65;
      display: inline-block;
      transition: transform 0.2s;
    }

    .fops-dropdown.open .fops-chevron {
      transform: rotate(180deg);
    }

    .fops-dropdown-panel {
      position: absolute;
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(-6px);
      background: var(--white);
      border-radius: 14px;
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);
      min-width: 220px;
      padding: 0.5rem;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.22s cubic-bezier(0.34, 1.4, 0.64, 1), visibility 0.2s;
    }

    .fops-dropdown-panel::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 10px;
      height: 10px;
      background: var(--white);
      border-radius: 2px;
    }

    .fops-dropdown.open .fops-dropdown-panel {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateX(-50%) translateY(0);
    }

    .fops-dp-item {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #1e2a1e;
      font-size: 0.88rem;
      font-weight: 500;
      padding: 0.65rem 0.85rem;
      border-radius: 9px;
      transition: background 0.14s;
    }

    .fops-dp-item:hover {
      background: #f0ebe0;
      color: #2e5238;
    }

    .fops-dp-icon {
      width: 28px;
      height: 28px;
      background: #f0ebe0;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
    }

    /* ===== MAIN CONTENT (no big title/hero) ===== */
    .about-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2.5rem 2rem 4rem;
    }

    /* info cards / containers */
    .info-card {
      background: rgba(0,0,0,0.25);
      border-radius: 1.75rem;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.08);
      transition: all 0.25s ease;
      margin-bottom: 2rem;
    }
    .info-card:hover {
      transform: translateY(-3px);
      background: rgba(0,0,0,0.35);
      border-color: rgba(201,145,61,0.3);
    }
    .info-card h2 {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--gold-lt);
      margin-bottom: 1rem;
      border-left: 4px solid var(--gold);
      padding-left: 1rem;
    }
    .info-card h3 {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--gold-lt);
      margin: 1rem 0 0.5rem;
    }
    .info-card p, .info-card li, .contact-line {
      color: rgba(255,255,255,0.85);
      line-height: 1.6;
      margin-bottom: 0.75rem;
    }
    .info-card ul, .info-card .board-list {
      margin-left: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    .two-column-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin: 1rem 0 1.5rem;
    }
    .staff-list, .board-list {
      list-style: none;
      padding-left: 0;
    }
    .staff-list li, .board-list li {
      margin-bottom: 0.5rem;
    }
    .badge-partner {
      background: rgba(201,145,61,0.2);
      border-left: 3px solid var(--gold);
      padding: 1rem 1.2rem;
      border-radius: 1rem;
      margin: 1rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    .badge-partner:hover {
      background: rgba(201,145,61,0.35);
    }
    .contact-block {
      background: rgba(0,0,0,0.2);
      border-radius: 1.25rem;
      padding: 1.2rem;
      margin-top: 1rem;
    }
    .small-note {
      font-size: 0.85rem;
      opacity: 0.7;
    }
    .btn-donate-inline {
      display: inline-block;
      background: var(--gold);
      color: var(--deep-navy);
      font-weight: 700;
      padding: 0.6rem 1.8rem;
      border-radius: 40px;
      text-decoration: none;
      font-size: 0.85rem;
      transition: 0.2s;
      margin-top: 0.8rem;
    }
    .btn-donate-inline:hover {
      background: var(--gold-lt);
    }
    hr.divider-light {
      margin: 1.5rem 0;
      border: 0;
      height: 1px;
      background: rgba(255,255,255,0.15);
    }
    .reruns-note {
      background: rgba(42,124,111,0.25);
      border-radius: 1rem;
      padding: 1rem 1.2rem;
      margin-top: 1rem;
    }
    .footer-logos {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-top: 0.5rem;
    }
    .footer-logos img {
      max-height: 55px;
      width: auto;
      background: rgba(255,255,255,0.9);
      border-radius: 8px;
      padding: 4px 6px;
    }
    /* divider */
    .fops-divider {
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--gold-lt), var(--gold), var(--gold-lt), transparent);
      border: 0;
      margin: 0.5rem 0 2rem;
    }

    /* footer */
    .fops-footer {
      background: rgba(0,0,0,0.3);
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 1.5rem 2rem;
    }
    .fops-footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .fops-footer-inner span {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.35);
    }
    .fops-footer-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .fops-footer-links a {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      transition: color 0.18s;
    }
    .fops-footer-links a:hover {
      color: var(--white);
    }
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--gold);
      color: #1e2a1e;
      padding: 8px;
      z-index: 1000;
      text-decoration: none;
      font-weight: bold;
    }
    .skip-link:focus {
      top: 0;
    }
    @media (max-width: 700px) {
      .fops-nav-inner { padding: 0 1rem; }
      .fops-logo span { display: none; }
      .about-main { padding: 1.5rem 1rem 3rem; }
      .info-card { padding: 1.5rem; }
    }
  </style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to Main Content</a>
<div id="fops-root">
  <!-- Navigation: identical to bingo page style, includes Event Predictor, no birthday certificate button -->
  <nav class="fops-nav">
    <div class="fops-nav-inner">
      <a href="/fops/" class="fops-logo">
        <div class="fops-logo-icon">FS</div>
        <span>Friends of Poway Seniors</span>
      </a>
      <div class="fops-menu">
        <div class="fops-dropdown" id="eventsDropdown">
          <button class="fops-nav-link" id="dropdownToggleBtn">
            Events <span class="fops-chevron">▼</span>
          </button>
          <div class="fops-dropdown-panel">
            <a href="/fopsshop/" class="fops-dp-item"><div class="fops-dp-icon">🛍️</div> ReRuns Shoppe</a>
            <a href="/fopsbingo/" class="fops-dp-item"><div class="fops-dp-icon">🎱</div> BINGO</a>
            <a href="/fopslunchmd/" class="fops-dp-item"><div class="fops-dp-icon">🍽️</div> Social Lunch</a>
            <!-- Event Predictor link added as requested, no birthday certificate button -->
            <a href="/fopspredictor/" class="fops-dp-item"><div class="fops-dp-icon">🔮</div> Event Predictor</a>
          </div>
        </div>
        <a href="/fopsaboutus/" class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank" class="fops-nav-link fops-donate">Donate</a>
      </div>
    </div>
  </nav>

  <main id="main-content" class="about-main">
    <!-- Partner banner: City of Poway Congregate Senior lunch program (linkable) -->
    <div class="badge-partner" id="lunchPartnerBanner">
      <p style="font-weight: 600;">🍽️ <strong>Click here for information on the City of Poway Congregate Senior lunch program</strong><br>
      <span style="font-size: 0.9rem;">*A partnership with Friends of Poway Seniors</span></p>
    </div>

    <!-- Organization description -->
    <div class="info-card">
      <h2>About Friends of Poway Seniors</h2>
      <p>The Poway Valley Senior Citizens Corporation (DBA: Friends of Poway Seniors) is a 501(c)(3) non profit organization. The organization incorporated in 1974 and operated a senior center out of the Weingart Community Center up until the late spring of 2019 and then in the Church of Christ Scientist until March of 2020.</p>
      <p>During the Pandemic a difficult decision was made to transfer Older Adult Services to the City of Poway so that impactful (and fun!) programming would continue to be provided when the City could resume operations again in the new Mickey Cafagna Center.</p>
      <p>Friends of Poway Seniors now provides funding support for municipal-run senior programming and material provisions for other local nonprofit agencies.</p>
    </div>

    <!-- Board of Directors + Staff in two columns -->
    <div class="two-column-grid">
      <div class="info-card">
        <h2>Board of Directors 2025-2026</h2>
        <ul class="board-list" style="list-style: none; margin-left: 0;">
          <li><strong>President</strong> ~ Cynthia Elizondo</li>
          <li><strong>Vice President</strong> ~ Jan Kane</li>
          <li><strong>Secretary</strong> ~ Jamie Reed</li>
          <li><strong>Treasurer</strong> ~ Mary Mitchell</li>
        </ul>
        <h3>General Board Members</h3>
        <ul style="list-style: none; margin-left: 0;">
          <li>Mary Caraway</li>
          <li>Dorothy Courtney</li>
          <li>Cheryl Brandt</li>
        </ul>
      </div>

      <div class="info-card">
        <h2>Staff</h2>
        <ul class="staff-list" style="list-style: none; margin-left: 0;">
          <li><strong>Executive Director</strong> ~ Manpreet Takhar</li>
          <li><strong>ReRuns ReSale Manager</strong> ~ Diane Robie</li>
          <li><strong>ReRuns ReSale Assistant Manager</strong> ~ Dianne Smith</li>
        </ul>
        <hr class="divider-light">
        <p>Please visit our website often for programming and resource updates.</p>
        <div class="contact-block">
          <p class="contact-line">📧 <strong>executivedirector@friendsofpowayseniors.org</strong><br>
          📞 (858) 668-4689</p>
          <p class="small-note">Please allow 24 hrs for someone to respond. If your needs require urgent attention such as food, shelter or other social service resources, please refer to our resources page or call San Diego County 2-1-1 service line.</p>
        </div>
      </div>
    </div>
  </main>

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

<!-- Dropdown toggle script & lunch link handler (with Event Predictor link already in nav) -->
<script>
  (function() {
    // Dropdown behavior
    const dropdown = document.getElementById('eventsDropdown');
    const toggleBtn = document.getElementById('dropdownToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (dropdown) dropdown.classList.toggle('open');
      });
    }
    document.addEventListener('click', function(e) {
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
    
    // Partner lunch banner: direct to city senior programs page
    const lunchBanner = document.getElementById('lunchPartnerBanner');
    if (lunchBanner) {
      lunchBanner.addEventListener('click', function() {
        window.open('https://www.poway.org/729/Senior-Programs', '_blank');
      });
    }

    // Optional: ensure any inline predictor link is fully functional
    // No additional changes needed — the Event Predictor link exists in the dropdown.
    // Additionally, to provide an extra explicit callout for the new predictor feature,
    // we keep the navigation exactly as requested, with no birthday certificate.
  })();
</script>
</body>
</html>