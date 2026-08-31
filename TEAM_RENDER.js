const STATE = {
  achsen: 820,
  connected: false,
  connectTime: 0,
  mode: "ALLROUNDER",
  ultra: true
};

document.getElementById('btnConnect').addEventListener('click', () => {
  connectGruppen();
  log('🔗 GRUPPEN · neu verbunden', 'ds9');
  updateUI();
});

function renderDevices(t){
  const devices = ["PX","PC","GHOST"];
  ...
}

function renderOrbit(t){
  const qAnime = ANIME_QUANT.get(t);
  const ultraFlow = ULTRA_PORT.flow(t);
  ...
}
