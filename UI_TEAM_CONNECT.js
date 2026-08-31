const TEAMS = {
  1: { name: "Team 1", members: [], pipeline: null },
  2: { name: "Team 2", members: [], pipeline: null },
  3: { name: "Team 3", members: [], pipeline: null }
};

// 3×3 AXIOM: [ORG, REORG, NCORG] × [RAW, FLOW, ENGINE]

const AXIOM = {
  axes: ["ORG", "REORG", "NCORG"],
  layers: ["RAW", "FLOW", "ENGINE"],
  matrix(){
    const out = [];
    this.axes.forEach(axis => {
      this.layers.forEach(layer => {
        out.push({ axis, layer });
      });
    });
    return out;
  }
};

function connectAxiom(){
  const axiomMatrix = AXIOM.matrix();
  log("🔗 AXIOM 3×3 aktiviert", "AXIOM");

  axiomMatrix.forEach(entry => {
    log(`→ ${entry.axis}-${entry.layer}`, "AXIOM");
  });

  updateUI();
}

document.getElementById('btnConnect').addEventListener('click', () => {
  connectAxiom();
});
