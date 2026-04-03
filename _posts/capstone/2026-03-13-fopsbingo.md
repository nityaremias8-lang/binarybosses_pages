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

  /* Navigation */
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

  /* Dropdown */
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

  /* Hero Section */
  .bingo-hero {
    padding: 3rem 2rem 1rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .bingo-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: 
      repeating-linear-gradient(55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
      repeating-linear-gradient(-55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px);
    pointer-events: none;
  }
  .bingo-hero-inner {
    position: relative; z-index: 2;
    max-width: 1000px; margin: 0 auto;
  }
  .bingo-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .bingo-subtitle {
    font-size: 1.2rem;
    color: var(--gold-lt);
    font-weight: 400;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  /* API Status Banner */
  .api-status {
    max-width: 1200px;
    margin: 0 auto 1rem;
    padding: 0 2rem;
  }
  
  .status-banner {
    background: rgba(0,0,0,0.3);
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.1);
  }
  
  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  
  .status-dot.connected {
    background: #4caf50;
    box-shadow: 0 0 10px #4caf50;
  }
  
  .status-dot.disconnected {
    background: #f44336;
    box-shadow: 0 0 10px #f44336;
  }
  
  .status-text.connected {
    color: #a5d6a7;
  }
  
  .status-text.disconnected {
    color: #ef9a9a;
  }

  /* Main Layout */
  .bingo-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  /* Left Column - Information */
  .bingo-info {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(8px);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .info-section {
    margin-bottom: 2.5rem;
  }

  .info-section h2 {
    font-size: 1.6rem;
    color: var(--gold-lt);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(201,145,61,0.3);
    padding-bottom: 0.75rem;
  }

  .info-section h2 i {
    font-size: 1.8rem;
  }

  .info-card {
    background: rgba(0,0,0,0.25);
    border-radius: 20px;
    padding: 1.75rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .info-card h3 {
    color: var(--gold-lt);
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
  }

  .info-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  .info-label {
    font-weight: 600;
    min-width: 80px;
    color: var(--gold-lt);
  }

  .info-value {
    color: var(--white);
    font-weight: 500;
  }

  .hours-list {
    list-style: none;
  }

  .hours-list li {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    font-size: 1.1rem;
  }

  .hours-list li:last-child {
    border-bottom: none;
  }

  .day {
    font-weight: 700;
    color: var(--gold-lt);
    font-size: 1.1rem;
  }

  .time {
    color: var(--white);
    font-weight: 600;
  }

  .doors-open-notice {
    margin-top: 1.5rem;
    padding: 1.25rem;
    background: linear-gradient(145deg, rgba(201,145,61,0.15), rgba(201,145,61,0.25));
    border-left: 6px solid var(--gold);
    border-radius: 0 12px 12px 0;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .doors-open-notice p {
    font-size: 1.2rem;
    color: var(--gold-lt);
    margin-bottom: 0.5rem;
  }

  .doors-open-notice .note {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    font-weight: 400;
    margin-top: 0.5rem;
  }

  .price-tag {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 2px solid rgba(201,145,61,0.3);
    font-size: 1.2rem;
  }

  .price-tag:last-child {
    border-bottom: none;
  }

  .price-label {
    font-weight: 600;
  }

  .price-value {
    font-weight: 800;
    color: var(--gold-lt);
    font-size: 1.4rem;
  }

  .rule-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: flex-start;
    font-size: 1.05rem;
  }

  .rule-bullet {
    color: var(--gold-lt);
    font-size: 1.3rem;
    font-weight: 700;
  }

  .lunch-card {
    background: linear-gradient(145deg, rgba(201,145,61,0.15), rgba(201,145,61,0.25));
    border-radius: 16px;
    padding: 1.5rem;
    margin-top: 1rem;
    border-left: 5px solid var(--gold);
  }

  .lunch-title {
    color: var(--gold-lt);
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lunch-detail {
    font-size: 1rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 0.5rem;
  }

  .lunch-highlight {
    color: var(--gold-lt);
    font-weight: 600;
  }

  .concessions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .concession-item {
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    font-weight: 600;
  }

  .free-coffee {
    background: rgba(201,145,61,0.3);
    border: 1px dashed var(--gold);
  }

  /* Right Column - Volunteer Signup */
  .volunteer-section {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(8px);
    border-radius: 24px;
    padding: 2rem;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .volunteer-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .volunteer-header h2 {
    font-size: 2rem;
    color: var(--gold-lt);
    margin-bottom: 0.5rem;
  }

  .volunteer-header p {
    color: rgba(255,255,255,0.8);
    font-size: 1.05rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--gold-lt);
  }

  input, select, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    font-size: 1rem;
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--gold);
    background: rgba(255,255,255,0.15);
  }

  input::placeholder {
    color: rgba(255,255,255,0.4);
  }

  select option {
    background: var(--sage-dk);
    color: var(--white);
  }

  .checkbox-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255,255,255,0.1);
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .checkbox-item input[type="checkbox"] {
    width: auto;
    margin-right: 0.25rem;
    transform: scale(1.1);
  }

  .checkbox-item label {
    margin-bottom: 0;
    color: var(--white);
    font-weight: 500;
  }

  .btn-submit {
    width: 100%;
    padding: 1.2rem;
    background: linear-gradient(145deg, var(--gold), #b07e2e);
    color: var(--white);
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 5px 20px rgba(201,145,61,0.4);
  }

  .btn-submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(201,145,61,0.6);
    background: linear-gradient(145deg, #b07e2e, var(--gold));
  }

  .alert {
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    font-weight: 500;
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .alert-success {
    background: rgba(76, 175, 80, 0.2);
    border: 2px solid #4caf50;
    color: #a5d6a7;
  }

  .alert-error {
    background: rgba(244, 67, 54, 0.2);
    border: 2px solid #f44336;
    color: #ef9a9a;
  }

  /* Footer */
  .fops-footer {
    background: rgba(0,0,0,0.3);
    border-top: 1px solid rgba(255,255,255,0.08);
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

  /* Responsive */
  @media (max-width: 900px) {
    .bingo-grid {
      grid-template-columns: 1fr;
    }
    .fops-logo span { display: none; }
    .form-row {
      grid-template-columns: 1fr;
    }
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
           target="_blank" class="fops-nav-link fops-donate">Donate</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bingo-hero">
    <div class="bingo-hero-inner">
      <h1 class="bingo-title">Friends of Poway Seniors Bingo</h1>
      <p class="bingo-subtitle">Weekly Games • Community • Prizes</p>
    </div>
  </section>

  <!-- API Status Banner -->
  <div class="api-status">
    <div class="status-banner" id="apiStatus">
      <span class="status-dot disconnected" id="statusDot"></span>
      <span class="status-text disconnected" id="statusText">Checking API connection...</span>
    </div>
  </div>

  <!-- Main Content -->
  <div class="bingo-grid">
    
    <!-- Left Column - Bingo Information -->
    <div class="bingo-info">
      <div class="info-section">
        <h2>Bingo</h2>
        <div class="info-card">
          <h3>Mickey Cafagna Community Center</h3>
          <div class="info-row">
            <span class="info-label">Address:</span>
            <span class="info-value">13094 Civic Center Dr. Poway, CA 92064</span>
          </div>
          <div class="info-row">
            <span class="info-label">Hall:</span>
            <span class="info-value">Sycamore Hall</span>
          </div>
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

    <!-- Right Column - Volunteer Signup -->
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



<script type="module">
  import { pythonURI, fetchOptions } from '@api/config';
  
  console.log('Bingo page using API base URL:', pythonURI);

  // DOM elements
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const alertContainer = document.getElementById('alertContainer');
  const submitBtn = document.getElementById('submitBtn');
  const volunteerForm = document.getElementById('volunteerForm');

  // Helper: show alert message
  function showAlert(message, type = 'error') {
    if (!alertContainer) return;
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertContainer.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 5000);
  }

  // Test API connection dynamically using imported pythonURI
  async function testAPIConnection() {
    try {
      const testUrl = `${pythonURI}/api/bingo/test`;
      console.log('Testing connection to:', testUrl);
      
      const response = await fetch(testUrl, {
         ...fetchOptions,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      
      if (response.ok) {
        const data = await response.json();
        statusDot.className = 'status-dot connected';
        statusText.className = 'status-text connected';
        statusText.textContent = `✅ API Ready · ${data.message || 'System online'}`;
        return true;
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.error('API connection error:', error);
      statusDot.className = 'status-dot disconnected';
      statusText.className = 'status-text disconnected';
      statusText.textContent = `⚠️ Backend unreachable · ensure server runs at ${pythonURI}`;
      return false;
    }
  }

  // Submit volunteer form using dynamic API URL
  async function submitVolunteerForm() {
    if (!submitBtn) return;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    if (alertContainer) alertContainer.innerHTML = '';
    
    const firstName = document.getElementById('first_name')?.value.trim();
    const lastName = document.getElementById('last_name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    
    if (!firstName || !lastName || !email) {
      showAlert('Please fill in all required fields (First Name, Last Name, Email)', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Volunteer Application';
      return;
    }
    
    const availabilityDays = Array.from(document.querySelectorAll('input[name="availability_days"]:checked')).map(cb => cb.value);
    const preferredRoles = Array.from(document.querySelectorAll('input[name="preferred_roles"]:checked')).map(cb => cb.value);
    
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: document.getElementById('phone')?.value.trim() || '',
      availability: availabilityDays.join(', '),
      availability_days: availabilityDays,
      preferred_roles: preferredRoles,
      experience: document.getElementById('experience')?.value.trim() || ''
    };
    
    try {
      const response = await fetch(`${pythonURI}/api/bingo/volunteer`, {
        ...fetchOptions,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.success) {
        showAlert(`${result.message || 'Application received!'} Volunteer ID: ${result.volunteer_id}`, 'success');
        volunteerForm?.reset();
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showAlert(`Error: ${result.error || 'Submission failed'}`, 'error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      showAlert(`Network error. Could not reach backend at ${pythonURI}. Ensure server is running.`, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Volunteer Application';
    }
  }

  // Dropdown toggle (vanilla)
  window.toggleDropdown = function(e) {
    e.stopPropagation();
    const dd = document.getElementById('eventsDropdown');
    if (dd) dd.classList.toggle('open');
  };
  
  document.addEventListener('click', function(e) {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });
  
  // Attach submit handler
  if (submitBtn) {
    submitBtn.onclick = submitVolunteerForm;
  }
  
  // Initialize: test connection when page loads
  testAPIConnection();
</script>

</body>
</html>