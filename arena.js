const ARENA_W = 360;
const ARENA_H = 480;
const TEAM = { red: { main: "#e8433a" }, blue: { main: "#2f7be0" } };
const TOWERS = {
  rk: { x: 180, y: 80, team: "red", king: true },
  rl: { x: 80, y: 145, team: "red" },
  rr: { x: 280, y: 145, team: "red" },
  bl: { x: 80, y: 340, team: "blue" },
  br: { x: 280, y: 340, team: "blue" },
  bk: { x: 180, y: 410, team: "blue", king: true },
};
const BATTLE_CARDS = [
  { link: "Résumé", cost: 3, rarity: "legendary" },
  { link: "LinkedIn", cost: 2, rarity: "epic" },
  { link: "GitHub", cost: 2, rarity: "rare" },
  { link: "Email", cost: 1, rarity: "common" },
];

const battle = { raf: 0, tick: 0, last: 0, elixir: 5, crowns: 0, time: 180, claimed: new Set(), timers: [] };
const battleLater = (fn, ms) => battle.timers.push(setTimeout(fn, ms));
const stagePos = ([x, y]) => ({ left: `${(x / ARENA_W) * 100}%`, top: `${(y / ARENA_H) * 100}%` });

function towerSVG(id, t) {
  const c = TEAM[t.team].main;
  const ink = `stroke="#0d1b33" stroke-linejoin="round"`;
  const top = t.king
    ? `<path d="M-14 -30 L-16 -48 L-7 -40 L0 -52 L7 -40 L16 -48 L14 -30 Z" fill="#ffd23f" ${ink} stroke-width="3"/>
       <circle cx="0" cy="-38" r="3.2" fill="${c}" stroke="#0d1b33" stroke-width="1.5"/>`
    : `<path d="M0 -28 V-48" stroke="#0d1b33" stroke-width="2.5"/>
       <path d="M0 -48 L15 -43 L0 -38 Z" fill="${c}" ${ink} stroke-width="2"/>`;
  return `<g data-tower="${id}" transform="translate(${t.x} ${t.y}) scale(${t.king ? 1.35 : 1})">
    <ellipse cx="0" cy="24" rx="30" ry="8" fill="rgba(0,0,0,.28)"/>
    <g class="tower-body">
      <path d="M-24 22 L-21 -8 H21 L24 22 Z" fill="#c3ccd8" ${ink} stroke-width="3"/>
      <path d="M-22 7 H22 M-8 -8 V7 M8 7 V22" stroke="#8f9bb0" stroke-width="2.5"/>
      <rect x="-26" y="-22" width="52" height="16" rx="3" fill="#d6dee8" ${ink} stroke-width="3"/>
      <rect x="-26" y="-29" width="10" height="8" fill="#d6dee8" ${ink} stroke-width="2.5"/>
      <rect x="-5" y="-29" width="10" height="8" fill="#d6dee8" ${ink} stroke-width="2.5"/>
      <rect x="16" y="-29" width="10" height="8" fill="#d6dee8" ${ink} stroke-width="2.5"/>
      <path d="M-18 -4 h8 v14 l-4 -3 l-4 3 Z" fill="${c}" ${ink} stroke-width="2"/>
      <path d="M10 -4 h8 v14 l-4 -3 l-4 3 Z" fill="${c}" ${ink} stroke-width="2"/>
      <path d="M-7 22 V13 Q0 5 7 13 V22 Z" fill="#5b3a1f" ${ink} stroke-width="2.5"/>
      ${top}
    </g>
    <g class="rubble">
      <circle cx="-11" cy="14" r="8" fill="#8f9bb0" stroke="#0d1b33" stroke-width="2"/>
      <circle cx="9" cy="16" r="9" fill="#a6b1c2" stroke="#0d1b33" stroke-width="2"/>
      <circle cx="-1" cy="5" r="7" fill="#c3ccd8" stroke="#0d1b33" stroke-width="2"/>
    </g>
    <g class="hp" transform="translate(0 32)">
      <rect x="-22" y="0" width="44" height="7" rx="3" fill="#0d1b33"/>
      <rect class="hp-fill" x="-21" y="1" width="42" height="5" rx="2" fill="${c}"/>
    </g>
  </g>`;
}

