const STATE = {
  achsen: 820,
  connected: false,
  connectTime: 0,
  mode: "ALLROUNDER",
  ultra: true
};

const axes = Math.min(1500, STATE.achsen);

document.getElementById('btnConnect').addEventListener('click', () => {
  connectGruppen();
  log('🔗 GRUPPEN · neu verbunden', 'ds9');
  updateUI();
});

function connectGruppen(){
  STATE.connected = true;
  STATE.connectTime = performance.now();
}

function log(msg, channel){
  console.log(`[${channel}] ${msg}`);
  out.innerText += "\n" + msg;
}

function updateUI(){
  out.innerText += "\nUI aktualisiert.";
}
function renderDevices(t){

  const devices = ["PX","PC","GHOST"];
  const baseX = 50;
  const baseY = 420;

  devices.forEach((dev, i) => {

    const dx = baseX + i * 150;
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
  ctx.moveTo(50, 460);
  ctx.lineTo(450, 460);
  ctx.stroke();
}
function renderOrbit(t){

  const axes = Math.min(1500, STATE.achsen);
  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);

  ctx.clearRect(0,0,500,500);

  const x = 250 + Math.sin(t) * axes * 0.15;
  const y = 250 + Math.cos(t) * axes * 0.15;

  ctx.fillStyle = "#0f0";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2);
  ctx.fill();

  ctx.drawImage(qAnime.img, x - 40, y - 40, 80, 80);

  ctx.fillStyle = "#0f0";
  ctx.font = "12px Consolas";
  ctx.fillText("ULTRA: " + ultraFlow.outState.tag, x - 40, y + 60);
}
