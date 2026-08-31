// ======================================================
// ALLROUNDER · AXIS-SCALE · x / y / z
// ======================================================
export const AXIS = {

  // Grundwert aus STATE
  base: STATE.achsen,

  // x‑Achse skaliert
  x(){
    return Math.min(1500, this.base * 0.15);
  },

  // y‑Achse skaliert
  y(){
    return Math.min(1500, this.base * 0.15);
  },

  // z‑Achse skaliert (Orbit‑Tiefe)
  z(){
    return Math.min(1500, this.base * 0.10);
  }
};
