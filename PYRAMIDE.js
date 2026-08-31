// ======================================================
// PYRAMIDE.entkorrektor — iki1uc Final-Kernel
// ORG / REORG / NC / PUMPE / PIPELINE / ENGINE
// ======================================================

export const PYRAMIDE = {

  // ----------------------------------------------
  // 1) ORG — Rohachse
  // ----------------------------------------------
  ORG(x) {
    return x;
  },

  // ----------------------------------------------
  // 2) REORG — Regelachse
  // ----------------------------------------------
  REORG(x) {
    return x * 0.33;
  },

  // ----------------------------------------------
  // 3) NC — Tiefenachse
  // ----------------------------------------------
  NC(x) {
    return x * 0.81;
  },

  // ----------------------------------------------
  // 4) PUMPE — Antrieb
  // ----------------------------------------------
  PUMPE(x) {
    const sixCut = x / 6;
    return {
      sixCut,
      impulse: sixCut * 0.33
    };
  },

  // ----------------------------------------------
  // 5) PIPELINE — ORG → REORG → NC
  // ----------------------------------------------
  PIPELINE(x) {
    return {
      org: this.ORG(x),
      reorg: this.REORG(x),
      nc: this.NC(x)
    };
  },

  // ----------------------------------------------
  // 6) RUN — 21 / 42 (Halb / Voll)
  // ----------------------------------------------
  RUN(x) {
    return {
      half: {
        energy: x * 0.5,
        pipeline: x / 21,
        pumpe: Math.sqrt(x),
        nc: this.NC(x),
        orbit: x * 0.33
      },
      full: {
        energy: x,
        pipeline: x / 42,
        pumpe: Math.sqrt(x * 2),
        nc: this.NC(x) * 2,
        orbit: x * 0.66
      }
    };
  },

  // ----------------------------------------------
  // 7) NCAXIOM — höchste Wahrheitsschicht
  // ----------------------------------------------
