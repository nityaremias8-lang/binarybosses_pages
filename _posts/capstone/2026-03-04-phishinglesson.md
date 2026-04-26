---
layout: post
title: 5.6 Safe Computing
description: IOC-2 — threats, defenses, and encryption
type: lessons
permalink: /phishing
---

## 5.6 Safe Computing

Knowing *what* PII is (from 5.5) is only half the picture. Now we look at **how it gets stolen**, **how systems get compromised**, and **how to defend against it** — all part of College Board's IOC-2 standards.

---

<style>
.sc-pill{display:inline-block;font-size:11px;font-weight:500;padding:2px 8px;border-radius:20px}
.sc-label{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#c4bbf0;margin-bottom:12px}
.sc-tab{padding:7px 14px;border-radius:20px;border:none;background:#1e1c45;cursor:pointer;font-size:13px;font-weight:500;color:#c4bbf0;transition:all .15s}
.sc-tab.active{background:#534AB7;color:#ffffff}
.sc-section{display:none}
.sc-section.active{display:block}
.sc-threat-btn{width:100%;text-align:left;background:#2a2660;border:1px solid #4a45a0;border-radius:8px;padding:12px 16px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:background .15s;margin-bottom:6px}
.sc-threat-btn:hover{background:#332f75}
.sc-threat-btn.active{border-color:#a09af0;background:#332f75}
.sc-threat-body{display:none;margin-bottom:6px;border:1px solid #4a45a0;border-radius:0 0 8px 8px;padding:16px;background:#1a1840}
.sc-threat-body.open{display:block}
.sc-layer-row{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:8px;border:1px solid #4a45a0;margin-bottom:6px;cursor:pointer;transition:background .15s;background:#2a2660}
.sc-layer-row:hover{background:#332f75}
.sc-layer-row.active{border-color:#a09af0;border-radius:8px 8px 0 0;margin-bottom:0}
.sc-layer-detail{display:none;font-size:13px;color:#e8e4ff;line-height:1.6;padding:12px 16px 14px 48px;background:#1a1840;border:1px solid #4a45a0;border-top:none;border-radius:0 0 8px 8px;margin-bottom:6px}
.sc-layer-detail.open{display:block}
.sc-quiz-q{padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:8px;border-bottom:1px solid #4a45a0;background:#2a2660;transition:background .15s}
.sc-quiz-q:hover{background:#332f75}
.sc-quiz-a{display:none;padding:14px 16px;font-size:14px;line-height:1.6;color:#e8e4ff;background:#1a1840;border-bottom:1px solid #4a45a0}
.sc-quiz-a.open{display:block}
.sc-chevron{transition:transform .2s;flex-shrink:0}
</style>

<div id="sc-root" style="background:#13122e;border-radius:16px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">

  <div style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap" id="sc-nav">
    <button class="sc-tab active" data-tab="sc-threats">Threats</button>
    <button class="sc-tab" data-tab="sc-defense">Defense layers</button>
    <button class="sc-tab" data-tab="sc-encryption">Encryption</button>
    <button class="sc-tab" data-tab="sc-quiz">Knowledge check</button>
  </div>

  <!-- THREATS -->
  <div id="sc-threats" class="sc-section active">
    <p class="sc-label">IOC-2.C — how attackers get in</p>
    <div id="sc-threat-list"></div>
  </div>

  <!-- DEFENSE -->
  <div id="sc-defense" class="sc-section">
    <p class="sc-label">IOC-2.B — defense in depth</p>
    <p style="font-size:14px;color:#e8e4ff;margin-bottom:16px;line-height:1.6">Good security is layered — if one fails, the next holds. Click each layer to expand.</p>
    <div id="sc-layer-list"></div>
  </div>

  <!-- ENCRYPTION -->
  <div id="sc-encryption" class="sc-section">
    <p class="sc-label">IOC-2.B.5 — encryption types</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px">

      <div style="background:#2a2660;border:1px solid #4a45a0;border-radius:12px;padding:16px 20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:32px;height:32px;border-radius:8px;background:#332f75;display:flex;align-items:center;justify-content:center;font-size:16px">🔐</div>
          <span style="font-weight:600;font-size:15px;color:#ffffff">Symmetric</span>
          <span class="sc-pill" style="background:#332f75;color:#e8e4ff;margin-left:auto">1 key</span>
        </div>
        <p style="font-size:13px;color:#e8e4ff;line-height:1.6;margin-bottom:12px">One shared key handles both encryption and decryption. Fast and efficient, but both parties must securely share the key beforehand.</p>
        <div style="display:flex;align-items:center;gap:6px;font-size:12px;flex-wrap:wrap">
          <span style="background:#332f75;border-radius:4px;padding:2px 8px;color:#e8e4ff">Sender</span>
          <span style="color:#c4bbf0">— key →</span>
          <span style="background:#332f75;border-radius:4px;padding:2px 8px;color:#e8e4ff">encrypt</span>
          <span style="color:#c4bbf0">— key →</span>
          <span style="background:#332f75;border-radius:4px;padding:2px 8px;color:#e8e4ff">decrypt</span>
        </div>
      </div>

      <div style="background:#2a2660;border:2px solid #a09af0;border-radius:12px;padding:16px 20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:32px;height:32px;border-radius:8px;background:#332f75;display:flex;align-items:center;justify-content:center;font-size:16px">🔑</div>
          <span style="font-weight:600;font-size:15px;color:#ffffff">Public key</span>
          <span class="sc-pill" style="background:#332f75;color:#e8e4ff;margin-left:auto">2 keys</span>
        </div>
        <p style="font-size:13px;color:#e8e4ff;line-height:1.6;margin-bottom:12px">A public key encrypts, a private key decrypts. Anyone can encrypt a message for you — only you can read it with your private key.</p>
        <div style="display:flex;align-items:center;gap:6px;font-size:12px;flex-wrap:wrap">
          <span style="background:#332f75;border-radius:4px;padding:2px 8px;color:#e8e4ff">public key</span>
          <span style="color:#c4bbf0">→ encrypt</span>
          <span style="color:#c4bbf0;margin:0 2px">·</span>
          <span style="background:#332f75;border-radius:4px;padding:2px 8px;color:#e8e4ff">private key</span>
          <span style="color:#c4bbf0">→ decrypt</span>
        </div>
      </div>

    </div>
    <div style="background:#2a2660;border-left:3px solid #a09af0;padding:14px 18px;border-radius:4px">
      <p style="font-weight:600;font-size:14px;color:#ffffff;margin-bottom:6px">Certificate authorities (CAs)</p>
      <p style="font-size:13px;color:#e8e4ff;line-height:1.6">CAs issue digital certificates that prove a public key genuinely belongs to who claims to own it. This trust model is what makes HTTPS work — your browser checks the certificate before trusting the connection.</p>
    </div>
  </div>

  <!-- QUIZ -->
  <div id="sc-quiz" class="sc-section">
    <p class="sc-label">5 questions — click to reveal</p>
    <div id="sc-quiz-list" style="border:1px solid #4a45a0;border-radius:12px;overflow:hidden"></div>
    <div id="sc-score-bar" style="display:none;margin-top:16px;padding:14px 16px;background:#2a2660;border-radius:8px;font-size:14px;color:#e8e4ff;border:1px solid #4a45a0"></div>
  </div>

</div>

<script>
(function(){
  var threats=[
    {icon:"🎣",name:"Phishing",tag:"Credential theft",tagBg:"#4a1a1a",tagColor:"#ffb3b3",what:"Fake emails or sites impersonating trusted sources to harvest your login credentials or PII.",example:"An email from 'your bank' leads to a pixel-perfect fake login page. You enter your password — and the attacker has it.",tip:"Always inspect the actual URL in the address bar, not just the display text of a hyperlink."},
    {icon:"⌨️",name:"Keylogging",tag:"Surveillance",tagBg:"#3d2800",tagColor:"#ffd494",what:"Malware that silently records every keystroke to capture passwords and sensitive messages.",example:"A free pirated app bundles a keylogger that streams every password you type to an attacker's server.",tip:"Only install software from official, trusted sources. Run regular antivirus scans."},
    {icon:"📶",name:"Rogue access point",tag:"Network intercept",tagBg:"#0d3322",tagColor:"#6de8bc",what:"A fake Wi-Fi hotspot set up by an attacker to intercept and read traffic passing through it.",example:"'Free_Airport_WiFi' is run by an attacker capturing every unencrypted request you send.",tip:"Use a VPN on public Wi-Fi. Verify hotspot names with staff before connecting."},
    {icon:"🔗",name:"Malicious links",tag:"Drive-by install",tagBg:"#3d2800",tagColor:"#ffd494",what:"Links or files that install malware, redirect to phishing pages, or exploit browser bugs when clicked.",example:"A hacked friend's account DMs you a 'Google Doc' link that silently installs spyware.",tip:"Hover over links to preview their real destination URL before clicking."},
    {icon:"🦠",name:"Malware & viruses",tag:"System compromise",tagBg:"#4a1a1a",tagColor:"#ffb3b3",what:"Software that damages systems or grants attackers control. Viruses self-replicate by attaching to legitimate programs.",example:"A virus bundled in a software installer copies itself to every USB drive plugged into the infected machine.",tip:"Keep your OS and all apps updated — most attacks exploit already-patched vulnerabilities."}
  ];

  var layers=[
    {icon:"🔑",label:"Layer 1 — Strong passwords",detail:"Easy for you to recall, hard for others to guess. Avoid birthdays or dictionary words. A passphrase like 'correct-horse-battery-staple' beats 'P@ssw0rd' every time. Use a password manager."},
    {icon:"📱",label:"Layer 2 — Multi-factor auth (MFA)",detail:"Combines something you know (password), something you have (phone/token), and/or something you are (biometric). Even a leaked password can't unlock your account without the second factor."},
    {icon:"🔒",label:"Layer 3 — Encryption",detail:"Scrambles data in transit and at rest so unauthorized parties can't read it. Symmetric uses one shared key; public key encryption uses a key pair — public to encrypt, private to decrypt."},
    {icon:"⬆️",label:"Layer 4 — Software updates",detail:"Most successful attacks exploit known vulnerabilities that already have patches available. Enabling automatic updates closes those doors before attackers walk through them."},
    {icon:"🛡️",label:"Layer 5 — Antivirus & permissions",detail:"Antivirus scans for known malware signatures and quarantines threats. Review app permissions regularly — does your flashlight app really need access to your contacts and microphone?"}
  ];

  var questions=[
    {q:"An email asks you to click a link and verify your bank account. What attack type is this?",a:"Phishing — the attacker impersonates a trusted institution to trick you into entering credentials on a fake site."},
    {q:"What is the difference between a virus and malware?",a:"Malware is the broad category — any software that damages or takes control of a system. A virus is a specific kind that self-replicates by attaching to legitimate programs."},
    {q:"You log in with a password and a code sent to your phone. What is this called?",a:"Multi-factor authentication (MFA) — combining something you know (password) with something you have (your phone)."},
    {q:"Why is connecting to free public Wi-Fi risky?",a:"Attackers can set up rogue access points. Data sent through them can be intercepted, read, and modified — especially without a VPN or HTTPS."},
    {q:"In public key encryption, what does the sender use to encrypt a message?",a:"The receiver's public key. Only the receiver's matching private key can decrypt it, so the message is secure even if the public key is widely shared."}
  ];

  var tl=document.getElementById('sc-threat-list');
  threats.forEach(function(t){
    var wrap=document.createElement('div');
    var btn=document.createElement('button');
    btn.className='sc-threat-btn';
    btn.innerHTML='<span style="font-size:18px">'+t.icon+'</span>'
      +'<span style="font-weight:500;font-size:14px;color:#ffffff;flex:1">'+t.name+'</span>'
      +'<span class="sc-pill" style="background:'+t.tagBg+';color:'+t.tagColor+'">'+t.tag+'</span>'
      +'<svg class="sc-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="#c4bbf0" stroke-width="1.5" stroke-linecap="round"/></svg>';
    var body=document.createElement('div');
    body.className='sc-threat-body';
    body.innerHTML='<p style="font-size:13px;color:#e8e4ff;line-height:1.6;margin-bottom:12px">'+t.what+'</p>'
      +'<div style="background:#2a2660;border:1px solid #4a45a0;border-radius:8px;padding:10px 14px;margin-bottom:12px">'
      +'<p style="font-size:11px;font-weight:600;color:#c4bbf0;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px">Example</p>'
      +'<p style="font-size:13px;color:#e8e4ff;line-height:1.5">'+t.example+'</p></div>'
      +'<p style="font-size:13px;color:#e8e4ff;line-height:1.5"><span style="font-weight:600;color:#a09af0">💡 Tip:</span> '+t.tip+'</p>';
    btn.addEventListener('click',function(){
      var isOpen=body.classList.contains('open');
      document.querySelectorAll('.sc-threat-body.open').forEach(function(b){b.classList.remove('open')});
      document.querySelectorAll('.sc-threat-btn.active').forEach(function(b){b.classList.remove('active');b.querySelector('.sc-chevron').style.transform='rotate(0deg)'});
      if(!isOpen){body.classList.add('open');btn.classList.add('active');btn.querySelector('.sc-chevron').style.transform='rotate(180deg)'}
    });
    wrap.appendChild(btn);wrap.appendChild(body);tl.appendChild(wrap);
  });

  var ll=document.getElementById('sc-layer-list');
  layers.forEach(function(l){
    var row=document.createElement('div');
    row.className='sc-layer-row';
    row.innerHTML='<div style="width:28px;height:28px;border-radius:50%;background:#332f75;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">'+l.icon+'</div>'
      +'<span style="font-weight:500;font-size:14px;color:#ffffff;flex:1">'+l.label+'</span>'
      +'<svg class="sc-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="#c4bbf0" stroke-width="1.5" stroke-linecap="round"/></svg>';
    var detail=document.createElement('div');
    detail.className='sc-layer-detail';
    detail.textContent=l.detail;
    row.addEventListener('click',function(){
      var isOpen=detail.classList.contains('open');
      document.querySelectorAll('.sc-layer-detail.open').forEach(function(d){d.classList.remove('open')});
      document.querySelectorAll('.sc-layer-row.active').forEach(function(r){r.classList.remove('active');r.querySelector('.sc-chevron').style.transform='rotate(0deg)'});
      if(!isOpen){detail.classList.add('open');row.classList.add('active');row.querySelector('.sc-chevron').style.transform='rotate(180deg)'}
    });
    ll.appendChild(row);ll.appendChild(detail);
  });

  var revealed=0;
  var ql=document.getElementById('sc-quiz-list');
  questions.forEach(function(q,i){
    var qDiv=document.createElement('div');
    qDiv.className='sc-quiz-q';
    qDiv.innerHTML='<span style="font-size:14px;color:#ffffff;line-height:1.5">Q'+(i+1)+': '+q.q+'</span>'
      +'<span style="font-size:12px;color:#c4bbf0;white-space:nowrap;flex-shrink:0">Reveal</span>';
    var aDiv=document.createElement('div');
    aDiv.className='sc-quiz-a';
    aDiv.innerHTML='<span style="font-weight:600;color:#a09af0">Answer:</span> '+q.a;
    var open=false;
    qDiv.addEventListener('click',function(){
      open=!open;
      aDiv.classList.toggle('open',open);
      qDiv.querySelector('span:last-child').textContent=open?'Hide':'Reveal';
      if(open){revealed++;if(revealed===questions.length){
        var sb=document.getElementById('sc-score-bar');
        sb.style.display='block';
        sb.innerHTML='<span style="font-weight:600;color:#ffffff">All done!</span> Great work reviewing 5.6.';
      }}
    });
    ql.appendChild(qDiv);ql.appendChild(aDiv);
  });

  document.getElementById('sc-nav').addEventListener('click',function(e){
    var tab=e.target.closest('.sc-tab');
    if(!tab)return;
    document.querySelectorAll('.sc-tab').forEach(function(t){t.classList.remove('active')});
    document.querySelectorAll('.sc-section').forEach(function(s){s.classList.remove('active')});
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
})();
</script>

---

### Key Vocabulary

| Term | Definition |
|------|-----------|
| **Phishing** | Tricking users into revealing credentials via fake emails or sites |
| **Keylogging** | Recording keystrokes to capture passwords and sensitive info |
| **Rogue access point** | Fake Wi-Fi hotspot used to intercept network traffic |
| **Malware** | Software designed to damage systems or gain unauthorized control |
| **Virus** | Self-replicating malware that attaches to legitimate programs |
| **MFA** | Login method requiring two or more verification factors |
| **Symmetric encryption** | One shared key for both encrypting and decrypting |
| **Public key encryption** | Key pair — public key encrypts, private key decrypts |
| **Certificate authority** | Trusted org that validates ownership of encryption keys |

> **Remember:** Security isn't about being paranoid — it's about being intentional. Small habits (strong passwords, checking URLs, keeping software updated) dramatically reduce your risk.