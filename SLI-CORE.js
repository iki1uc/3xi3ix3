function renderOrbit(t){

  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);

  ctx.clearRect(0,0,500,500);

  const x = 250 + Math.sin(t) * AXIS.x();
  const y = 250 + Math.cos(t) * AXIS.y();

  ctx.fillStyle = "#0f0";
  ctx.beginPath();
  ctx.arc(x, y, AXIS.z(), 0, Math.PI*2);
  ctx.fill();

  ctx.drawImage(qAnime.img, x - 40, y - 40, 80, 80);

  ctx.fillStyle = "#0f0";
  ctx.font = "12px Consolas";
  ctx.fillText("ULTRA: " + ultraFlow.outState.tag, x - 40, y + 60);
}
