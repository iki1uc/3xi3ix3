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
