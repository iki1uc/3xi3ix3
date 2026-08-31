const TEAMS = {
  1: { name: "Team 1", members: [], pipeline: null },
  2: { name: "Team 2", members: [], pipeline: null },
  3: { name: "Team 3", members: [], pipeline: null }
};

function connectTeam(id){
  TEAMS[id].connected = true;
  TEAMS[id].connectTime = performance.now();
  log(`🔗 ${TEAMS[id].name} verbunden`, "TEAM");
}

function assignPipeline(id, pipe){
  TEAMS[id].pipeline = pipe;
  log(`PIPELINE → ${TEAMS[id].name}`, "PIPE");
}

document.getElementById('btnTeam1').addEventListener('click', () => connectTeam(1));
document.getElementById('btnTeam2').addEventListener('click', () => connectTeam(2));
document.getElementById('btnTeam3').addEventListener('click', () => connectTeam(3));