function arenaSVG(viewBox = `0 0 ${ARENA_W} ${ARENA_H}`) {
  const tile = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="url(#ar-tiles)" stroke="#b39352" stroke-width="2"/>`;
  const waves = [236, 246].map(y => {
    let d = `M12 ${y}`;
    for (let x = 12; x < 348; x += 24) d += " q6 -4 12 0 t12 0";
    return `<path class="wave" d="${d}" stroke="#bfe8ff" stroke-width="2" fill="none" stroke-dasharray="6 10"/>`;
  }).join("");
  const bridge = x => `<g transform="translate(${x} 240)">
    <rect x="-22" y="-26" width="44" height="52" rx="3" fill="#b9824a" stroke="#0d1b33" stroke-width="3"/>
    <path d="M-22 -13 H22 M-22 0 H22 M-22 13 H22" stroke="#7d5328" stroke-width="2.5"/>
    <rect x="-27" y="-28" width="7" height="56" rx="2" fill="#8f9bb0" stroke="#0d1b33" stroke-width="2"/>
    <rect x="20" y="-28" width="7" height="56" rx="2" fill="#8f9bb0" stroke="#0d1b33" stroke-width="2"/>
  </g>`;
  const bushes = [[28, 44], [332, 48], [26, 196], [334, 204], [24, 296], [336, 286], [28, 448], [332, 452]]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="#3f8f2c" stroke="#0d1b33" stroke-width="2.5"/><circle cx="${x - 3}" cy="${y - 4}" r="4" fill="#6cc04a"/>`).join("");
  return `<svg class="arena-svg" viewBox="${viewBox}" aria-hidden="true">
    <defs>
      <pattern id="ar-grass" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="#7fcf52"/><rect width="20" height="20" fill="#75c649"/><rect x="20" y="20" width="20" height="20" fill="#75c649"/>
      </pattern>
      <pattern id="ar-tiles" width="24" height="24" patternUnits="userSpaceOnUse">
        <rect width="24" height="24" fill="#e6cf95"/>
        <path d="M0 0.5 H24 M0 12 H24 M12 0 V12 M0.5 12 V24" stroke="#c9ad6a" stroke-width="1.5"/>
      </pattern>
    </defs>
    <rect width="${ARENA_W}" height="${ARENA_H}" fill="#6b7a8f"/>
    <rect x="12" y="12" width="336" height="456" rx="12" fill="url(#ar-grass)" stroke="#0d1b33" stroke-width="4"/>
    ${tile(128, 30, 104, 96)}${tile(128, 356, 104, 96)}
    ${tile(52, 118, 56, 56)}${tile(252, 118, 56, 56)}${tile(52, 312, 56, 56)}${tile(252, 312, 56, 56)}
    ${tile(66, 172, 28, 142)}${tile(266, 172, 28, 142)}
    <rect x="12" y="226" width="336" height="28" fill="#3fa9ee" stroke="#1d6fb8" stroke-width="3"/>
    ${waves}${bridge(80)}${bridge(280)}${bushes}
    ${Object.entries(TOWERS).map(([id, t]) => towerSVG(id, t)).join("")}
  </svg>`;
}

function handCard(c, i) {
  const l = LINKS.find(x => x.name === c.link);
  return `<button class="card hand-card r-${c.rarity}" data-deploy="${i}" aria-label="Deploy ${l.name}, costs ${c.cost} elixir">
    <span class="card-frame"><span class="card-art"><span class="card-icon">${l.icon}</span></span><span class="card-level">${l.name}</span></span>
    <span class="elixir"><span>${c.cost}</span></span>
  </button>`;
}

function startBattle() {
  const el = $("#battle");
  el.innerHTML = `
    <div class="b-top">
      <div class="b-name"><b>${PROFILE.name}</b><small>${CLAN.name}</small></div>
      <div class="b-timer"><small>Time left:</small><b id="b-time">3:00</b></div>
    </div>
    <div class="b-field"><div class="b-stage" id="b-stage">${arenaSVG()}
      <div class="b-crowns"><span>👑</span><b id="b-crowns">0</b></div>
      <div class="b-hint" id="b-hint">Tap a card to deploy it!</div>
    </div></div>
    <div class="b-bottom">
      <div class="b-reward" id="b-reward" hidden></div>
      <div class="b-hand">${BATTLE_CARDS.map(handCard).join("")}</div>
      <div class="b-elixir"><span class="elixir static"><span id="b-elixir-n">5</span></span><div class="b-elixir-bar"><i id="b-elixir-fill"></i></div></div>
    </div>
    <button class="b-exit" data-action="exit-battle" aria-label="Leave battle">✕</button>
    <div class="b-intro">
      <div class="vs-side blue"><div class="vs-avatar">🙂</div><b>You</b><small>Visitor</small></div>
      <div class="vs">VS</div>
      <div class="vs-side red"><div class="vs-avatar">👑</div><b>${PROFILE.name}</b><small>${PROFILE.title}</small></div>
    </div>`;
  Object.assign(battle, { elixir: 5, crowns: 0, time: 180, claimed: new Set(), last: performance.now() });
  el.hidden = false;
  $(".app").classList.add("in-battle");
  battleLater(() => el.querySelector(".b-intro")?.classList.add("gone"), reducedMotion ? 300 : 1400);
  battle.raf = requestAnimationFrame(battleLoop);
  battle.tick = setInterval(() => {
    battle.time = Math.max(0, battle.time - 1);
    const t = $("#b-time");
    t.textContent = `${Math.floor(battle.time / 60)}:${String(battle.time % 60).padStart(2, "0")}`;
    t.parentElement.classList.toggle("low", battle.time <= 60);
  }, 1000);
  el.querySelector(".b-exit").focus();
}

