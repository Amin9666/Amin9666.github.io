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
