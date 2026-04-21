---
toc: false
layout: none
title: Bingo
permalink: /fopsbingo/
---
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<title>Social Lunch | Friends of Poway Seniors</title>
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
    --red: #b34b4b;
    --red-lt: #d17a7a;
    --orange: #e67e22;
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

  /* ===== NAVIGATION (mirroring about us page) ===== */
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
  .lunch-hero { padding: 2.5rem 2rem 1rem; text-align: center; }
  .lunch-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700;
    color: var(--white); line-height: 1.1; margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .lunch-subtitle { font-size: 1.2rem; color: var(--gold-lt); font-weight: 400; margin-bottom: 1.5rem; letter-spacing: 0.5px; }
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
  .lunch-grid {
    max-width: 1200px; margin: 0 auto; padding: 2rem 2rem 4rem;
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
  }
  .lunch-info, .volunteer-section {
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
  .info-row { display: flex; gap: 1rem; margin-bottom: 1rem; line-height: 1.6; font-size: 1.05rem; flex-wrap: wrap; }
  .info-label { font-weight: 600; min-width: 110px; color: var(--gold-lt); }
  .info-value { color: var(--white); font-weight: 500; }
  .hours-list { list-style: none; }
  .hours-list li { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.15); font-size: 1.1rem; }
  .hours-list li:last-child { border-bottom: none; }
  .day { font-weight: 700; color: var(--gold-lt); font-size: 1.1rem; }
  .time { color: var(--white); font-weight: 600; }
  .chef-notice {
    background: linear-gradient(145deg, rgba(230,126,34,0.15), rgba(230,126,34,0.25));
    border-left: 6px solid var(--orange);
    border-radius: 12px;
    padding: 1.2rem;
    margin-top: 1rem;
  }
  .chef-notice p { font-size: 1rem; margin-bottom: 0.5rem; }
  .chef-name { color: var(--orange); font-weight: 700; font-size: 1.1rem; }
  .benefits-list { list-style: none; margin-top: 0.5rem; }
  .benefits-list li { padding: 0.5rem 0; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .benefit-icon { font-size: 1.1rem; color: var(--gold-lt); }
  .reserve-note {
    background: rgba(201,145,61,0.2);
    border-radius: 12px; padding: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  .external-link {
    color: var(--gold-lt);
    text-decoration: none;
  }
  .external-link:hover {
    text-decoration: underline;
  }

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

  /* RESERVATION TAB */
  #reservation-tab-content {
    max-width: 800px; margin: 0 auto;
    padding: 2rem 2rem 4rem;
  }
  .reservation-card {
    background: rgba(255,255,255,0.08); backdrop-filter: blur(8px);
    border-radius: 24px; padding: 2rem; border: 1px solid rgba(255,255,255,0.1);
  }
  .reservation-card h2 {
    font-size: 1.8rem; color: var(--gold-lt); margin-bottom: 1.5rem;
    text-align: center; border-bottom: 2px solid rgba(201,145,61,0.3); padding-bottom: 0.75rem;
  }
  .reservation-note {
    background: rgba(230,126,34,0.15);
    border-radius: 12px; padding: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
    border-left: 4px solid var(--orange);
  }

  /* FOOTER */
  .fops-footer { background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.08); padding: 1.5rem 2rem; }
  .fops-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
  .fops-footer-inner span { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
  .fops-footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .fops-footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.18s; }
  .fops-footer-links a:hover { color: var(--white); }

  @media (max-width: 900px) {
    .lunch-grid { grid-template-columns: 1fr; }
    .fops-logo span { display: none; }
    .form-row { grid-template-columns: 1fr; }
    .fops-nav-inner { padding: 0 1rem; }
    .page-tabs { padding: 1rem 1rem 0; }
    .lunch-hero { padding: 1.5rem 1rem 0.5rem; }
    .lunch-grid { padding: 1.5rem 1rem 3rem; }
  }
