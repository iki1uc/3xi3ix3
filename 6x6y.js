// ======================================================
// NC.engine — Vollumfang iki1uc / ULTRA-KERNEL
// ======================================================

export const NC = {

  engine: {

    // --------------------------------------------------
    // 1) SENSE-LAYER
    // --------------------------------------------------
    sense: {
      aura: "MOTORIC.FIELD",
      mana: "MOTORIC.IMPULSE",
      meta: false,
      sync: true,
      tmp: false
    },

    // --------------------------------------------------
    // 2) CUBE-LAYER (6-SLOT)
    // --------------------------------------------------
    cube: {
      mode: "6-SLOT",
      faces: [1,2,3,4,5,6],
      motoric: true,
      relevance: "NC6",
      density: 0.81
    },

    // --------------------------------------------------
    // 3) NODE-LAYER
    // --------------------------------------------------
    layer: {
      I: "SELF.NODE",
      YOU: "EXTERNAL.NODE",
      OUR: "SHARED.NODE",
      EAR: "RECEIVE.NODE",
      sync: true
    },

    // --------------------------------------------------
    // 4) RUN-STATE
    // --------------------------------------------------
    run: {
      active: 3,
      mode: "GLOBAL",
      tmp: true,
      sync: true
    },

    // --------------------------------------------------
    // 5) SWITCH 6E ↔ 6D
    // --------------------------------------------------
    switch: {
      from: "6E",
      to: "6D",
      mode: "ULTRA",
      time: 0,
      trace: false,
      lock: true,     // verhindert Drift
      tmp: true       // stabilisiert NC
    },

    // --------------------------------------------------
    // 6) NC-COMMAND (6D)
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
    // 7) DICHTE (NC-Feld)
    // --------------------------------------------------
    dichte(x) {
      return {
        tag: "DICHTE",
        value: x * 0.81,   // Bezug zu 81.room
        stable: x >= 9
      };
    },

    // --------------------------------------------------
    // 8) SLIDE-Vektor
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
    // 9) SCORE-Bewertung
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
    // 10) VALIDATOR (NC-Feld / 3×3 / 9×9)
    // --------------------------------------------------
    validate() {
      return {
        nc: true,
        matrix3: true,
        matrix9: true,
        drift: false,
        tmp: true
      };
    },

    // --------------------------------------------------
    // 11) TRIGGER — Vollumfang
    // --------------------------------------------------
    trigger(rtrigger) {

      if (rtrigger === true) {

        // Aktivieren
        NC.engine.run.active = 3;
        NC.engine.run.mode = "GLOBAL";
        NC.engine.run.tmp = true;
        NC.engine.run.sync = true;

        // Switch vorbereiten
        const sw = NC.engine.switch;

        // NC-Kommando erzeugen
        const cmd = NC.engine.command(27);

        // Validierung
        const val = NC.engine.validate();

        // Rückgabe
        return {
          trigger: true,
          switch: sw,
          command: cmd,
          validate: val,
          mode: "GLOBAL",
          active: 3
        };
      }

      return {
        trigger: false,
        mode: "IDLE",
        active: 0
      };
    }
  }
};
