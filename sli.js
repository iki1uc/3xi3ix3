// ======================================================
// SLI.js · ALLROUNDER ENGINE
// ======================================================

// AXIS-SCALE — x / y / z
export const AXIS = {
  base: (STATE) => STATE.achsen,
  x:   (STATE) => Math.min(1500, STATE.achsen * 0.15),
  y:   (STATE) => Math.min(1500, STATE.achsen * 0.15),
  z:   (STATE) => Math.min(1500, STATE.achsen * 0.10)
};

// SLI-RUN-3
export function SLI_RUN3() {
  return [
    { core: { ENGINE: "3x3x3" } }
  ];
}

// ORBIT-RENDERER
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

// PX-PC-GHOST
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
