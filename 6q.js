// ======================================================
// NC.engine — ULTRA-KERNEL / iki1uc
// ======================================================

export const NC = {

  engine: {

    // --------------------------------------------------
    // 1) RUN-STATE (ORG)
    // --------------------------------------------------
    run: {
      active: 0,
      mode: "IDLE",
      org: true,
      reorg: false,
      tmp: false,
      sync: false,
      axis: "ORG"
    },

    // --------------------------------------------------
    // 2) SWITCH 6E ↔ 6D (NC-ORG)
    // --------------------------------------------------
    switch: {
      from: "6E",
      to: "6D",
      mode: "ULTRA",
      time: 0,
      trace: false,
      lock: true,      // verhindert Drift
      tmp: true,       // stabilisiert NC
      sync: true,      // 6E/6D synchron
      axis: "NC-ORG"
    },

    // --------------------------------------------------
    // 3) NC-COMMAND (REORG)
    // --------------------------------------------------
    command(x) {
      return {
        tag: "NC-6D",
        depth: this.REORG(x),
        density: NC.engine.dichte(x),
        slide: NC.engine.slide(x),
        score: NC.engine.score(x),
        org: false,
        reorg: true,
        tmp: true,
        sync: true,
        axis: "REORG"
      };
    },

    // --------------------------------------------------
    // 4) DICHTE (NC-Feld)
    // --------------------------------------------------
    dichte(x) {
      return {
        tag: "DICHTE",
        value: x * 0.81,   // Bezug zu 81.room
        stable: x >= 9,
        axis: "NC-ORG"
      };
    },

    // --------------------------------------------------
    // 5) SLIDE-Vektor (NC-ORG)
    // --------------------------------------------------
    slide(x) {
      return {
        tag: "SLIDE",
        vec: {
          x: x * 0.33,
          y: x * 0.66,
          z: x * 0.99
        },
        axis: "NC-ORG"
      };
    },

    // --------------------------------------------------
    // 6) SCORE-Bewertung (NC-ORG)
    // --------------------------------------------------
    score(x) {
      const s = (x % 9) + (x % 7) + (x % 5);
      return {
        tag: "SCORE",
        value: s,
        verdict: s > 10 ? "ULTRA-STABIL" : "INSTABIL",
        axis: "NC-ORG"
      };
    },

    // --------------------------------------------------
    // 7) VALIDATOR (ORG + REORG + NC-ORG)
    // --------------------------------------------------
    validator(x) {
      return {
        org: this.ORG(x),
        reorg: this.REORG(x),
        ncorg: this.NCORG(x),
        axis: "ORG-REORG-NC",
        valid: x >= 0,
        tmp: false,
        sync: true
      };
    },

    // --------------------------------------------------
    // 8) AXIOME — ORG / REORG / NC-ORG
    // --------------------------------------------------
    ORG(x) {
      return x; // volle Achse
    },

    REORG(x) {
      return Math.min(756, 200 + x * 0.1); // geregelte Achse
    },

    NCORG(x) {
      return Math.min(1500, x); // Meta-Achse
    }
  }
};