</style>
</head>
<body>
<div id="fops-lunch-root">

  <!-- Navigation (identical to about us page) -->
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
            <a href="/fopslunch/" class="fops-dp-item"><div class="fops-dp-icon">🍽️</div> Social Lunch</a>
            <a href="/fopspredictor/" class="fops-dp-item"><div class="fops-dp-icon">🔮</div> Event Predictor</a>
          </div>
        </div>
        <a href="/fopsaboutus/" class="fops-nav-link">About Us</a>
        <a href="/fopsresources/" class="fops-nav-link">Resources</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank" class="fops-nav-link fops-donate">Donate</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="lunch-hero">
    <h1 class="lunch-title">Social Lunch Program</h1>
    <p class="lunch-subtitle">Good Food • Good Company • Good Cause</p>
  </section>

  <!-- Tabs -->
  <div class="page-tabs">
    <button class="tab-btn active" onclick="switchTab('info')">Info & Volunteer</button>
    <button class="tab-btn" onclick="switchTab('reservation')">Make a Reservation</button>
  </div>

  <!-- TAB: INFO & VOLUNTEER -->
  <div id="tab-info" class="tab-content active">
    <div class="api-status">
      <div class="status-banner" id="apiStatus">
        <span class="status-dot disconnected" id="statusDot"></span>
        <span class="status-text disconnected" id="statusText">Checking API connection...</span>
      </div>
    </div>

    <div class="lunch-grid">
      <!-- Left: Lunch Info -->
      <div class="lunch-info">
        <div class="info-section">
          <h2>Social Lunch</h2>
          <div class="info-card">
            <h3>Join Us For Lunch</h3>
            <div class="info-row"><span class="info-label">Location:</span><span class="info-value">Friends of Poway Seniors Center</span></div>
            <div class="info-row"><span class="info-label">Address:</span><span class="info-value">13094 Civic Center Dr. Poway, CA 92064</span></div>
            <ul class="hours-list">
              <li><span class="day">Monday - Friday</span><span class="time">11:30 AM - 1:00 PM</span></li>
            </ul>
            <div class="chef-notice">
              <p><span class="chef-name">The NEW Chef Is In</span></p>
              <p>Chef Charlie of Charlie's Classic Cooking and his staff will be cooking and sharing their culinary talents for the senior lunch program starting February 1st</p>
            </div>
            <div class="reserve-note">
              <p><strong>Reservations are required by 1:00 PM the day before you wish to eat lunch</strong></p>
            </div>
          </div>
        </div>

        <div class="info-section">
          <h2>Program Benefits</h2>
          <div class="info-card">
            <p style="margin-bottom: 1rem;">Friends of Poway Seniors Bingo Proceeds greatly support the 5-day a week meal program. Community lunches like ours support Poway seniors by providing:</p>
            <ul class="benefits-list">
              <li><span class="benefit-icon">👥</span> Social opportunities to meet with others</li>
              <li><span class="benefit-icon">💰</span> Budget-conscious seniors a lower-cost alternative to restaurant dining</li>
              <li><span class="benefit-icon">🍲</span> Provides at least one hot meal a day for seniors who may not otherwise cook or buy complete meals for themselves</li>
            </ul>
          </div>
        </div>

        <div class="info-section">
          <h2>More Information</h2>
          <div class="info-card">
            <p>For more information on the New Congregate Lunch program, please visit:</p>
            <p style="margin-top: 0.5rem;"><a href="https://poway.org/1073/Meal-Program" target="_blank" class="external-link">poway.org/1073/Meal-Program</a></p>
          </div>
        </div>
      </div>

      <!-- Right: Volunteer Application -->
      <div class="volunteer-section">
        <div class="volunteer-header">
          <h2>Volunteer Opportunities</h2>
          <p>Join our team of Social Lunch volunteers</p>
        </div>
        <div id="alertContainer"></div>
        <form id="volunteerForm">
          <div class="form-row">
            <div class="form-group"><label for="first_name">First Name *</label><input type="text" id="first_name" required placeholder="Jane"></div>
            <div class="form-group"><label for="last_name">Last Name *</label><input type="text" id="last_name" required placeholder="Smith"></div>
          </div>
          <div class="form-group"><label for="email">Email Address *</label><input type="email" id="email" required placeholder="jane.smith@example.com"></div>
          <div class="form-group"><label for="phone">Phone Number</label><input type="tel" id="phone" placeholder="(858) 555-1234"></div>
          <div class="form-group">
            <label>Availability (Lunch hours 11:30 AM - 1:00 PM)</label>
            <div class="checkbox-group">
              <div class="checkbox-item"><input type="checkbox" id="avail_mon" name="availability_days" value="Monday"><label for="avail_mon">Monday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_tue" name="availability_days" value="Tuesday"><label for="avail_tue">Tuesday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_wed" name="availability_days" value="Wednesday"><label for="avail_wed">Wednesday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_thu" name="availability_days" value="Thursday"><label for="avail_thu">Thursday</label></div>
              <div class="checkbox-item"><input type="checkbox" id="avail_fri" name="availability_days" value="Friday"><label for="avail_fri">Friday</label></div>
            </div>
          </div>
          <div class="form-group">
            <label>Preferred Role</label>
            <div class="checkbox-group">
              <div class="checkbox-item"><input type="checkbox" id="role_serving" name="preferred_roles" value="Food Serving"><label for="role_serving">Food Serving</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_setup" name="preferred_roles" value="Setup / Cleanup"><label for="role_setup">Setup / Cleanup</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_greeting" name="preferred_roles" value="Greeting / Check-in"><label for="role_greeting">Greeting / Check-in</label></div>
              <div class="checkbox-item"><input type="checkbox" id="role_kitchen" name="preferred_roles" value="Kitchen Assistant"><label for="role_kitchen">Kitchen Assistant</label></div>
            </div>
          </div>
          <div class="form-group"><label for="experience">Previous Experience or special skills (optional)</label><textarea id="experience" rows="2" placeholder="Food service, customer service, or other relevant experience?"></textarea></div>
          <div class="form-group"><label for="dietary">Dietary Restrictions (if any)</label><textarea id="dietary" rows="1" placeholder="Food allergies, dietary restrictions..."></textarea></div>
          <button type="button" class="btn-submit" id="submitBtn">Submit Social Lunch Volunteer Application</button>
        </form>
        <div style="margin-top: 1.5rem; text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem;">
          <p>You will be contacted within 3-5 business days. Thank you for supporting our seniors</p>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: MAKE A RESERVATION -->
  <div id="tab-reservation" class="tab-content">
    <div id="reservation-tab-content">
      <div class="reservation-card">
        <h2>Lunch Reservation</h2>
        <div class="reservation-note">
          <p>Reservations are required by 1:00 PM the day before you wish to eat lunch</p>
        </div>
        <div id="reservationAlertContainer"></div>
        <form id="reservationForm">
          <div class="form-row">
            <div class="form-group"><label for="res_first_name">First Name *</label><input type="text" id="res_first_name" required placeholder="John"></div>
            <div class="form-group"><label for="res_last_name">Last Name *</label><input type="text" id="res_last_name" required placeholder="Doe"></div>
          </div>
          <div class="form-group"><label for="res_email">Email Address *</label><input type="email" id="res_email" required placeholder="john.doe@example.com"></div>
          <div class="form-group"><label for="res_phone">Phone Number</label><input type="tel" id="res_phone" placeholder="(858) 555-1234"></div>
          <div class="form-row">
            <div class="form-group"><label for="res_date">Reservation Date *</label><input type="date" id="res_date" required></div>
            <div class="form-group"><label for="res_guests">Number of Guests *</label><select id="res_guests"><option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option></select></div>
          </div>
          <div class="form-group"><label for="res_dietary">Dietary Restrictions (optional)</label><textarea id="res_dietary" rows="1" placeholder="Food allergies, dietary restrictions..."></textarea></div>
          <button type="button" class="btn-submit" id="reserveBtn">Make Reservation</button>
        </form>
        <div style="margin-top: 1.5rem; text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem;">
          <p>Please arrive by 11:30 AM on your reserved date. Thank you</p>
        </div>
      </div>
    </div>
  </div>

  <footer class="fops-footer">
    <div class="fops-footer-inner">
      <span>© 2025 PVSCC 501(c)(3) · EIN: 51-0183384 · Social Lunch Program</span>
      <div class="fops-footer-links">
        <a href="/fopsaboutus/">About Us</a>
        <a href="/fopsresources/">Resources</a>
        <a href="https://www.facebook.com/PowaySeniorCenter" target="_blank">Facebook</a>
        <a href="https://gateway.clearent.net/paylink/000001634294/16126366" target="_blank">Donate</a>
      </div>
    </div>
  </footer>

