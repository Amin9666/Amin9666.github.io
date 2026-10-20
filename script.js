const PROFILE = {
  name: "Amin Weinman",
  title: "Software Engineer · AI Researcher",
  tagline: "CS + Math @ New Mexico Tech ('27). I build fast distributed systems, guarded AI agents, and the occasional sports model.",
  greeting: "Hey there!",
  emote: "assets/emotes/fingerheart.webp",
  level: 13,
  xp: [7240, 10000],
  trophies: 6420,
  arena: "Arena 13 · Agentic AI Arena",
  location: "New Mexico",
  gold: 1840,
  gems: 420,
  email: "aminweinman@gmail.com",
};

const DECK = [
  { id: "py", name: "Python", icon: "🐍", cost: 3, rarity: "legendary", art: "icewizard", level: 14, type: "Troop", desc: "Main win condition. Powers the research pipelines, the agents and the backend algorithms.", stats: { "Used at": "Sandia · Metrical · DREU", Damage: "10x throughput", Range: "ML to backend", Targets: "Everything" } },
  { id: "ml", name: "Machine Learning", icon: "🧠", cost: 5, rarity: "champion", art: "electrowizard", level: 14, type: "Champion", desc: "Ability: feature engineering. Took promo-response targeting +0.135 AUC and benchmarked five model families on 8,974 acoustic-emission events.", stats: { Toolkit: "scikit-learn · TF", Damage: "+0.135 AUC", Models: "LR · SVR · RF · GB", Targets: "Signal" } },
  { id: "safety", name: "AI Safety", icon: "🛡️", cost: 4, rarity: "legendary", art: "valkyrie", level: 13, type: "Building", desc: "A 5-guardrail stack that took prompt-injection success from 100% to 0% across 480 adversarial test cases.", stats: { Guardrails: "5", "Injection Rate": "100% → 0%", Compliance: "22% → 100%", Targets: "Bad prompts" } },
  { id: "dist", name: "Distributed Systems", icon: "🛰️", cost: 6, rarity: "epic", art: "electrogiant", level: 12, type: "Building", desc: "Messaging systems and modular architectures that hold up at enterprise scale.", stats: { Reliability: "+40%", Latency: "−35%", Speed: "Sub-50ms", Targets: "Enterprise" } },
  { id: "js", name: "JavaScript", icon: "⚡", cost: 2, rarity: "common", art: "ronin", level: 13, type: "Spell", desc: "Fast cycle card for web interfaces and client-side harnesses.", stats: { "Used in": "Client Harness", Damage: "Full-stack", Speed: "Very Fast", Targets: "Browsers" } },
  { id: "react", name: "React", icon: "⚛️", cost: 4, rarity: "epic", art: "elitebarbs", level: 12, type: "Troop", desc: "Led a jQuery → React/Vite migration simulating a full purchase funnel.", stats: { Build: "Vite SPA", Funnel: "Browse → Confirm", Envs: "Dev · Stage · Prod", Targets: "UIs" } },
  { id: "pg", name: "PostgreSQL", icon: "🐘", cost: 5, rarity: "legendary", art: "tombstone", level: 12, type: "Building", desc: "Heavy, durable storage that never forgets a row.", stats: { Partner: "SQL", Hitpoints: "Massive", Lifetime: "Forever", Targets: "Queries" } },
  { id: "c", name: "C", icon: "🔧", cost: 2, rarity: "common", art: "bandit", level: 12, type: "Troop", desc: "Close to the metal. Pairs with computer architecture for raw throughput.", stats: { Course: "Comp. Architecture", Damage: "Raw", Speed: "Blazing", Targets: "Memory" } },
];

