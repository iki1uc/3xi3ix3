// ======================================================
// SLI.js · ALLROUNDER ENGINE
// ======================================================

import { KIT } from "./kit.js";
import { SLI_PORT } from "./SLI-CORE.js";

// ======================================================
// AXIS — zentrale Skalierung
// ======================================================
export const AXIS = {
  base: (STATE) => STATE.achsen,
  x:   (STATE) => Math.min(1500, STATE.achsen * 0.15),
  y:   (STATE) => Math.min(1500, STATE.achsen * 0.15),
  z:   (STATE) => Math.min(1500, STATE.achsen * 0.10)
};

// ======================================================
// SLI-RUN-3 — Engine-Kern
// ======================================================
export function SLI_RUN3() {
  return SLI_MASTER.ALL([{ N:3, H:1, B:2, T:3 }]);
}

// ======================================================
// ORBIT-RENDERER — Anime + ULTRA + AXIS
// ======================================================
export function renderOrbit(ctx, STATE, ANIME_QUANT, ULTRA_PORT, t) {

  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);

  ctx.clearRect(0, 0, 500, 500);

  const axesCount = STATE.achsen;

  for (let i = 0; i < axesCount; i++) {
    const angle = (i / axesCount) * Math.PI * 2 + t * 0.001;
    const dist = 100 + (i / axesCount) * 120;
    const x = 250 + Math.cos(angle) * dist;
    const y = 250 + Math.sin(angle) * dist;
    const alpha = 0.02 + (i / axesCount) * 0.04;
    ctx.fillStyle = `rgba(255,215,0,${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, 1 + (i / axesCount) * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const cx = 250 + Math.sin(t) * AXIS.x(STATE);
  const cy = 250 + Math.cos(t) * AXIS.y(STATE);
  const radius = AXIS.z(STATE) * 0.3 + 10;

  ctx.fillStyle = "#0f0";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  if (qAnime.img.complete && qAnime.img.naturalWidth > 0) {
    ctx.drawImage(qAnime.img, cx - 40, cy - 40, 80, 80);
  }

  ctx.fillStyle = "#0f0";
  ctx.font = "12px Consolas";
  ctx.fillText("ULTRA: " + ultraFlow.outState.tag, cx - 40, cy + 60);
}

// ======================================================
// PX-PC-GHOST — Geräte-Cluster
// ======================================================
export function renderDevices(ctx, STATE) {

  const devices = ["PX", "PC", "GHOST"];
  const baseX = 50;
  const baseY = 420 + AXIS.z(STATE) * 0.1;

  devices.forEach((dev, i) => {
    const dx = baseX + i * (150 + AXIS.x(STATE) * 0.05);
    const dy = baseY;

    ctx.fillStyle = STATE.connected ? "#0f0" : "#333";
    ctx.fillRect(dx, dy, 120, 40);

    ctx.fillStyle = "#0f0";
    ctx.font = "14px Consolas";
    ctx.fillText(dev, dx + 10, dy + 25);

    ctx.strokeStyle = STATE.connected ? "#6cf" : "#444";
    ctx.beginPath();
    ctx.moveTo(dx + 120, dy + 20);
    ctx.lineTo(dx + 150, dy + 20);
    ctx.stroke();
  });

  ctx.strokeStyle = STATE.connected ? "#f0f" : "#222";
  ctx.beginPath();
  ctx.moveTo(50, baseY + 40);
  ctx.lineTo(450, baseY + 40);
  ctx.stroke();
}

// ======================================================
// ENGINE-KONSOLE — QUANT / SYN / QUO / PYRA / ULTRA / SLI
// ======================================================
export function renderConsole(out, STATE, QUANT, SYN, QUO, PYRAMIDE, KIT, SLI_RUN3, t) {

  const q = QUANT.atom(t);
  const syn = SYN.run(t);
  const quo = QUO.state(t);
  const pyr = PYRAMIDE.flow(t);
  const ultra = KIT.pipeline(t);
  const sli = SLI_RUN3();

  out.innerText =
    "ULTRA-KERNEL ONLINE\n\n" +
    "QUANT: " + q.atom + "\n" +
    "SYN:   " + syn.mode + "\n" +
    "QUO:   " + quo.tag + "\n" +
    "PYRA:  " + pyr.axis + "\n" +
    "SLI-RUN3: " + sli[0].core.ENGINE + "\n" +
    "ULTRA: " + ultra.out.tag + "\n" +
    "─── ACHSEN ───\n" +
    "STATE.achsen = " + STATE.achsen + "\n" +
    "AXIS.x() = " + AXIS.x(STATE).toFixed(2) + "\n" +
    "AXIS.y() = " + AXIS.y(STATE).toFixed(2) + "\n" +
    "AXIS.z() = " + AXIS.z(STATE).toFixed(2) + "\n" +
    "─── KERNEL ───\n" +
    "MODE: " + STATE.mode + "\n" +
    "SYNC: " + (STATE.arg?.sync ? "⚡ aktiv" : "⏸ ruhend");
}

// ======================================================
// KERNEL RESET — ORG → REORG
// ======================================================
export function resetKernel(STATE, AXIS, ULTRA_PORT) {

  const arg = {
    sync: true,
    timestamp: Date.now(),
    mode: "REORG"
  };

  const org = {
    achsen: 820,
    connected: false,
    mode: "ORG",
    ultra: false,
    connectTime: 0,
    lastReset: Date.now(),
    modeHistory: ["ORG"]
  };

  const reorg = {
    ...org,
    mode: "REORG",
    ultra: true,
    sync: arg,
    resetTime: performance.now(),
    modeHistory: [...org.modeHistory, "REORG"]
  };

  const newAxis = {
    base: () => reorg.achsen,
    x: () => Math.min(1500, reorg.achsen * 0.15),
    y: () => Math.min(1500, reorg.achsen * 0.15),
    z: () => Math.min(1500, reorg.achsen * 0.10)
  };

  const newPort = {
    IN: ULTRA_PORT.IN,
    OUT: ULTRA_PORT.OUT,
    flow: (x) => {
      const base = ULTRA_PORT.flow(x);
      return {
        ...base,
        reset: true,
        sync: arg.sync,
        kernel: "REORG"
      };
    }
  };

  return {
    state: reorg,
    axis: newAxis,
    port: newPort,
    arg: arg,
    message: `🔄 KERNEL REORG · ${arg.timestamp} · sync=${arg.sync}`
  };
}
