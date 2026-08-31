// ======================================================
// ORBIT-RENDERER — erweitert mit Anime + ULTRA-Port
// ======================================================
function renderOrbit(t){

  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);

  ctx.clearRect(0,0,500,500);

  // Orbit-Kreis
  const x = 250 + Math.sin(t) * 120;
  const y = 250 + Math.cos(t) * 120;

  ctx.fillStyle = "#0f0";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2);
  ctx.fill();

  // Anime-Frame anzeigen
  ctx.fillStyle = "#6cf";
  ctx.font = "16px Consolas";
  ctx.fillText(qAnime.anime, x - 40, y - 30);

  // ULTRA-Port anzeigen
  ctx.fillStyle = "#0f0";
  ctx.font = "12px Consolas";
  ctx.fillText("ULTRA: " + ultraFlow.outState.tag, x - 40, y + 40);
}

// ======================================================
// PX-PC-GHOST VISUALISIERUNG + CONNECT
// ======================================================
function renderDevices(t){

  const devices = ["PX","PC","GHOST"];
  const baseX = 50;
  const baseY = 420;

  devices.forEach((dev, i) => {

    const dx = baseX + i * 150;
    const dy = baseY;

    // Gerät zeichnen
    ctx.fillStyle = "#333";
    ctx.fillRect(dx, dy, 120, 40);

    ctx.fillStyle = "#0f0";
    ctx.font = "14px Consolas";
    ctx.fillText(dev, dx + 10, dy + 25);

    // Connect-Linie
    ctx.strokeStyle = "#6cf";
    ctx.beginPath();
    ctx.moveTo(dx + 120, dy + 20);
    ctx.lineTo(dx + 150, dy + 20);
    ctx.stroke();
  });

  // Abschlusslinie
  ctx.strokeStyle = "#f0f";
  ctx.beginPath();
  ctx.moveTo(50, 460);
  ctx.lineTo(450, 460);
  ctx.stroke();
}

// ======================================================
// LOOP — Orbit + Devices
// ======================================================
function loop(){
  t += 0.01;

  renderOrbit(t);
  renderDevices(t);

  requestAnimationFrame(loop);
}

loop();