const COLLECTION = [
  { id: "sql", name: "SQL", icon: "🗄️", cost: 2, rarity: "common", art: "bats", level: 13, type: "Spell", desc: "Asks the database exactly the right question.", stats: { Pairs: "PostgreSQL", Damage: "Joins", Speed: "Fast", Targets: "Tables" } },
  { id: "flask", name: "Flask", icon: "🧪", cost: 3, rarity: "rare", art: "barbhut", level: 12, type: "Troop", desc: "Lightweight Python web framework for APIs.", stats: { Builds: "REST APIs", Weight: "Light", Speed: "Fast", Targets: "Endpoints" } },
  { id: "docker", name: "Docker", icon: "🐳", cost: 5, rarity: "epic", art: "goblindrill", level: 11, type: "Spell", desc: "Packs the whole army into a container and drops it anywhere.", stats: { Radius: "Any cloud", Repro: "100%", Speed: "Medium", Targets: "Deploys" } },
  { id: "git", name: "Git", icon: "🌿", cost: 1, rarity: "legendary", art: "berserker", level: 14, type: "Spell", desc: "Rewinds time. Also runs GitHub Actions pipelines that keep charts current on every push.", stats: { CI: "GitHub Actions", Branches: "Many", Speed: "Instant", Targets: "History" } },
  { id: "tf", name: "TensorFlow", icon: "🔶", cost: 6, rarity: "epic", art: "giantbomber", level: 11, type: "Troop", desc: "Heavy-hitting deep learning framework.", stats: { Type: "Deep learning", Damage: "High", Speed: "GPU-bound", Targets: "Tensors" } },
  { id: "pandas", name: "pandas + seaborn", icon: "🐼", cost: 2, rarity: "epic", art: "babydragon", level: 13, type: "Spell", desc: "Built a bias-metric visualization pipeline for AI-generated summaries.", stats: { Charts: "Bias metrics", Damage: "Insight", Speed: "Fast", Targets: "DataFrames" } },
  { id: "symreg", name: "Symbolic Regression", icon: "∑", cost: 5, rarity: "epic", art: "dartgoblin", level: 11, type: "Spell", desc: "Derived an interpretable 25-term formula from 45 physics-motivated features via LassoCV.", stats: { Features: "45 → 25 terms", "Hold-out R²": "0.0632", "10-fold R²": "0.0412", Targets: "Fault slip" } },
  { id: "qiskit", name: "Qiskit", icon: "⚛", cost: 7, rarity: "legendary", art: "balloon", level: 10, type: "Spell", desc: "Quantum Amplitude Estimation on a real model probability, a quadratic speedup over classical Monte Carlo.", stats: { Algorithm: "QAE", Speedup: "Quadratic", Speed: "Quantum", Targets: "Probabilities" } },
];

const PROJECTS = [
  { name: "Guarded Agentic Triage", icon: "🛰️", art: "darkprince", featured: true, desc: "A tool-using LLM agent that triages anomalies in 142K+ rows of satellite telemetry, behind a 5-guardrail stack. Presented through CRA at IEEE Quantum Week 2026.", tags: ["Python", "LLM Agents", "AI Safety"], url: "", label: "IEEE Quantum Week 2026" },
  { name: "xPTS Shot Quality", icon: "🏀", desc: "NBA expected-points model from shot distance, angle, clock and pressure, with auto-updating shot charts.", tags: ["Python", "ML", "GH Actions"], url: "https://github.com/Amin9666" },
  { name: "Premier League Predictor", icon: "⚽", desc: "Dixon-Coles + Monte Carlo, backtested against closing odds, with a Qiskit QAE experiment.", tags: ["Python", "Stats", "Qiskit"], url: "https://github.com/Amin9666" },
  { name: "Mars Rover Nitinol Motor", icon: "🔴", desc: "NASA MINDS shape-memory-alloy motor. Peer-reviewed paper at AIAA Aviation 2024.", tags: ["Research", "NASA"], url: "https://doi.org/10.2514/6.2024-4888" },
  { name: "Client Library Harness", icon: "🛒", desc: "React/Vite SPA simulating a full e-commerce purchase funnel to test tracking and offers.", tags: ["React", "Vite"], url: "", label: "Internal" },
  { name: "AI Bias in Summaries", icon: "⚖️", desc: "Biased vs. balanced GPT-2 summaries of Afghan War articles. Poster SRS 2025-102.", tags: ["GPT-2", "pandas"], url: "", label: "Poster" },
  { name: "Fault Slip Physics + AI", icon: "🌋", desc: "Predicting lab-fault shear stress from 8,974 acoustic-emission events with symbolic regression.", tags: ["ML", "Physics"], url: "", label: "Research" },
];

const CHESTS = [
  { name: "Holiday Chest", type: "wooden", gold: 120, fact: { icon: "⚽", title: "Football Brain", text: "Built a Premier League predictor and validated it against closing betting-market odds across three seasons." } },
  { name: "Fire & Ice Chest", type: "silver", gold: 250, fact: { icon: "🏀", title: "Hoops Nerd", text: "Made an NBA expected-points model (xPTS) that rates every shot by distance, angle, clock and pressure." } },
  { name: "Valentine Chest", type: "golden", gold: 600, fact: { icon: "🔴", title: "Mars Mission", text: "Helped design a nitinol shape-memory-alloy motor to power Mars rovers. It's a published AIAA paper." } },
  { name: "Celebration Chest", type: "magical", gold: 1500, fact: { icon: "🛡️", title: "100% → 0%", text: "Designed a guardrail ablation study that cut prompt-injection success from 100% to 0%." } },
];

