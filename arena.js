const ARENA_W = 360;
const ARENA_H = 480;
const TOWERS = {
  rk: { x: 180, y: 80, team: "red", king: true },
  rl: { x: 80, y: 145, team: "red" },
  rr: { x: 280, y: 145, team: "red" },
  bl: { x: 80, y: 340, team: "blue" },
  br: { x: 280, y: 340, team: "blue" },
  bk: { x: 180, y: 410, team: "blue", king: true },
};
function towerSVG(id, t) {
  const [src, w, h] = t.king ? ["king", 80, 80.6] : ["princess", 66, 72.7];
  return `<g data-tower="${id}" transform="translate(${t.x} ${t.y}) scale(${t.king ? 1.35 : 1})">
    <ellipse cx="0" cy="24" rx="${w / 2 + 4}" ry="8" fill="rgba(0,0,0,.28)"/>
    <image class="tower-body" href="assets/towers/${src}.webp" x="${-w / 2}" y="${26 - h}" width="${w}" height="${h}"/>
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
