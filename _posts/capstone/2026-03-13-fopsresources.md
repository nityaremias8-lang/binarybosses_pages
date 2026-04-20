---
toc: false
layout: none
title: Resources 
permalink: /fopsresources/
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<title>Friends of Poway Seniors | Resources & Programs</title>
<!-- Preconnect & Fonts - FOPS Theme -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* Reset & Base – hide Jekyll artifacts */
  .post-title, .page-title, h1.title,
  .post-meta, .post-date, .reading-time,
  .breadcrumbs, nav.breadcrumb,
  .post-header, header.post-header,
  article > h1:first-child,
  .wrapper > h1, main > h1 {
    display: none !important;
  }
  body, html {
    background: #2e5238 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .post-content, .content, main, article, .wrapper, #main-content {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    background: #2e5238 !important;
  }

  /* FOPS Design System */
  :root {
    --sage:    #4a7c59;
    --sage-lt: #7aad8b;
    --sage-dk: #2e5238;
    --gold:    #c9913d;
    --gold-lt: #e8c37a;
    --warm:    #f0ebe0;
    --white:   #ffffff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--sage-dk);
    min-height: 100vh;
    color: var(--white);
  }

  /* SKIP TO MAIN CONTENT - accessibility */
  .skip-to-main {
    position: absolute;
    top: -40px;
    left: 0;
    background: #004b6e;
    color: white;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-weight: bold;
    z-index: 1001;
    border-radius: 0 0 4px 0;
    transition: top 0.2s ease-in-out;
    font-family: 'DM Sans', sans-serif;
  }
  .skip-to-main:focus {
    top: 0;
    outline: 3px solid var(--gold-lt);
    background: #002f44;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    line-height: 1.2;
    font-weight: 600;
  }

  /* ----- NAVIGATION (FULL FOPS MENU) ----- */
  .fops-nav {
    background: rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky;
    top: 0;
    z-index: 500;
    backdrop-filter: blur(10px);
  }

  .fops-nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.1rem;
  }

  .fops-menu {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    flex-wrap: wrap;
  }

  .fops-nav-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: rgba(255,255,255,0.82);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.45rem 0.9rem;
    border-radius: 8px;
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
    transition: background 0.17s, color 0.17s;
  }

  .fops-nav-link:hover {
    background: rgba(255,255,255,0.12);
    color: var(--white);
  }

  .fops-donate {
    background: var(--gold) !important;
    color: var(--white) !important;
    border-radius: 22px !important;
    font-weight: 600 !important;
    padding: 0.45rem 1.1rem !important;
    margin-left: 0.4rem;
    box-shadow: 0 2px 12px rgba(201,145,61,0.45);
  }

  .fops-donate:hover {
    background: #b07e2e !important;
  }

  /* Dropdown styles */
  .fops-dropdown { position: relative; }
  .fops-chevron { font-size: 0.55rem; opacity: 0.65; display: inline-block; transition: transform 0.2s; }
  .fops-dropdown.open .fops-chevron { transform: rotate(180deg); }
  .fops-dropdown-panel {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: var(--white);
    border-radius: 14px;
    box-shadow: 0 16px 48px rgba(0,0,0,0.22);
    min-width: 220px;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.22s cubic-bezier(0.34,1.4,0.64,1), visibility 0.2s;
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
  .fops-dp-item:hover { background: #f0ebe0; color: #2e5238; }
  .fops-dp-icon {
    width: 28px; height: 28px;
    background: #f0ebe0;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.88rem;
    flex-shrink: 0;
  }

  /* Hero Section for Resources */
  .resources-hero {
    padding: 4rem 2rem 2rem;
    text-align: center;
    position: relative;
  }
  .resources-hero-inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  .fops-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--gold-lt);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.33rem 1rem;
    border-radius: 20px;
    margin-bottom: 1.75rem;
  }
  .resources-main-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.6rem, 7vw, 5rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  .resources-sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Main content container */
  .resources-container {
    max-width: 1280px;
    margin: 1rem auto 3rem;
    padding: 0 1.8rem;
  }

  /* Resource Cards */
  .resource-card {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(4px);
    border-radius: 28px;
    padding: 1.6rem 2rem;
    margin: 1.8rem 0;
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.2s;
  }
  .resource-card h3 {
    font-size: 1.7rem;
    margin-bottom: 0.75rem;
    color: var(--gold-lt);
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .resource-card p, .resource-card li {
    color: rgba(255,255,255,0.85);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  .resource-card a {
    color: var(--gold-lt);
    text-decoration: none;
    border-bottom: 1px dotted rgba(232,195,122,0.5);
  }
  .resource-card a:hover { color: #ffde9e; }
  .btn-resource {
    display: inline-block;
    background: var(--gold);
    color: var(--white);
    padding: 0.5rem 1.3rem;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 0.8rem;
    font-size: 0.85rem;
    transition: 0.2s;
  }
  .btn-resource:hover { background: #b07e2e; }

  .tip-list {
    background: rgba(46,82,56,0.7);
    border-left: 6px solid var(--gold);
    border-radius: 28px;
    padding: 1.5rem 2rem;
    margin: 2rem 0;
  }
  .tip-list h3 { color: var(--gold-lt); margin-bottom: 1rem; }
  .tip-list ul li { margin-left: 1.5rem; margin-bottom: 0.6rem; }
  .two-col-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.8rem;
    margin: 1rem 0;
  }
  .two-col-grid > div {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border-radius: 24px;
    padding: 1.3rem 1.6rem;
    border: 1px solid rgba(255,255,255,0.08);
  }

  /* Footer */
  .fops-footer {
    background: rgba(0,0,0,0.3);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 1.5rem 2rem;
  }
  .fops-footer-inner {
    max-width: 1280px;
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
  .fops-footer-links a:hover { color: var(--white); }

  /* Animations */
  @keyframes fopsUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fu { animation: fopsUp 0.6s ease both; }
  .fu1 { animation-delay: 0.05s; }
  .fu2 { animation-delay: 0.15s; }
  .fu3 { animation-delay: 0.25s; }
  .fu4 { animation-delay: 0.35s; }

  @media (max-width: 700px) {
    .resources-container { padding: 0 1.2rem; }
    .resource-card { padding: 1.2rem; }
    .resource-card h3 { font-size: 1.4rem; }
    .fops-nav-link { padding: 0.4rem 0.65rem; font-size: 0.83rem; }
    .fops-nav-inner { padding: 0 1rem; }
  }

  /* Chat Widget (same as FOPS design) */
  #chat-bubble {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 1000;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4a7c59, #2e5238);
    color: #fff;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(46,82,56,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  #chat-bubble:hover { transform: scale(1.08); }
  #chat-window {
    position: fixed;
    bottom: 100px;
    right: 28px;
    z-index: 1000;
    width: 360px;
    max-height: 520px;
    background: #faf7f2;
    border-radius: 18px;
    box-shadow: 0 16px 56px rgba(0,0,0,0.18);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.3s ease;
  }
  #chat-window.hidden { opacity: 0; pointer-events: none; transform: translateY(16px) scale(0.97); }
  .chat-header {
    background: linear-gradient(135deg, #2e5238, #4a7c59);
    color: #fff;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .chat-header-icon { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
  .chat-header-text h4 { font-size: 0.95rem; font-weight: 700; margin: 0; }
  .chat-header-text p { font-size: 0.75rem; opacity: 0.8; margin: 0; }
  .chat-close { margin-left: auto; background: none; border: none; color: rgba(255,255,255,0.8); font-size: 1.3rem; cursor: pointer; }
  #chat-messages { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; }
  .msg { max-width: 82%; padding: 0.65rem 0.9rem; border-radius: 14px; font-size: 0.88rem; line-height: 1.55; animation: msgIn 0.2s ease; }
  .msg.bot { background: #fff; color: #1e2a1e; border: 1px solid rgba(74,124,89,0.12); border-bottom-left-radius: 4px; align-self: flex-start; }
  .msg.user { background: linear-gradient(135deg, #4a7c59, #2e5238); color: #fff; border-bottom-right-radius: 4px; align-self: flex-end; }
  .typing-indicator { display: flex; gap: 4px; background: #fff; padding: 0.65rem 0.9rem; border-radius: 14px; border-bottom-left-radius: 4px; width: fit-content; }
  .typing-indicator span { width: 7px; height: 7px; background: #7aad8b; border-radius: 50%; animation: bounce 1.2s infinite; }
  @keyframes bounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }
  .chat-input-row { display: flex; gap: 0.5rem; padding: 0.85rem; border-top: 1px solid rgba(74,124,89,0.12); background: #fff; }
  #chat-input { flex: 1; border: 1.5px solid rgba(74,124,89,0.2); border-radius: 20px; padding: 0.55rem 1rem; font-family: 'DM Sans', sans-serif; background: #faf7f2; }
  #chat-send { width: 38px; height: 38px; border-radius: 50%; background: #4a7c59; border: none; color: #fff; font-size: 1rem; cursor: pointer; }
  .chat-suggestions { display: flex; flex-wrap: wrap; gap: 0.4rem; padding: 0 1rem 0.75rem; background: #faf7f2; }
  .suggestion-chip { background: #f0ebe0; border: 1px solid rgba(74,124,89,0.2); color: #2e5238; font-size: 0.78rem; font-weight: 500; padding: 0.3rem 0.7rem; border-radius: 20px; cursor: pointer; }
  .suggestion-chip:hover { background: #4a7c59; color: #fff; }
  @keyframes msgIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
</style>
</head>
<body>

<!-- SKIP TO MAIN CONTENT (Accessibility) -->
<a href="#main-resources" class="skip-to-main">Skip to Main Content</a>

<div id="fops-root">
  <!-- Navigation bar (FULL FOPS MENU from original) -->
  <nav class="fops-nav">
    <div class="fops-nav-inner">
      <div class="fops-menu">
        <a href="/fops/" class="fops-nav-link">Home</a>
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
            <a href="/fopslunchh/" class="fops-dp-item">
              <div class="fops-dp-icon">🍽️</div> Social Lunch
            </a>
            <a href="/fopspredictor/" class="fops-dp-item">
              <div class="fops-dp-icon">🤖</div> Event Predictor
            </a>
          </div>
        </div>
        <a href="/fopsaboutus/" class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank" rel="noopener noreferrer" class="fops-nav-link fops-donate">♥ Donate</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section for Resources page -->
  <div class="resources-hero">
    <div class="resources-hero-inner">
      <div class="fops-badge fu fu1">Senior Resource Hub • Poway</div>
      <h1 class="resources-main-title fu fu2">Resources & Support<br>for Seniors</h1>
      <p class="resources-sub fu fu3">Various Resources are available to Seniors throughout Poway and North County.<br>Please reach out to these organizations directly for more information.</p>
    </div>
  </div>

  <!-- MAIN CONTENT: All the detailed resource info from first message -->
  <main id="main-resources" class="resources-container" tabindex="-1">

    <!-- Elder Help of San Diego -->
    <div class="resource-card">
      <h3>Elder Help of San Diego</h3>
      <p><strong>ElderHelp provides personalized services and information that help seniors remain independent and live with dignity in their own homes.</strong></p>
      <p>ElderHelp Services is now available in POWAY at the new Mickey Cafagna Center. Services: Care Coordination, Seniors a Go Go, Housing Services, Family Caregiver Support, Information and Referral.</p>
      <p>Contact for appointment: <strong>(619) 284-9281</strong><br>5095 Murphy Canyon Rd, #100, San Diego, CA 92123</p>
      <a href="#" class="btn-resource">Learn more →</a>
    </div>

    <!-- Food To Go + Tax Counseling for the Elderly -->
    <div class="resource-card">
      <h3>Food To Go & Tax Counseling for the Elderly (TCE)</h3>
      <p><strong>TCE Poway Tax Season Is Now Finished.</strong> Thank You To All That Attended, We Look Forward To Seeing You Next Year! Sponsored by: Friends of Poway Seniors and in partnership with the City of Poway.</p>
      <p><em>Filling Out Tax Form | Old Man Sitting On The Bench — Free tax preparation returns next season.</em></p>
    </div>

    <!-- 2-1-1 San Diego -->
    <div class="resource-card">
      <h3>2-1-1 SAN DIEGO</h3>
      <p>211 San Diego is a regional information resource for San Diego Residents. The 211 phone is open 24 hours/365 days to direct callers to community, health and disaster resources. Online database available.</p>
      <p>Call: <strong>211</strong> or visit <a href="https://211sandiego.org" target="_blank" rel="noopener">https://211sandiego.org</a></p>
    </div>

    <!-- Poway Adult Day Health Care Center -->
    <div class="resource-card">
      <h3>Poway Adult Day Health Care Center</h3>
      <p>Two levels of affordable day-care for older adults, plus educational classes and support groups for caretakers. Focus on restorative/maintenance care. Eligible adults receive nursing supervision, therapies.</p>
      <p>12250 Crosthwaite Circle, Poway, CA 92064<br><strong>858-748-5044</strong> | info@powayadhc.org<br><a href="#">www.powayadhc.org</a></p>
      <div style="margin-top: 0.5rem;"></div>
    </div>

    <!-- Adult Protective Services + AIS (two column) -->
    <div class="two-col-grid">
      <div>
        <h3 style="color: var(--gold-lt); margin-bottom: 0.5rem;">Adult Protective Services</h3>
        <p>If you believe elder or dependent abuse has occurred, call Adult Protective Services.</p>
        <p>APS: <strong>1-800-339-4661</strong><br>San Diego County DA: <strong>1-619-531-3245</strong><br><a href="#">www.safeseniorssandiego.com</a></p>
      </div>
      <div>
        <h3 style="color: var(--gold-lt); margin-bottom: 0.5rem;">Aging and Independent Services (AIS)</h3>
        <p>AIS call center: gateway for resources, assistance for older adults, people with disabilities, and family members.</p>
        <p>AIS call center: <strong>1-800-339-4661</strong><br><a href="https://www.sandiegocounty.gov/content/sdc/hhsa/programs/ais/Older-Adults.html" target="_blank">sandiegocounty.gov/ais</a></p>
      </div>
    </div>

    <!-- 10 Easy Tips to Keep Seniors Safe From Financial Abuse -->
    <div class="tip-list">
      <h3>10 Easy Tips to Keep Seniors Safe From Financial Abuse</h3>
      <ul>
        <li>1. Every telephone number should have caller I.D. If you don't know the number, DO NOT ANSWER.</li>
        <li>2. The IRS, Social Security, Police/Sheriff, or SDG&E will never call threatening fines or jail time for immediate payment.</li>
        <li>3. Gift Cards are for giving gifts not making payments. Never purchase gift cards at the direction of someone you don't know.</li>
        <li>4. Choose a caregiver with caution. Hire through a reputable agency and request background check.</li>
        <li>5. Keep an inventory of all jewelry. Jewelry is the #1 item stolen from seniors.</li>
        <li>6. Protect your incoming/outgoing mail and purchase a shredder. Use a PO box or secured mailbox.</li>
        <li>7. Obtain a Credit search on yourself at least two or three times a year.</li>
        <li>8. You will never win a foreign lottery or sweepstakes. These are scams.</li>
        <li>9. Don't assume the friendly handyman is licensed. Obtain bids, check BBB, never pay more than 10% upfront.</li>
        <li>10. Don't fall in love online without meeting face to face. Never send money to a love interest you haven't met.</li>
        <li><strong>Bonus Tip:</strong> Your grandchild is not in jail in a foreign country — popular scam. Hang up and call your loved one directly.</li>
      </ul>
    </div>

    <!-- Elder Law & Advocacy -->
    <div class="resource-card">
      <h3>Elder Law & Advocacy</h3>
      <p>Free legal services to qualifying seniors over age 60. Areas: advance health care directives, age discrimination, elder abuse, Medicare, Social Security, and more. Appointments required.</p>
      <p>5151 Murphy Canyon Rd Ste. #110, San Diego, CA 92123<br><strong>858-565-1392</strong><br><a href="#">www.seniorlaw-sd.org</a></p>
      <div style="margin-top: 0.5rem;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'
    </div>

    <!-- Meals on Wheels + Eligibility -->
    <div class="resource-card">
      <h3>Supporting Independence & Wellness – Meals on Wheels</h3>
      <p><a href="https://meals-on-wheels.org/get-meals/" target="_blank">www.meals-on-wheels.org/get-meals/</a></p>
      <p><strong>Eligibility:</strong> 60+ years of age, Disabled veterans of any age, Caretakers of any Meals on Wheels clients.</p>
      <p>Contact us for meal delivery & eligibility.</p>
      <div style="background: rgba(255,255,255,0.08); padding: 0.6rem 1rem; border-radius: 20px; margin-top: 0.75rem;">
        <p style="margin-bottom: 0;">Submit inquiry: <button class="btn-resource" style="background: #5f8b6f; padding: 0.3rem 1rem;">Contact us →</button></p>
      </div>
    </div>

    <!-- ReRuns Resale Shoppe & Friends of Poway Seniors Contact -->
    <div class="two-col-grid">
      <div>
        <h3 style="color: var(--gold-lt);">ReRuns Resale Shoppe</h3>
        <p>12511 Poway Rd. Suite E, Poway, CA 92064<br><strong>(858)-883-5885</strong></p>
        <p><strong>DONATION DROP OFFS ARE BY APPOINTMENT ONLY. PLEASE CALL (858)-883-5885.</strong></p>
      </div>
      <div>
        <h3 style="color: var(--gold-lt);">Friends of Poway Seniors</h3>
        <p>13094 Civic Center Dr., Poway, CA 92064</p>
        <p>For BINGO and Friends of Poway Seniors Information call: <strong>(858) 668-4689</strong></p>
      </div>
    </div>

  <!-- Footer -->
  <footer class="fops-footer">
    <div class="fops-footer-inner">
      <span>© 2025 PVSCC 501(c)(3) · EIN: 51-0183384</span>
      <div class="fops-footer-links">
        <a href="/fopsaboutus/">About Us</a>
        <a href="/fopsresources/">Resources</a>
        <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank" rel="noopener noreferrer">Donate</a>
      </div>
    </div>
  </footer>
</div>

<!-- Chat Widget (same as FOPS) -->
<button id="chat-bubble" onclick="toggleChat()" aria-label="Open chat assistant">💬</button>
<div id="chat-window" class="hidden" role="dialog" aria-label="FOPS Chat Assistant">
  <div class="chat-header">
    <div class="chat-header-icon">🌿</div>
    <div class="chat-header-text"><h4>FOPS Assistant</h4><p>Ask me about events & programs</p></div>
    <button class="chat-close" onclick="toggleChat()">✕</button>
  </div>
  <div id="chat-messages"></div>
  <div class="chat-suggestions" id="chat-suggestions">
    <button class="suggestion-chip" onclick="sendSuggestion('What events are coming up?')">Upcoming events</button>
    <button class="suggestion-chip" onclick="sendSuggestion('How do I RSVP for lunch?')">RSVP for lunch</button>
    <button class="suggestion-chip" onclick="sendSuggestion('When is the next BINGO?')">BINGO schedule</button>
    <button class="suggestion-chip" onclick="sendSuggestion('Is there free tax help available?')">Tax prep help</button>
  </div>
  <div class="chat-input-row">
    <input id="chat-input" type="text" placeholder="Type your question…" onkeydown="if(event.key==='Enter') sendMessage()"/>
    <button id="chat-send" onclick="sendMessage()">➤</button>
  </div>
</div>

<script>
  // Dropdown toggle
  function toggleDropdown(e) {
    e.stopPropagation();
    const dd = document.getElementById('eventsDropdown');
    if (dd) dd.classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });

  // Chat functions (simulated replies)
  let chatOpenFlag = false;
  let messageHistory = [];
  let greeted = false;
  function toggleChat() {
    chatOpenFlag = !chatOpenFlag;
    const win = document.getElementById("chat-window");
    const btn = document.getElementById("chat-bubble");
    if (chatOpenFlag) {
      win.classList.remove("hidden");
      btn.textContent = "✕";
      if (!greeted) {
        setTimeout(() => addBotMsg("Hello! I'm the Friends of Poway Seniors assistant. I can help you find resources, events, RSVP for lunch, BINGO schedule, and more. What would you like to know?"), 200);
        greeted = true;
      }
      setTimeout(() => document.getElementById("chat-input").focus(), 300);
    } else {
      win.classList.add("hidden");
      btn.textContent = "💬";
    }
  }
  async function sendMessage() {
    const input = document.getElementById("chat-input");
    const txt = input.value.trim();
    if (!txt) return;
    input.value = "";
    document.getElementById("chat-suggestions").style.display = "none";
    addUserMsg(txt);
    messageHistory.push({ role: "user", content: txt });
    setChatEnabled(false);
    const typing = showTypingIndicator();
    setTimeout(() => {
      let reply = "Thank you for reaching out! For specific information, please call (858) 668-4689 or visit our center. For events, check our BINGO or Social Lunch programs.";
      if (txt.toLowerCase().includes("bingo")) reply = "BINGO is held regularly at the Poway Senior Center. Please call (858) 668-4689 for current schedule and pricing!";
      else if (txt.toLowerCase().includes("lunch")) reply = "Our Social Lunch program partners with the City of Poway. Call us to RSVP or check upcoming lunch dates!";
      else if (txt.toLowerCase().includes("tax")) reply = "TCE Tax season has finished for this year, but we look forward to assisting again next season! For other tax resources, call 2-1-1.";
      else if (txt.toLowerCase().includes("volunteer")) reply = "We love volunteers! Please call (858) 668-4689 or visit our Volunteer Opportunities page.";
      removeTypingIndicator(typing);
      addBotMsg(reply);
      messageHistory.push({ role: "assistant", content: reply });
      setChatEnabled(true);
    }, 500);
  }
  function sendSuggestion(text) {
    document.getElementById("chat-input").value = text;
    sendMessage();
  }
  function addUserMsg(t) { const el=document.createElement("div"); el.className="msg user"; el.textContent=t; appendMsg(el); }
  function addBotMsg(t) { const el=document.createElement("div"); el.className="msg bot"; el.innerHTML=t.replace(/\n/g,"<br>"); appendMsg(el); }
  function showTypingIndicator() { const el=document.createElement("div"); el.className="typing-indicator"; el.innerHTML="<span></span><span></span><span></span>"; appendMsg(el); return el; }
  function removeTypingIndicator(el) { if(el && el.parentNode) el.parentNode.removeChild(el); }
  function appendMsg(el) { document.getElementById("chat-messages").appendChild(el); el.scrollIntoView({ behavior: "smooth", block: "end" }); }
  function setChatEnabled(en) { document.getElementById("chat-input").disabled = !en; document.getElementById("chat-send").disabled = !en; }
</script>