const ROAD = [
  { trophies: 800, arena: "Arena 2 · Red Planet Lab", year: "2023 – 2024", title: "Undergraduate Researcher", org: "NASA MINDS Team · Dr. Hassanalian", desc: "Built and tested a nitinol shape-memory-alloy motor for Mars rover power. Co-authored a peer-reviewed paper at AIAA Aviation & ASCEND 2024." },
  { trophies: 2000, arena: "Arena 5 · Sandia Stronghold", year: "May 2024 – May 2025", title: "Software Engineer Intern", org: "Sandia National Labs · Albuquerque", desc: "High-performance messaging in distributed cloud infrastructure (−35% latency), Python algorithms with 10x throughput, and LLM API integrations for 5+ teams." },
  { trophies: 3000, arena: "Arena 7 · Bias Bastion", year: "Spring 2025", title: "Undergraduate Researcher", org: "New Mexico Tech · Dr. Ramyaa", desc: "Studied bias in AI summarization with biased vs. balanced GPT-2 models. Presented poster SRS 2025-102." },
  { trophies: 4200, arena: "Arena 9 · Bay Area Bridge", year: "June 2025 – May 2026", title: "Software Engineer Intern", org: "Metrical.al · San Francisco", desc: "Distributed systems with +40% reliability, a CLI / REST / web stack at sub-50ms, and a promo-response model worth +0.135 AUC." },
  { trophies: 5200, arena: "Arena 11 · Fault Line Fortress", year: "Fall 2025 – Spring 2026", title: "Undergraduate Researcher", org: "New Mexico Tech · Dr. Moradian", desc: "Predicted lab-fault shear stress from 8,974 acoustic-emission events and derived an interpretable 25-term formula with symbolic regression." },
  { trophies: 6200, arena: "Arena 13 · Agentic AI Arena", year: "May 2026 – Aug 2026", title: "Researcher, DREU in Agentic AI", org: "Daytona Beach, FL", desc: "Guarded LLM agent for spacecraft telemetry triage: 8 configs × 480 adversarial cases, and caught an AUC bug (0.98 → 0.73). Presented at IEEE Quantum Week 2026." },
  { trophies: 7000, arena: "Arena 14 · Graduation Gate", year: "May 2027", title: "BS Computer Science", org: "New Mexico Tech · Minor in Mathematics", desc: "GPA 3.5. Coursework in data structures, computer architecture, machine learning and statistics." },
  { trophies: 7500, arena: "Arena 15 · ???", year: "Next", title: "Your team?", org: "", desc: "Looking for what's next after graduation. Hit Battle on the home screen to say hi." },
];

const CLAN = {
  name: "Weinman Labs",
  tag: "#NMT27",
  desc: "A one-person clan building reliable systems and safe AI. Open to research collabs, internships and new-grad roles.",
  stats: [["School", "New Mexico Tech"], ["Degree", "BS CS + Math minor"], ["GPA", "3.5 / 4.0"], ["Graduation", "May 2027"]],
  chat: [
    { time: "2h", text: "Welcome to the clan! 👋 I'm Amin, a CS student at New Mexico Tech minoring in math." },
    { time: "1h", text: "I've shipped distributed systems at Sandia National Labs and Metrical.al, and built guarded LLM agents for spacecraft telemetry at DREU." },
    { time: "12m", text: "Research-wise: AI safety, ML for physics, and bias in language models. For fun: modeling NBA shots and Premier League matches." },
  ],
};

const LINKS = [
  { name: "GitHub", role: "Leader", icon: "🐙", handle: "@Amin9666", url: "https://github.com/Amin9666" },
  { name: "LinkedIn", role: "Co-leader", icon: "💼", handle: "in/amin-weinman", url: "https://www.linkedin.com/in/amin-weinman" },
  { name: "Email", role: "Elder", icon: "✉️", handle: PROFILE.email, url: `mailto:${PROFILE.email}` },
  { name: "AIAA Paper", role: "Elder", icon: "📄", handle: "10.2514/6.2024-4888", url: "https://doi.org/10.2514/6.2024-4888" },
  { name: "Résumé", role: "Member", icon: "📜", handle: "PDF", url: "resume.pdf" },
];

const TABS = [
  { id: "shop", label: "Projects", icon: "🛒" },
  { id: "deck", label: "Skills", icon: "🃏" },
  { id: "battle", label: "Home", icon: "⚔️" },
  { id: "clan", label: "About", icon: "🛡️" },
  { id: "road", label: "Journey", icon: "🏆" },
];

