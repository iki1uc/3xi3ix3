// ======================================================
// NC.engine — Vollumfang iki1uc / ULTRA-KERNEL
// ======================================================

export const NC = {

  engine: {

    // --------------------------------------------------
    // 1) RUN-STATE
    // --------------------------------------------------
    run: {
      active: 0,
      mode: "IDLE",
      tmp: false,
      sync: false
    },

    // --------------------------------------------------
    // 2) SWITCH 6E ↔ 6D
    // --------------------------------------------------
    switch: {
      from: "6E",
      to: "6D",
      mode: "ULTRA",
      time: 0,
      trace: false,
      lock: true     // verhindert Drift
    },

    // --------------------------------------------------
    // 3) NC-COMMAND (6D)
    // --------------------------------------------------
    command(x) {
      return {
        tag: "NC-6D",
        depth: x,
        density: NC.engine.dichte(x),
        slide: NC.engine.slide(x),
        score: NC.engine.score(x),
        tmp: true,
        sync: true
      };
    },

    // --------------------------------------------------
    // 4) DICHTE (NC-Feld)
    // --------------------------------------------------
    dichte(x) {
      return {
        tag: "DICHTE",
        value: x * 0.81,   // Bezug zu 81.room
        stable: x >= 9
      };
    },

    // --------------------------------------------------
    // 5) SLIDE-Vektor
    // --------------------------------------------------
    slide(x) {
      return {
        tag: "SLIDE",
        vec: {
          x: x * 0.33,
          y: x * 0.66,
          z: x * 0.99
        }
      };
    },

    // --------------------------------------------------
    // 6) SCORE-Bewertung
    // --------------------------------------------------
    score(x) {
      const s = (x % 9) + (x % 7) + (x % 5);
      return {
        tag: "SCORE",
        value: s,
        verdict: s > 10 ? "ULTRA-STABIL" : "INSTABIL"
      };
    },

    // --------------------------------------------------
    // 7) VALIDATOR (NC-Feld / 3×3 / 9×9)
    //
