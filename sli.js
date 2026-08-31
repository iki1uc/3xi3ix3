// ======================================================
// ALLROUNDER · AXIS-SCALE · x / y / z
// ======================================================
export const AXIS = {

  base(){
    return STATE.achsen;
  },

  x(){
    return Math.min(1500, this.base() * 0.15);
  },

  y(){
    return Math.min(1500, this.base() * 0.15);
  },

  z(){
    return Math.min(1500, this.base() * 0.10);
  }
};
export const sliRun3 = SLI_MASTER.ALL([
  { N:3, H:1, B:2, T:3 }
]);
// ======================================================
// PX-PC-GHOST VISUALISIERUNG — ALLROUNDER
// ======================================================
export function renderDevices(t){

  const devices = ["PX","PC","GHOST"];
  const baseX = 50;
  const baseY = 420 + AXIS.z() * 0.1;

  devices.forEach((dev, i) => {

    const dx = baseX + i * (150 + AXIS.x() * 0.05);
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