const LOADING_TIPS = [
  "Tip: Hit Battle on the home screen to get in touch.",
  "Tip: Open the chests for fun facts and upgrade cards.",
  "Tip: Swipe left and right (or use arrow keys) to switch tabs.",
  "Tip: The Trophy Road tab has the full work history.",
  "Tip: Tap the speaker in the top bar for sound effects.",
];

const MAX_LEVEL = 15;
const STAT_ICONS = ["⏳", "💥", "💨", "🎯"];
const CHEST_ART = {
  wooden: ["christmas", "christmas-open"],
  silver: ["fireice", "fireice-open"],
  golden: ["valentine", "valentine-open"],
  magical: ["celebration", "celebration"],
};
const CHEST_LOOT = { wooden: [2, 8, 14], silver: [2, 12, 20], golden: [3, 16, 28], magical: [3, 26, 40] };
const ALL_CARDS = [...DECK, ...COLLECTION];

const $ = (s, r = document) => r.querySelector(s);
const fmt = n => n.toLocaleString("en-US");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const cardsNeeded = lvl => lvl * 4;
const upgradeCost = lvl => lvl * 100;

const state = {
  tab: 2,
  gold: PROFILE.gold,
  gems: PROFILE.gems,
  opened: new Set(),
  levels: Object.fromEntries(ALL_CARDS.map(c => [c.id, c.level])),
  counts: Object.fromEntries(ALL_CARDS.map(c => {
    const seed = [...c.id].reduce((s, ch) => s + ch.charCodeAt(0), 0);
    return [c.id, Math.floor(cardsNeeded(c.level) * (0.3 + (seed % 7) / 10))];
  })),
};

let timers = [];
let lastFocus = null;
let chestQueue = null;
const later = (fn, ms) => timers.push(setTimeout(fn, ms));

function restartAnim(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}
const shake = el => restartAnim(el, "shake");
const bump = el => restartAnim(el, "bump");

function chestImg(type, open = false) {
  return `<img class="chest-img" src="assets/chests/${CHEST_ART[type][open ? 1 : 0]}.webp" alt="" draggable="false">`;
}

function badgeSVG() {
  return `<svg class="clan-badge" viewBox="0 0 64 72" aria-hidden="true">
    <defs><linearGradient id="bg-badge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6cc6ff"/><stop offset="1" stop-color="#1f5fc4"/></linearGradient></defs>
    <path d="M32 3 L60 12 V36 C60 54 46 64 32 69 C18 64 4 54 4 36 V12 Z" fill="url(#bg-badge)" stroke="#0d1b33" stroke-width="4" stroke-linejoin="round"/>
    <path d="M32 10 L53 17 V36 C53 49 43 57 32 61 C21 57 11 49 11 36 V17 Z" fill="none" stroke="#ffd23f" stroke-width="3"/>
    <text x="32" y="45" text-anchor="middle" font-family="ClashDisplay, sans-serif" font-size="26" fill="#fff" stroke="#0d1b33" stroke-width="4" paint-order="stroke">${PROFILE.name[0]}</text>
  </svg>`;
}

function renderHud() {
  const [xp, max] = PROFILE.xp;
  $("#hud-name").textContent = PROFILE.name;
  $("#hud-level").textContent = PROFILE.level;
  $("#hud-xp").style.width = `${(xp / max) * 100}%`;
  $("#hud-xp-text").textContent = `${fmt(xp)}/${fmt(max)}`;
  $("#hud-gold").textContent = fmt(state.gold);
  $("#hud-gems").textContent = fmt(state.gems);
  $("#sound-btn").textContent = Sfx.muted ? "🔇" : "🔊";
}

