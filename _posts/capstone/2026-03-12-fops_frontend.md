---
toc: false
layout: none
title: Friends of Poway Seniors
description: Home — Friends of Poway Seniors
permalink: /fops/
sticky_rank: 1
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<title>Friends of Poway Seniors | Home</title>
<!-- Preconnect & Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* Reset & Base – preserves full layout, hides default Jekyll cruft */
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

  /* FOPS root styling */
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

  #fops-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--sage-dk);
    min-height: 100vh;
    color: var(--white);
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    line-height: 1.2;
    font-weight: 600;
  }

  /* ----- NAVIGATION ----- */
  .fops-nav {
    background: rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky;
    top: 0;
    z-index: 500;
    backdrop-filter: blur(10px);
  }

  .fops-nav-inner {
    max-width: 1100px;
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
    flex-shrink: 0;
  }

  /* ===== HERO TITLE SECTION (NEW) ===== */
  .fops-hero-title {
    padding: 5rem 2rem 3.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .fops-hero-title::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
      repeating-linear-gradient(-55deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px);
    pointer-events: none;
  }

  .fops-hero-title::after {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 600px;
    background: radial-gradient(ellipse, rgba(201,145,61,0.1) 0%, transparent 65%);
    pointer-events: none;
  }

  .fops-hero-title-inner {
    position: relative;
    z-index: 2;
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

  .fops-main-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.05;
    margin-bottom: 1.5rem;
  }

  .fops-main-title em {
    color: var(--gold-lt);
    font-style: italic;
    display: block;
  }

  .fops-hero-sub {
    font-size: 1.08rem;
    color: rgba(255,255,255,0.65);
    font-weight: 300;
    line-height: 1.78;
    max-width: 620px;
    margin: 0 auto;
  }

  .fops-title-divider {
    width: 64px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-lt));
    border-radius: 2px;
    margin: 2rem auto 0;
    opacity: 0.75;
  }

  /* divider */
  .fops-divider {
    max-width: 1100px;
    margin: 0 auto;
    border: none;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  /* Mission & Vision cards */
  .fops-mv {
    padding: 4rem 2rem 7rem;
  }

  .fops-mv-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .fops-mv-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .fops-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--gold-lt);
    margin-bottom: 0.6rem;
  }

  .fops-mv-header h2 {
    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
    color: var(--white);
    margin-bottom: 0.75rem;
  }

  .fops-mv-header p {
    font-size: 0.97rem;
    color: rgba(255,255,255,0.6);
    max-width: 500px;
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.7;
  }

  .fops-mv-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .fops-mv-card {
    border-radius: 20px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .fops-mv-card.mission {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(8px);
  }

  .fops-mv-card.vision {
    background: rgba(201,145,61,0.15);
    border-color: rgba(201,145,61,0.25);
  }

  .fops-mv-card::after {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    pointer-events: none;
  }

  .fops-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.85);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.28rem 0.85rem;
    border-radius: 20px;
    margin-bottom: 1.1rem;
  }

  .fops-mv-card.vision .fops-pill {
    background: rgba(201,145,61,0.25);
    border-color: rgba(201,145,61,0.4);
    color: var(--gold-lt);
  }

  .fops-mv-card h3 {
    font-size: 1.6rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  .fops-mv-card p {
    font-size: 0.97rem;
    color: rgba(255,255,255,0.78);
    line-height: 1.8;
  }

  /* Footer */
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

  /* Animations */
  @keyframes fopsUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fu { animation: fopsUp 0.6s ease both; }
  .fu1 { animation-delay: 0.05s; }
  .fu2 { animation-delay: 0.15s; }
  .fu3 { animation-delay: 0.25s; }
  .fu4 { animation-delay: 0.35s; }

  /* Responsive */
  @media (max-width: 700px) {
    .fops-main-title {
      font-size: clamp(2.6rem, 10vw, 4rem);
    }
    .fops-main-title em {
      display: inline;
    }
    .fops-mv-cards {
      grid-template-columns: 1fr;
    }
    .fops-nav-link {
      padding: 0.4rem 0.65rem;
      font-size: 0.83rem;
    }
    .fops-hero-title {
      padding: 3.5rem 1.25rem 2.5rem;
    }
    .fops-mv {
      padding: 2.5rem 1.25rem 5rem;
    }
  }

  /* Chat widget styles */
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
    transition: transform 0.2s, box-shadow 0.2s;
  }
  #chat-bubble:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 28px rgba(46,82,56,0.55);
  }
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
    transition: all 0.3s ease;
    font-family: 'DM Sans', sans-serif;
  }
  #chat-window.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(16px) scale(0.97);
  }
  .chat-header {
    background: linear-gradient(135deg, #2e5238, #4a7c59);
    color: #fff;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .chat-header-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  .chat-header-text h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0;
  }
  .chat-header-text p {
    font-size: 0.75rem;
    opacity: 0.8;
    margin: 0;
  }
  .chat-close {
    margin-left: auto;
    background: none;
    border: none;
    color: rgba(255,255,255,0.8);
    font-size: 1.3rem;
    cursor: pointer;
    line-height: 1;
    padding: 0 2px;
  }
  .chat-close:hover { color: #fff; }
  #chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  #chat-messages::-webkit-scrollbar { width: 5px; }
  #chat-messages::-webkit-scrollbar-thumb {
    background: #c5d9ca;
    border-radius: 10px;
  }
  .msg {
    max-width: 82%;
    padding: 0.65rem 0.9rem;
    border-radius: 14px;
    font-size: 0.88rem;
    line-height: 1.55;
    animation: msgIn 0.2s ease;
  }
  @keyframes msgIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .msg.bot {
    background: #fff;
    color: #1e2a1e;
    border: 1px solid rgba(74,124,89,0.12);
    border-bottom-left-radius: 4px;
    align-self: flex-start;
  }
  .msg.user {
    background: linear-gradient(135deg, #4a7c59, #2e5238);
    color: #fff;
    border-bottom-right-radius: 4px;
    align-self: flex-end;
  }
  .typing-indicator {
    display: flex;
    gap: 4px;
    align-items: center;
    background: #fff;
    border: 1px solid rgba(74,124,89,0.12);
    padding: 0.65rem 0.9rem;
    border-radius: 14px;
    border-bottom-left-radius: 4px;
    width: fit-content;
  }
  .typing-indicator span {
    width: 7px;
    height: 7px;
    background: #7aad8b;
    border-radius: 50%;
    animation: bounce 1.2s infinite;
  }
  .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
  .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30%           { transform: translateY(-6px); }
  }
  .chat-input-row {
    display: flex;
    gap: 0.5rem;
    padding: 0.85rem;
    border-top: 1px solid rgba(74,124,89,0.12);
    background: #fff;
  }
  #chat-input {
    flex: 1;
    border: 1.5px solid rgba(74,124,89,0.2);
    border-radius: 20px;
    padding: 0.55rem 1rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    outline: none;
    background: #faf7f2;
    color: #1e2a1e;
    transition: border-color 0.2s;
  }
  #chat-input:focus { border-color: #4a7c59; }
  #chat-send {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #4a7c59;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  #chat-send:hover    { background: #2e5238; }
  #chat-send:disabled { background: #c5d9ca; cursor: not-allowed; }
  .chat-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    padding: 0 1rem 0.75rem;
  }
  .suggestion-chip {
    background: #f0ebe0;
    border: 1px solid rgba(74,124,89,0.2);
    color: #2e5238;
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.3rem 0.7rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .suggestion-chip:hover {
    background: #4a7c59;
    color: #fff;
    border-color: #4a7c59;
  }
</style>
</head>
<body>
<div id="fops-root">

  <!-- Navigation bar -->
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
            <a href="/fopslunch/" class="fops-dp-item">
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

  <!-- ===== HERO TITLE (NEW) ===== -->
  <section class="fops-hero-title">
    <div class="fops-hero-title-inner">
      <div class="fops-badge fu fu1">🌿 Poway, California</div>
      <h1 class="fops-main-title fu fu2">
        Friends of
        <em>Poway Seniors</em>
      </h1>
      <p class="fops-hero-sub fu fu3">
        A volunteer-driven nonprofit dedicated to supporting seniors and the broader Poway community through programs, resources, and connection.
      </p>
      <div class="fops-title-divider fu fu4"></div>
    </div>
  </section>

  <hr class="fops-divider">

  <!-- Mission & Vision -->
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

<!-- Chat Widget -->
<button id="chat-bubble" onclick="toggleChat()" aria-label="Open chat assistant" title="Ask our AI assistant">
  💬
</button>
<div id="chat-window" class="hidden" role="dialog" aria-label="FOPS Chat Assistant">
  <div class="chat-header">
    <div class="chat-header-icon">🌿</div>
    <div class="chat-header-text">
      <h4>FOPS Assistant</h4>
      <p>Ask me about events &amp; programs</p>
    </div>
    <button class="chat-close" onclick="toggleChat()" aria-label="Close chat">✕</button>
  </div>
  <div id="chat-messages"></div>
  <div class="chat-suggestions" id="chat-suggestions">
    <button class="suggestion-chip" onclick="sendSuggestion('What events are coming up?')">📅 Upcoming events</button>
    <button class="suggestion-chip" onclick="sendSuggestion('How do I RSVP for lunch?')">🍽️ RSVP for lunch</button>
    <button class="suggestion-chip" onclick="sendSuggestion('When is the next BINGO?')">🎱 BINGO schedule</button>
    <button class="suggestion-chip" onclick="sendSuggestion('Is there free tax help available?')">🧾 Tax prep help</button>
  </div>
  <div class="chat-input-row">
    <input id="chat-input" type="text" placeholder="Type your question…" aria-label="Chat message" onkeydown="if(event.key==='Enter') sendMessage()"/>
    <button id="chat-send" onclick="sendMessage()" aria-label="Send message">➤</button>
  </div>
</div>

<script>
  // ========== DROPDOWN ==========
  function toggleDropdown(e) {
    e.stopPropagation();
    const dd = document.getElementById('eventsDropdown');
    if (dd) dd.classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const dd = document.getElementById('eventsDropdown');
    if (dd && !dd.contains(e.target)) dd.classList.remove('open');
  });

  // ========== CHAT WIDGET ==========
  const BACKEND_URL = "http://localhost:8587";
  let chatOpen = false;
  let messageHistory = [];
  let hasGreeted = false;

  function toggleChat() {
    chatOpen = !chatOpen;
    const win = document.getElementById("chat-window");
    const btn = document.getElementById("chat-bubble");
    if (chatOpen) {
      win.classList.remove("hidden");
      btn.textContent = "✕";
      if (!hasGreeted) {
        setTimeout(() => addBotMessage("Hello! 👋 I'm the Friends of Poway Seniors assistant. I can help you find upcoming events, RSVP for lunch or BINGO, and answer questions about our programs. What can I help you with today?"), 300);
        hasGreeted = true;
      }
      setTimeout(() => document.getElementById("chat-input").focus(), 400);
    } else {
      win.classList.add("hidden");
      btn.textContent = "💬";
    }
  }

  async function sendMessage() {
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    hideSuggestions();
    addUserMessage(text);
    messageHistory.push({ role: "user", content: text });
    setInputEnabled(false);
    const typingEl = showTyping();
    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messageHistory })
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      removeTyping(typingEl);
      addBotMessage(data.reply);
      messageHistory.push({ role: "assistant", content: data.reply });
    } catch (err) {
      removeTyping(typingEl);
      addBotMessage("Sorry, I'm having trouble connecting right now. Please call us at (858) 668-4689 for immediate help! 📞");
    } finally {
      setInputEnabled(true);
      document.getElementById("chat-input").focus();
    }
  }

  function sendSuggestion(text) {
    document.getElementById("chat-input").value = text;
    sendMessage();
  }

  function addUserMessage(text) {
    const el = document.createElement("div");
    el.className = "msg user";
    el.textContent = text;
    appendMessage(el);
  }

  function addBotMessage(text) {
    const el = document.createElement("div");
    el.className = "msg bot";
    el.innerHTML = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
    appendMessage(el);
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "typing-indicator";
    el.innerHTML = "<span></span><span></span><span></span>";
    appendMessage(el);
    return el;
  }

  function removeTyping(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function appendMessage(el) {
    const msgs = document.getElementById("chat-messages");
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideSuggestions() {
    const s = document.getElementById("chat-suggestions");
    if (s) s.style.display = "none";
  }

  function setInputEnabled(enabled) {
    const inp = document.getElementById("chat-input");
    const btn = document.getElementById("chat-send");
    if (inp) inp.disabled = !enabled;
    if (btn) btn.disabled = !enabled;
  }
</script>
</body>
</html>