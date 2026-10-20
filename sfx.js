const Sfx = (() => {
  let ctx = null;
  let muted = true;
  try { muted = localStorage.getItem("sfx") !== "on"; } catch {}
  const ac = () => (ctx ??= new (window.AudioContext || window.webkitAudioContext)());

  function tone(freq, dur, { type = "sine", vol = 0.2, slide = 0, delay = 0 } = {}) {
    const a = ac();
    const t = a.currentTime + delay;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + dur);
  }

  function noise(dur, { vol = 0.3, freq = 800, delay = 0 } = {}) {
    const a = ac();
    const t = a.currentTime + delay;
    const buf = a.createBuffer(1, Math.ceil(a.sampleRate * dur), a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource();
    s.buffer = buf;
    const f = a.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = freq;
    const g = a.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f).connect(g).connect(a.destination);
    s.start(t);
  }

  const sounds = {
    click: () => tone(520, 0.08, { type: "triangle", slide: 1.6, vol: 0.18 }),
    tab: () => tone(380, 0.07, { type: "triangle", slide: 1.4, vol: 0.12 }),
    thump: () => { tone(140, 0.25, { slide: 0.5, vol: 0.4 }); noise(0.15, { vol: 0.2, freq: 500 }); },
    open: () => { noise(0.3, { vol: 0.25, freq: 2500 }); [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.25, { type: "triangle", vol: 0.15, delay: 0.08 * i })); },
    card: () => { tone(880, 0.12, { slide: 1.5, vol: 0.15 }); tone(1320, 0.18, { vol: 0.1, delay: 0.06 }); },
    deploy: () => { noise(0.25, { vol: 0.2, freq: 1200 }); tone(300, 0.2, { type: "square", slide: 0.6, vol: 0.06 }); },
    hit: () => { noise(0.4, { vol: 0.45, freq: 700 }); tone(90, 0.4, { slide: 0.5, vol: 0.4 }); },
    win: () => [523, 659, 784, 659, 784, 1047].forEach((f, i) => tone(f, i === 5 ? 0.6 : 0.16, { type: "square", vol: 0.07, delay: 0.13 * i })),
    error: () => tone(200, 0.18, { type: "square", slide: 0.7, vol: 0.08 }),
  };

  return {
    play(name) {
      if (muted) return;
      try { sounds[name]?.(); } catch {}
    },
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      try { localStorage.setItem("sfx", muted ? "off" : "on"); } catch {}
      if (!muted) ac().resume();
      return muted;
    },
  };
})();