function addGold(delta) {
  const el = $("#hud-gold");
  const from = state.gold;
  const to = (state.gold += delta);
  const start = performance.now();
  const step = t => {
    const p = Math.min(1, (t - start) / 700);
    el.textContent = fmt(Math.round(from + (to - from) * (1 - (1 - p) ** 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  bump(el.parentElement);
}

function renderHome() {
  $("#trophy-count").textContent = fmt(PROFILE.trophies);
  $("#location").textContent = PROFILE.location;
  $("#arena-name").textContent = PROFILE.arena;
  $("#greeting").innerHTML = `<img class="bubble-emote" src="${PROFILE.emote}" alt=""><span>${PROFILE.greeting}</span>`;
  $("#hero-name").textContent = PROFILE.name;
  $("#hero-title").textContent = PROFILE.title;
  $("#hero-tagline").textContent = PROFILE.tagline;
  $("#quick-links").innerHTML = ["Résumé", "LinkedIn", "GitHub", "Email"].map(n => LINKS.find(l => l.name === n)).map(l => `<a class="btn btn-blue btn-sm" href="${l.url}" target="_blank" rel="noopener">${l.icon} ${l.name}</a>`).join("");
  $("#chest-slots").innerHTML = CHESTS.map((c, i) => {
    const opened = state.opened.has(i);
    return `<button class="slot ${opened ? "opened" : "ready"}" data-chest="${i}" aria-label="${c.name}">
      ${chestImg(c.type, opened)}<span class="slot-label">${opened ? "Opened" : "Open!"}</span>
    </button>`;
  }).join("");
}

function progressHTML(c) {
  const lvl = state.levels[c.id];
  if (c.locked) return "";
  if (lvl >= MAX_LEVEL) return `<span class="card-progress full"><i style="width:100%"></i><b>MAX</b></span>`;
  const need = cardsNeeded(lvl);
  const have = state.counts[c.id];
  const full = have >= need;
  return `<span class="card-progress ${full ? "full" : ""}"><i style="width:${Math.min(100, (have / need) * 100)}%"></i><b>${have}/${need}</b>${full ? `<span class="up-arrow">▲</span>` : ""}</span>`;
}

function cardHTML(c, tag = "button") {
  const lvl = state.levels[c.id];
  const label = c.locked ? "Learning" : `Level ${lvl}`;
  const attrs = tag === "button" ? ` data-card="${c.id}" aria-label="${c.name}, ${label}"` : "";
  const face = c.art
    ? `<span class="card-img"><img src="assets/cards/${c.art}.webp" alt="" loading="lazy" draggable="false"></span><span class="card-level solo">${label}</span>`
    : `<span class="card-frame"><span class="card-art"><span class="card-icon">${c.icon}</span></span><span class="card-level">${label}</span></span>`;
  return `<${tag} class="card r-${c.rarity} ${c.art ? "has-art" : ""} ${c.locked ? "locked" : ""}"${attrs}>
    ${face}
    <span class="elixir"><span>${c.cost}</span></span>
    ${progressHTML(c)}
    <span class="card-name">${c.name}</span>
  </${tag}>`;
}

function renderDeck() {
  const avg = DECK.reduce((s, c) => s + c.cost, 0) / DECK.length;
  const found = DECK.length + COLLECTION.filter(c => !c.locked).length;
  $("#deck-grid").innerHTML = DECK.map(c => cardHTML(c)).join("");
  $("#avg-elixir").textContent = avg.toFixed(1);
  $("#collection-grid").innerHTML = COLLECTION.map(c => cardHTML(c)).join("");
  $("#collection-count").textContent = `Found: ${found}/${ALL_CARDS.length}`;
}

function renderShop() {
  const featured = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const tags = p => `<span class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</span>`;
  $("#special-offer").innerHTML = `<div class="offer">
    <span class="ribbon">Special Offer</span>
    <span class="value-badge">x10<br>value</span>
    <span class="offer-art ${featured.art ? "has-art" : ""}">${featured.art ? `<img src="assets/cards/${featured.art}.webp" alt="">` : featured.icon}</span>
    <div><h3>${featured.name}</h3><p>${featured.desc}</p>${tags(featured)}</div>
    ${featured.url
      ? `<a class="btn btn-green" href="${featured.url}" target="_blank" rel="noopener">View Project</a>`
      : `<span class="btn btn-blue">${featured.label}</span>`}
  </div>`;
  $("#deals").innerHTML = PROJECTS.filter(p => p !== featured).map(p => {
    const inner = `<span class="deal-art">${p.icon}</span>
      <span class="deal-name">${p.name}</span>
      <span class="deal-desc">${p.desc}</span>
      ${tags(p)}
      <span class="price ${p.url ? "" : "no-link"}">${p.url ? "FREE" : p.label}</span>`;
    return p.url
      ? `<a class="deal" href="${p.url}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="deal static">${inner}</div>`;
  }).join("");
}

function tickCountdown() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const s = Math.floor((midnight - now) / 1000);
  const pad = n => String(n).padStart(2, "0");
  $("#refresh-timer").textContent = `${Math.floor(s / 3600)}h ${pad(Math.floor((s % 3600) / 60))}m ${pad(s % 60)}s`;
}

function renderClan() {
  $("#clan-head").innerHTML = `
    <div class="clan-top">${badgeSVG()}<div><h2>${CLAN.name}</h2><p class="clan-tag">${CLAN.tag} · ${PROFILE.title}</p></div></div>
    <p class="clan-desc">${CLAN.desc}</p>
    <div class="clan-stats">${CLAN.stats.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join("")}</div>`;
  const msg = (time, body, cls = "") => `<div class="msg ${cls}">
    <div class="msg-head"><b>${PROFILE.name}</b><span class="role">Leader</span><time>${time} ago</time></div>${body}
  </div>`;
  $("#chat").innerHTML = CLAN.chat.map(m => msg(m.time, `<p>${m.text}</p>`)).join("") + msg("now", `
    <p>Requesting: <b>a new teammate or project</b> 🤝</p>
    <div class="req-row"><div class="req-bar"><i></i></div><button class="btn btn-green btn-sm" data-action="battle">Donate</button></div>`, "request");
  $("#members").innerHTML = LINKS.map((l, i) => `<li><a class="member" href="${l.url}" target="_blank" rel="noopener">
    <span class="rank">${i + 1}</span>
    <span class="m-icon">${l.icon}</span>
    <span class="m-name"><b>${l.name}</b><small>${l.role}</small></span>
    <span class="m-handle">${l.handle}</span>
  </a></li>`).join("");
}

function renderRoad() {
  let html = "";
  let placed = false;
  for (const m of [...ROAD].sort((a, b) => b.trophies - a.trophies)) {
    const reached = m.trophies <= PROFILE.trophies;
    if (reached && !placed) {
      html += `<div class="yah"><span>📍 You are here · ${fmt(PROFILE.trophies)}</span></div>`;
      placed = true;
    }
    html += `<div class="arena-divider ${reached ? "" : "locked"}">${reached ? "" : "🔒 "}${m.arena}</div>
    <div class="milestone ${reached ? "reached" : "locked"}">
      <div class="node"><span>🏆</span>${fmt(m.trophies)}</div>
      <div class="m-card">
        <span class="m-year">${m.year}</span>
        <h3>${m.title}</h3>
        ${m.org ? `<p class="m-org">${m.org}</p>` : ""}
        <p>${m.desc}</p>
      </div>
    </div>`;
  }
  $("#road").innerHTML = html;
}

function renderTabbar() {
  $("#tabbar").innerHTML = TABS.map((t, i) => `<button class="tab" role="tab" data-tab-btn="${i}" aria-label="${t.label}">
    <span class="ti">${t.icon}</span><span class="tl">${t.label}</span>
  </button>`).join("");
}

function setTab(i) {
  i = Math.max(0, Math.min(TABS.length - 1, i));
  state.tab = i;
  $("#track").style.transform = `translateX(${-i * 20}%)`;
  document.querySelectorAll(".screen").forEach((s, j) => { s.inert = j !== i; });
  document.querySelectorAll(".tab").forEach((b, j) => {
    b.classList.toggle("active", j === i);
    b.setAttribute("aria-selected", j === i);
  });
  history.replaceState(null, "", `#${TABS[i].id}`);
}

function openModal(title, html, variant = "") {
  lastFocus = document.activeElement;
  $("#modal-title").textContent = title;
  $("#modal-body").innerHTML = html;
  $("#modal-panel").className = `modal-panel ${variant}`;
  $("#modal").hidden = false;
  $("#modal .x").focus();
}

function closeModal() {
  timers.forEach(clearTimeout);
  timers = [];
  if (chestQueue) {
    chestQueue.forEach(applyReward);
    chestQueue = null;
    renderDeck();
    renderHome();
  }
  $("#modal").hidden = true;
  lastFocus?.focus?.();
}

function openCard(id) {
  const c = ALL_CARDS.find(x => x.id === id);
  const lvl = state.levels[id];
  const ready = state.counts[id] >= cardsNeeded(lvl);
  const action = c.locked
    ? `<button class="btn btn-gray" disabled>Still learning…</button>`
    : lvl >= MAX_LEVEL
      ? `<button class="btn btn-gray" disabled>Max Level</button>`
      : `<button class="btn ${ready ? "btn-green" : "btn-gray"}" data-upgrade="${id}">Upgrade <span class="cost">🪙 ${fmt(upgradeCost(lvl))}</span></button>`;
  const html = `<div class="r-${c.rarity}">
    <div class="cd-top">
      ${cardHTML(c, "div")}
      <div>
        <span class="rarity-tag">${c.rarity}</span>
        <p class="cd-type">Type: <b>${c.type}</b></p>
        <p class="cd-desc">${c.desc}</p>
      </div>
    </div>
    <div class="stats">${Object.entries(c.stats).map(([k, v], i) => `<div class="stat"><span class="stat-icon">${STAT_ICONS[i % STAT_ICONS.length]}</span><span><small>${k}</small><b>${v}</b></span></div>`).join("")}</div>
    <div class="btn-row">${action}</div>
  </div>`;
  if ($("#modal").hidden) openModal(c.name, html);
  else $("#modal-body").innerHTML = html;
}

function upgradeCard(id, btn) {
  const lvl = state.levels[id];
  const need = cardsNeeded(lvl) - state.counts[id];
  const cost = upgradeCost(lvl);
  if (need > 0 || state.gold < cost) {
    Sfx.play("error");
    shake(btn);
    toast(need > 0 ? `Need ${need} more cards! Open chests 🎁` : "Not enough gold! Open some chests 🎁");
    return;
  }
  addGold(-cost);
  state.counts[id] -= cardsNeeded(lvl);
  state.levels[id]++;
  Sfx.play("win");
  confetti();
  toast(`Level up! ${ALL_CARDS.find(c => c.id === id).name} → ${state.levels[id]}`);
  renderDeck();
  openCard(id);
}

function rollChest(c) {
  const [k, lo, hi] = CHEST_LOOT[c.type];
  const pool = DECK.filter(x => state.levels[x.id] < MAX_LEVEL).sort(() => Math.random() - 0.5).slice(0, k);
  return [
    ...pool.map(card => ({ type: "card", card, n: lo + Math.floor(Math.random() * (hi - lo + 1)) })),
    { type: "gold", n: c.gold },
    { type: "fact", fact: c.fact },
  ];
}

function applyReward(item) {
  if (item.type === "card") state.counts[item.card.id] += item.n;
  else if (item.type === "gold") addGold(item.n);
}

function factHTML(f) {
  return `<div class="reward-item reward-card"><div class="reward-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.text}</p></div>`;
}

function openChest(i) {
  const c = CHESTS[i];
  const done = state.opened.has(i);
  openModal(c.name, `<div class="chest-open ${done ? "opened revealed" : ""}" data-index="${i}">
    <div class="burst"></div>
    <button class="chest-big" data-action="crack" aria-label="Open chest">${chestImg(c.type, done)}<span class="chest-left" hidden></span></button>
    <p class="tap-hint">Tap to open!</p>
    <div class="reward" data-action="crack">${done ? factHTML(c.fact) : ""}</div>
    <p class="tap-next" hidden></p>
  </div>`, "dark");
}

function crackChest() {
  const wrap = $(".chest-open");
  if (!wrap || wrap.matches(".opening, .revealed")) return;
  if (wrap.classList.contains("opened")) return nextReward();
  const i = +wrap.dataset.index;
  wrap.classList.add("opening");
  Sfx.play("thump");
  later(() => {
    wrap.classList.replace("opening", "opened");
    wrap.querySelector(".chest-img").src = `assets/chests/${CHEST_ART[CHESTS[i].type][1]}.webp`;
    Sfx.play("open");
    state.opened.add(i);
    chestQueue = rollChest(CHESTS[i]);
    $(".tap-next").hidden = false;
    nextReward();
  }, 600);
}

function nextReward() {
  if (!chestQueue?.length) return;
  const item = chestQueue.shift();
  applyReward(item);
  const box = $(".chest-open .reward");
  if (item.type === "card") {
    box.innerHTML = `<div class="reward-item">${cardHTML(item.card, "div")}<div class="reward-count">x${item.n}</div><div class="reward-name">${item.card.name}</div></div>`;
    Sfx.play("card");
  } else if (item.type === "gold") {
    box.innerHTML = `<div class="reward-item"><div class="big-coin">🪙</div><div class="reward-gold">+${fmt(item.n)}</div></div>`;
    Sfx.play("card");
  } else {
    box.innerHTML = factHTML(item.fact);
    Sfx.play("win");
    confetti();
  }
  const left = $(".chest-left");
  left.textContent = chestQueue.length;
  left.hidden = !chestQueue.length;
  $(".tap-next").textContent = chestQueue.length ? "Tap to continue" : "Check your deck for upgrades!";
  if (!chestQueue.length) {
    chestQueue = null;
    $(".chest-open").classList.add("revealed");
    renderDeck();
    renderHome();
  }
}

function startBattle() {
  openModal("Battle", `<div class="matchmaking">
    <div class="mm-swords">⚔️</div>
    <p class="mm-text">Searching for opponent<span class="dots"></span></p>
    <p class="mm-sub">Matching around ${fmt(PROFILE.trophies)} 🏆</p>
  </div>`, "dark");
  later(() => {
    $("#modal-title").textContent = "Opponent Found!";
    $("#modal-body").innerHTML = `<div class="versus">
      <div class="vs-side blue"><div class="vs-avatar">🙂</div><b>You</b><small>Visitor</small></div>
      <div class="vs">VS</div>
      <div class="vs-side red"><div class="vs-avatar"><img src="${PROFILE.emote}" alt=""></div><b>${PROFILE.name}</b><small>${PROFILE.title}</small></div>
    </div>
    <p class="vs-msg">Best of one: send a message and let's build something.</p>
    <div class="contact-box"><span>${PROFILE.email}</span><button class="btn btn-blue btn-sm" data-copy="${PROFILE.email}">Copy</button></div>
    <div class="btn-row">
      <a class="btn btn-yellow" href="mailto:${PROFILE.email}">✉️ Email</a>
      ${LINKS.filter(l => l.name !== "Email").slice(0, 3).map(l => `<a class="btn btn-blue" href="${l.url}" target="_blank" rel="noopener">${l.icon} ${l.name}</a>`).join("")}
    </div>`;
    Sfx.play("win");
  }, 1500);
}

function confetti(n = 70) {
  if (reducedMotion) return;
  const colors = ["#ffd23f", "#ff5a4f", "#4aa3f0", "#6fdc45", "#b45cff", "#ffffff"];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    p.className = "confetti";
    p.style.cssText = `left:${Math.random() * 100}vw;background:${colors[i % colors.length]};--dx:${(Math.random() - 0.5) * 220}px;--rot:${Math.random() * 720}deg;animation-duration:${1.2 + Math.random() * 1.3}s;animation-delay:${Math.random() * 0.2}s`;
    frag.append(p);
    setTimeout(() => p.remove(), 2900);
  }
  document.body.append(frag);
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  restartAnim(t, "show");
}

function runLoader() {
  const el = $("#loader");
  if (!el || document.documentElement.classList.contains("seen")) return el?.remove();
  $("#loader-tip").textContent = LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)];
  const done = () => {
    el.classList.add("done");
    setTimeout(() => el.remove(), 400);
    try { sessionStorage.setItem("loaded", "1"); } catch {}
  };
  el.addEventListener("click", done, { once: true });
  setTimeout(done, reducedMotion ? 300 : 1350);
}

