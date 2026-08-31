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

// ----------------------------------------------
// AUTORUN · Startet automatisch beim Laden
// ----------------------------------------------
function autorun(){
  connectGruppen();
  log("Gruppen verbunden.", "CONNECT");

  const sliRun3 = SLI_MASTER.ALL([
    { N:3, H:1, B:2, T:3 }
  ]);

  log("SLI-RUN3: " + sliRun3[0].core.ENGINE, "SLI");
  updateUI();
}

// Direkt starten
autorun();
