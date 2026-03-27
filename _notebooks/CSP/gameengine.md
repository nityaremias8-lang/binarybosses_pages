---
layout: base
title: NetQuest - OSI & Deployment Adventure
description: An interactive game teaching the OSI model and nginx/Flask deployment concepts through exploration and NPC dialogue.
type: games
courses: { csp: {week: 1} }
permalink: /gamify/osi-deployment/
---

<div id="gameContainer"></div>

<script type="module">
// GAME_RUNNER: Networking overview of the OSI model, including sharing key deployment concepts. | hide_edit: true

// Import for GameRunner
import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
// Level Code
import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import NPC from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import AiNpc from '/assets/js/GameEnginev1.1/essentials/AiNpc.js';

class OSIDeploymentLevel {
  constructor(gameEnv) {
    const path = gameEnv.path;
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;

    // -------------------------------------------------------
    // BACKGROUND — OSI model diagram
    // -------------------------------------------------------
    const bgData = {
      name: 'osi_bg',
      src: path + "/images/gamify/comics/network-stack/7-layers-of-osi-model.png",
    };

    // -------------------------------------------------------
    // PLAYER
    // -------------------------------------------------------
    const playerData = {
      id: 'Hero',
      src: path + "/images/gamify/chillguy.png",
      SCALE_FACTOR: 5,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height * .15 },
      pixels: { height: 512, width: 384 },
      orientation: { rows: 4, columns: 3 },
      down:      { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
      downLeft:  { row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
      right:     { row: 1, start: 0, columns: 3 },
      left:      { row: 2, start: 0, columns: 3 },
      up:        { row: 3, start: 0, columns: 3 },
      upRight:   { row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
      upLeft:    { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // -------------------------------------------------------
    // OSI LAYER NPCs — invisible hitbox sentinels spread across
    // the background image, one per layer column
    // -------------------------------------------------------

    // Layer 7 — Application
    const npcApplication = {
      id: 'Application Layer',
      greeting: 'Layer 7 — Application: This is where user-facing protocols live: HTTP, HTTPS, DNS, WebSocket, SMTP.\n\nIn your nginx config, the browser sends an HTTP request to flask.opencodingsociety.com. Nginx receives it at Layer 7 and proxies it to Flask on localhost:8587. CORS headers like Access-Control-Allow-Origin are also a Layer 7 concern!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .06, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 7: Application — where HTTP, HTTPS, DNS, and WebSocket live.",
        "Your nginx config handles two Layer 7 protocols: HTTP (location /) and WebSocket (location /socket.io/).",
        "CORS is a Layer 7 security feature. Nginx checks the Origin header and only allows requests from opencodingsociety.com subdomains or open-coding-society.github.io.",
        "The WebSocket upgrade is also Layer 7: the browser sends 'Upgrade: websocket', nginx passes it along with proxy_set_header Upgrade $http_upgrade, and the connection switches from HTTP to WebSocket — enabling real-time bidirectional comms!"
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 6 — Presentation
    const npcPresentation = {
      id: 'Presentation Layer',
      greeting: 'Layer 6 — Presentation: Responsible for data translation, encryption, and compression.\n\nThis is where TLS/SSL lives. When your nginx config uses certbot/Let\'s Encrypt, it\'s operating at Layer 6. Nginx terminates HTTPS here — Flask only ever sees plain HTTP internally on localhost:8587.',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .20, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 6: Presentation — encryption, compression, and data format translation.",
        "TLS (HTTPS) lives here. Your nginx server terminates TLS so Flask doesn't have to deal with it.",
        "The TLS handshake: browser sends supported ciphers → server sends certificate → browser verifies with CA → both derive shared keys → encrypted tunnel established!",
        "Nginx handles the decryption at Layer 6, then passes plaintext HTTP to Flask on localhost:8587. This is a major security and simplicity win for your backend."
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 5 — Session
    const npcSession = {
      id: 'Session Layer',
      greeting: 'Layer 5 — Session: Manages ongoing sessions between applications — establishing, maintaining, and terminating connections.\n\nIn your nginx config, the line:\n  add_header "Access-Control-Allow-Credentials" "true"\n...allows cookies and auth tokens to be sent cross-origin. This is what keeps a user logged in as they move between pages.opencodingsociety.com and flask.opencodingsociety.com!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .34, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 5: Session — establishing, maintaining, and terminating application connections.",
        "HTTP is stateless by default. Sessions add statefulness using cookies or JWT tokens.",
        "Your nginx config sets Access-Control-Allow-Credentials: true — this tells the browser it's OK to include cookies in cross-origin requests to flask.opencodingsociety.com.",
        "Without this header, a student logged into pages.opencodingsociety.com couldn't stay authenticated when calling the Flask API — their session cookie would be blocked!"
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 4 — Transport
    const npcTransport = {
      id: 'Transport Layer',
      greeting: 'Layer 4 — Transport: Provides end-to-end communication using port numbers and TCP/UDP.\n\nYour nginx server listens on port 80 and 443 (standard HTTP/HTTPS). It then forwards traffic to localhost:8587 (Flask) or localhost:8500 (Socket.IO). Without nginx, users would need to type flask.opencodingsociety.com:8587 — ugly! Nginx makes port mapping transparent.',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .48, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 4: Transport — TCP/UDP, port numbers, reliable delivery.",
        "Ports identify which application receives the data. Port 443 = HTTPS (nginx). Port 8587 = Flask. Port 8500 = Socket.IO.",
        "TCP is used for HTTP/HTTPS — it guarantees ordered, reliable delivery with error checking. The 3-way handshake (SYN → SYN-ACK → ACK) happens here.",
        "WebSockets also use TCP at Layer 4, but once upgraded they maintain a persistent connection — no repeated handshakes needed for each message!"
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 3 — Network
    const npcNetwork = {
      id: 'Network Layer',
      greeting: 'Layer 3 — Network: Handles IP addressing and routing packets across networks.\n\nWhen a student visits flask.opencodingsociety.com, DNS resolves it to 3.233.212.71. The student\'s IP (24.18.xxx.xxx) is the source; the server IP is the destination. Routers at Layer 3 find the best path across the internet to connect them.',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .62, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 3: Network — IP addresses, routing, and path selection across networks.",
        "DNS translates flask.opencodingsociety.com → 3.233.212.71. This happens before any TCP connection is made.",
        "Your nginx config uses proxy_set_header X-Real-IP $remote_addr to preserve the student's real IP. Without this, Flask would only see 127.0.0.1 (nginx itself) as the source!",
        "IP packets are routed hop-by-hop across the internet. Each router reads the destination IP and forwards the packet closer to 3.233.212.71 (your AWS server)."
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 2 — Data Link
    const npcDataLink = {
      id: 'Data Link Layer',
      greeting: 'Layer 2 — Data Link: Handles node-to-node transfer using MAC addresses and Ethernet frames.\n\nAs your HTTP request hops between routers on the way to 3.233.212.71, each hop wraps the IP packet in a new Ethernet frame with new source/destination MAC addresses. The IP packet stays the same — only the frame changes per hop!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .76, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 2: Data Link — MAC addresses, Ethernet frames, error detection between adjacent nodes.",
        "MAC addresses are hardware IDs burned into your network card. Every device has a unique one like A4:C3:F0:85:7A:2B.",
        "Each network hop re-wraps the IP packet in a fresh Ethernet frame. The frame's MAC addresses change each hop; the IP packet inside stays the same the whole way.",
        "Layer 2 also handles error detection using CRC checksums — if a frame is corrupted in transit, it's caught and retransmitted here before it reaches Layer 3."
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // Layer 1 — Physical
    const npcPhysical = {
      id: 'Physical Layer',
      greeting: 'Layer 1 — Physical: The raw transmission of bits over physical media — electrical signals, light pulses, radio waves.\n\nEvery request to your Flask server ultimately starts here: as electrical signals on a student\'s ethernet cable or radio waves from their WiFi router, all the way to AWS\'s physical fiber network connecting to the server at 3.233.212.71.',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .90, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      dialogues: [
        "Layer 1: Physical — electrical signals, fiber optics, radio waves. Raw bits moving across physical media.",
        "Common physical media: Cat5/Cat6 ethernet cables, fiber optic cables (light pulses), WiFi (radio frequencies at 2.4GHz or 5GHz).",
        "Your AWS server at 3.233.212.71 is connected to the internet via high-speed fiber — that's Layer 1 carrying all the upper-layer data.",
        "Layer 1 doesn't care what the bits mean — it just moves 0s and 1s. All the meaning (frames, packets, segments, HTTP) is added by the layers above!"
      ],
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    // -------------------------------------------------------
    // NGINX WIZARD — AI-powered NPC for open-ended Q&A
    // -------------------------------------------------------
    const npcWizard = {
      id: "Network Wizard",
      greeting: "Hello! I'm an expert in networking, the OSI model, and deployment with nginx and Flask. Ask me anything!",
      src: path + "/images/gamify/wizard.png",
      SCALE_FACTOR: 7,
      ANIMATION_RATE: 10,
      pixels: { height: 185, width: 163 },
      INIT_POSITION: { x: width * 0.47, y: height * 0 },
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
      expertise: "default",
      chatHistory: [],
      dialogues: [
        "Ask me: which OSI layer does CORS live on?",
        "Test me: what happens during a TLS handshake?",
        "Try this: why does nginx use proxy_set_header X-Real-IP?",
        "Quiz me: what's the difference between TCP and UDP?",
        "Ask me: how does the WebSocket upgrade handshake work?",
        "Try: why does Flask only listen on localhost in a production deployment?",
        "Ask me: what does the OPTIONS preflight request do in CORS?"
      ],
      knowledgeBase: {
        default: [
          {
            question: "What is a reverse proxy?",
            answer: "A reverse proxy like nginx sits between the internet and your backend app. It receives requests on standard ports (80/443) and forwards them to internal ports like 8587. Benefits: SSL termination, security (Flask never exposed to internet), port mapping, caching, and load balancing."
          },
          {
            question: "What is CORS and which OSI layer is it on?",
            answer: "CORS (Cross-Origin Resource Sharing) is a Layer 7 (Application) security mechanism. Browsers enforce it to prevent unauthorized cross-origin requests. Nginx implements CORS by checking the Origin header and adding Access-Control-Allow-Origin headers to responses."
          },
          {
            question: "How does the OSI model relate to a web request?",
            answer: "A web request travels DOWN the OSI layers on the client (L7 HTTP → L6 TLS → L5 Session → L4 TCP → L3 IP → L2 Ethernet → L1 Physical signals), crosses the internet, then travels UP the layers on the server. Nginx processes at L7, TLS at L6, TCP ports at L4, IP routing at L3."
          },
          {
            question: "What is the WebSocket upgrade?",
            answer: "WebSocket starts as an HTTP request with 'Upgrade: websocket' header. The server responds '101 Switching Protocols'. The same TCP connection is then used for persistent bidirectional communication. Nginx's /socket.io/ block passes the Upgrade and Connection headers to enable this."
          },
          {
            question: "What is proxy_set_header and why use it?",
            answer: "proxy_set_header tells nginx to forward specific HTTP headers to the backend. Without it, Flask would see Host as 'localhost:8587' instead of 'flask.opencodingsociety.com', and the client IP would appear as 127.0.0.1 instead of the real student IP. It preserves request context through the proxy."
          },
          {
            question: "What is a CORS preflight?",
            answer: "Before sending a cross-origin request with custom headers or methods, browsers send an OPTIONS preflight request. Nginx checks if the origin is whitelisted and responds with 204 and CORS headers. If approved, the browser sends the real request. This blocks unauthorized origins before they ever reach Flask."
          },
          {
            question: "Why does Flask run on localhost only?",
            answer: "In production, Flask listens on localhost:8587 so it's never directly accessible from the internet. All external traffic must go through nginx, which handles SSL, CORS, rate limiting, and security. This is a core security principle: nginx is your hardened public face; Flask is your protected backend."
          }
        ]
      },
      reaction: function() {
        if (this.dialogueSystem) { this.showReactionDialogue(); }
      },
      interact: function() {
        AiNpc.showInteraction(this);
      }
    };

    // -------------------------------------------------------
    // CLASSES LIST — order matters for draw layering
    // -------------------------------------------------------
    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player,            data: playerData },
      { class: NPC,               data: npcApplication },
      { class: NPC,               data: npcPresentation },
      { class: NPC,               data: npcSession },
      { class: NPC,               data: npcTransport },
      { class: NPC,               data: npcNetwork },
      { class: NPC,               data: npcDataLink },
      { class: NPC,               data: npcPhysical },
      { class: NPC,               data: npcWizard },
    ];
  }
}

export const gameLevelClasses = [OSIDeploymentLevel];
export { GameControl };
</script>