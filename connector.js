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
const STATE = {
  achsen: 820,
  connected: false,
  connectTime: 0,
  mode: "ALLROUNDER",
  ultra: true
};
"SLI-RUN3: " + sliRun3[0].core.ENGINE + "\n"
const sliRun3 = SLI_MASTER.ALL([
  { N:3, H:1, B:2, T:3 }
]);