function battleLoop(t) {
  battle.elixir = Math.min(10, battle.elixir + (t - battle.last) / 700);
  battle.last = t;
  $("#b-elixir-fill").style.width = `${battle.elixir * 10}%`;
  $("#b-elixir-n").textContent = Math.floor(battle.elixir);
  document.querySelectorAll(".hand-card").forEach(b => b.classList.toggle("ready", battle.elixir >= BATTLE_CARDS[b.dataset.deploy].cost));
  battle.raf = requestAnimationFrame(battleLoop);
}

function exitBattle() {
  cancelAnimationFrame(battle.raf);
  clearInterval(battle.tick);
  battle.timers.forEach(clearTimeout);
  battle.timers = [];
  const el = $("#battle");
  el.hidden = true;
  el.innerHTML = "";
  $(".app").classList.remove("in-battle");
}

function deploy(i, btn) {
  const c = BATTLE_CARDS[i];
  if (battle.elixir < c.cost) {
    Sfx.play("error");
    shake(btn);
    toast("Not enough elixir!");
    return;
  }
  battle.elixir -= c.cost;
  Sfx.play("deploy");
  $("#b-hint")?.remove();
  const target = ["rl", "rr", "rk"].find(id => !battle.claimed.has(id));
  if (target) battle.claimed.add(target);
  const x = target === "rr" ? 280 : 80;
  const pts = !target
    ? [[x, 318], [x, 240], [180, 200]]
    : target === "rk"
      ? [[x, 318], [x, 240], [x, 182], [x < 180 ? 140 : 220, 122]]
      : [[x, 318], [x, 240], [x, 186]];
  const troop = document.createElement("div");
  troop.className = "troop";
  troop.innerHTML = `<span>${LINKS.find(l => l.name === c.link).icon}</span>`;
  Object.assign(troop.style, stagePos(pts[0]));
  $("#b-stage").append(troop);
  const anim = troop.animate(pts.map(stagePos), { duration: reducedMotion ? 10 : 1700, fill: "forwards" });
  anim.onfinish = () => strike(troop, target, c);
}

function strike(troop, target, c) {
  troop.classList.add("attacking");
  if (!target) {
    battleLater(() => { troop.classList.add("poof"); showBattleReward(c); }, 400);
    battleLater(() => troop.remove(), 800);
    return;
  }
  const tower = $(`#b-stage [data-tower="${target}"]`);
  tower.classList.add("hit");
  battleLater(() => {
    tower.classList.add("destroyed");
    Sfx.play("hit");
    const boom = document.createElement("div");
    boom.className = "boom";
    boom.textContent = "💥";
    Object.assign(boom.style, stagePos([TOWERS[target].x, TOWERS[target].y]));
    $("#b-stage").append(boom);
    battleLater(() => boom.remove(), 700);
    troop.classList.add("poof");
    battleLater(() => troop.remove(), 400);
    battle.crowns++;
    const cr = $("#b-crowns");
    cr.textContent = battle.crowns;
    bump(cr.parentElement);
    showBattleReward(c);
    if (target === "rk") battleLater(victory, 1200);
  }, 650);
}

function showBattleReward(c) {
  const l = LINKS.find(x => x.name === c.link);
  const action = l.name === "Email"
    ? `<button class="btn btn-blue btn-sm" data-copy="${PROFILE.email}">Copy</button><a class="btn btn-yellow btn-sm" href="${l.url}">Send</a>`
    : `<a class="btn btn-yellow btn-sm" href="${l.url}" target="_blank" rel="noopener">Open</a>`;
  const box = $("#b-reward");
  box.innerHTML = `<span class="br-icon">${l.icon}</span><span class="br-text"><b>${l.name} unlocked!</b><small>${l.handle}</small></span>${action}`;
  box.hidden = false;
  bump(box);
}

function victory() {
  Sfx.play("win");
  confetti();
  const v = document.createElement("div");
  v.className = "b-victory";
  v.innerHTML = `<h2>Victory!</h2>
    <div class="v-crowns"><span>👑</span><span>👑</span><span>👑</span></div>
    <p>Three crowns! You've won a conversation with ${PROFILE.name.split(" ")[0]}.</p>
    <div class="contact-box"><span>${PROFILE.email}</span><button class="btn btn-blue btn-sm" data-copy="${PROFILE.email}">Copy</button></div>
    <div class="btn-row">${LINKS.filter(l => l.name !== "Email").slice(0, 3).map(l => `<a class="btn btn-blue btn-sm" href="${l.url}" target="_blank" rel="noopener">${l.icon} ${l.name}</a>`).join("")}</div>
    <button class="btn btn-green" data-action="exit-battle">OK</button>`;
  $("#battle").append(v);
}