</div>

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
    const btns = document.querySelectorAll('.tab-btn');
    if (tab === 'info') btns[0].classList.add('active');
    else btns[1].classList.add('active');
  };

  // Dropdown toggle
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

  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');

  async function testAPIConnection() {
    try {
      const res = await fetch(`${pythonURI}/api/social-lunch/test`, {
        ...fetchOptions, method: 'GET', headers: { 'Content-Type': 'application/json' }, mode: 'cors'
      });
      if (res.ok) {
        const data = await res.json();
        statusDot.className = 'status-dot connected';
        statusText.className = 'status-text connected';
        statusText.textContent = ` API Ready · ${data.message || 'Social Lunch System online'}`;
      } else { throw new Error(`HTTP ${res.status}`); }
    } catch {
      statusDot.className = 'status-dot disconnected';
      statusText.className = 'status-text disconnected';
      statusText.textContent = `⚠️ Backend unreachable · ensure server runs at ${pythonURI}`;
    }
  }

  // Volunteer Form Submission
  const alertContainer = document.getElementById('alertContainer');
  const submitBtn = document.getElementById('submitBtn');
  const volunteerForm = document.getElementById('volunteerForm');

  function showAlert(msg, type = 'error', container = alertContainer) {
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = msg;
    container.appendChild(div);
    setTimeout(() => div.remove(), 5000);
  }

  async function submitVolunteerForm() {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    alertContainer.innerHTML = '';
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!firstName || !lastName || !email) {
      showAlert('Please fill in all required fields (First Name, Last Name, Email)');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Social Lunch Volunteer Application';
      return;
    }
    const availabilityDays = [...document.querySelectorAll('input[name="availability_days"]:checked')].map(cb => cb.value);
    const preferredRoles = [...document.querySelectorAll('input[name="preferred_roles"]:checked')].map(cb => cb.value);
    const payload = {
      first_name: firstName, last_name: lastName, email,
      phone: document.getElementById('phone').value.trim() || '',
      availability_days: availabilityDays,
      preferred_roles: preferredRoles,
      experience: document.getElementById('experience').value.trim() || '',
      dietary_restrictions: document.getElementById('dietary').value.trim() || ''
    };
    try {
      const res = await fetch(`${pythonURI}/api/social-lunch/volunteer`, {
        ...fetchOptions, method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: 'cors',
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        showAlert(`${result.message || 'Application received! Welcome to Social Lunch team.'} Volunteer ID: ${result.volunteer_id}`, 'success');
        volunteerForm.reset();
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else { showAlert(`Error: ${result.error || 'Submission failed'}`); }
    } catch (err) {
      console.error('Submission error:', err);
      showAlert(`Network error. Could not reach backend at ${pythonURI}.`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Social Lunch Volunteer Application';
    }
  }

  // Reservation Form Submission
  const reservationAlertContainer = document.getElementById('reservationAlertContainer');
  const reserveBtn = document.getElementById('reserveBtn');
  const reservationForm = document.getElementById('reservationForm');

  async function submitReservation() {
    reserveBtn.disabled = true;
    reserveBtn.textContent = 'Submitting...';
    reservationAlertContainer.innerHTML = '';
    const firstName = document.getElementById('res_first_name').value.trim();
    const lastName = document.getElementById('res_last_name').value.trim();
    const email = document.getElementById('res_email').value.trim();
    const reservationDate = document.getElementById('res_date').value;
    if (!firstName || !lastName || !email || !reservationDate) {
      showAlert('Please fill in all required fields (First Name, Last Name, Email, Date)', 'error', reservationAlertContainer);
      reserveBtn.disabled = false;
      reserveBtn.textContent = 'Make Reservation';
      return;
    }
    const payload = {
      first_name: firstName, last_name: lastName, email,
      phone: document.getElementById('res_phone').value.trim() || '',
      reservation_date: reservationDate,
      number_of_guests: parseInt(document.getElementById('res_guests').value),
      dietary_restrictions: document.getElementById('res_dietary').value.trim() || ''
    };
    try {
      const res = await fetch(`${pythonURI}/api/social-lunch/reserve`, {
        ...fetchOptions, method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: 'cors',
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        showAlert(`${result.message || 'Reservation confirmed'} Reservation ID: ${result.reservation_id}`, 'success', reservationAlertContainer);
        reservationForm.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else { showAlert(`Error: ${result.error || 'Reservation failed'}`, 'error', reservationAlertContainer); }
    } catch (err) {
      console.error('Reservation error:', err);
      showAlert(`Network error. Could not reach backend at ${pythonURI}.`, 'error', reservationAlertContainer);
    } finally {
      reserveBtn.disabled = false;
      reserveBtn.textContent = 'Make Reservation';
    }
  }

  submitBtn.onclick = submitVolunteerForm;
  reserveBtn.onclick = submitReservation;
  testAPIConnection();
</script>

</body>
</html>