document.addEventListener("click", e => {
  if (e.target.closest(".btn, .deal, .member, .slot, .card")) Sfx.play("click");
  const t = e.target.closest("[data-tab-btn],[data-card],[data-chest],[data-close],[data-upgrade],[data-copy],[data-action]");
  if (!t) return;
  const d = t.dataset;
  if ("tabBtn" in d) {
    Sfx.play("tab");
    setTab(+d.tabBtn);
  } else if ("card" in d) openCard(d.card);
  else if ("chest" in d) openChest(+d.chest);
  else if ("close" in d) closeModal();
  else if ("upgrade" in d) upgradeCard(d.upgrade, t);
  else if ("copy" in d) navigator.clipboard?.writeText(d.copy).then(() => toast("Copied to clipboard!"), () => toast(d.copy));
  else if (d.action === "battle") startBattle();
  else if (d.action === "crack") crackChest();
  else if (d.action === "sound") {
    const muted = Sfx.toggle();
    t.textContent = muted ? "🔇" : "🔊";
    toast(muted ? "Sound off" : "Sound on");
    Sfx.play("click");
  }
});

document.addEventListener("keydown", e => {
  const modalOpen = !$("#modal").hidden;
  if (e.key === "Escape" && modalOpen) closeModal();
  else if (!modalOpen && e.key === "ArrowRight") setTab(state.tab + 1);
  else if (!modalOpen && e.key === "ArrowLeft") setTab(state.tab - 1);
});

let touchX = 0;
let touchY = 0;
$("#screens").addEventListener("touchstart", e => {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });
$("#screens").addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    Sfx.play("tab");
    setTab(state.tab + (dx < 0 ? 1 : -1));
  }
}, { passive: true });

$("#home-arena").insertAdjacentHTML("afterbegin", arenaSVG("0 210 360 270"));
renderHud();
renderHome();
renderDeck();
renderShop();
renderClan();
renderRoad();
renderTabbar();
document.querySelectorAll(".screen").forEach(sc => sc.insertAdjacentHTML("beforeend", `<p class="disclaimer">This material is unofficial and is not endorsed by Supercell. For more information see Supercell's Fan Content Policy: <a href="https://www.supercell.com/fan-content-policy" target="_blank" rel="noopener">www.supercell.com/fan-content-policy</a>.</p>`));
tickCountdown();
setInterval(tickCountdown, 1000);
runLoader();

const fromHash = TABS.findIndex(t => `#${t.id}` === location.hash);
setTab(fromHash >= 0 ? fromHash : 2);
requestAnimationFrame(() => requestAnimationFrame(() => $("#track").classList.add("ready")));
