function renderOrbit(t) {
  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);

  ctx.clearRect(0, 0, 500, 500);

  const axesCount = Math.min(1500, STATE.achsen);
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

  const cx = 250 + Math.sin(t) * AXIS.x();
  const cy = 250 + Math.cos(t) * AXIS.y();
  const radius = AXIS.z() * 0.3 + 10;

  ctx.fillStyle = "#0f0";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  if (qAnime.img.complete && qAnime.img.naturalWidth > 0) {
    ctx.drawImage(qAnime.img, cx - 40, cy - 40, 80, 80);
  } else {
    ctx.fillStyle = "#6cf";
    ctx.font = "12px Consolas";
    ctx.fillText("🔄 Lade Anime...", cx - 50, cy + 50);
  }

  ctx.fillStyle = "#0f0";
  ctx.font = "12px Consolas";
  ctx.fillText("ULTRA: " + ultraFlow.outState.tag, cx - 40, cy + 60);
}
