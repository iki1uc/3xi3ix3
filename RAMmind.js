// ======================================================
// PREFETCH_POS_ENGINE_MATRIX_SYNC.entkorrektor
// iki1uc Final-Kernel — ORG / REORG / NC
// ======================================================

export const PREFETCH_POS_ENGINE_MATRIX_SYNC = {

  // ----------------------------------------------
  // 1) ORG — POS-Schicht
  // ----------------------------------------------
  POS(x) {
    return {
      layer: [3, 6, 9],
      relation: ["3x3", "6x6", "9x9"],
      org: x
    };
  },

  // ----------------------------------------------
  // 2) REORG — ENGINE-Schicht
  // ----------------------------------------------
  ENGINE(x) {
    return {
      bind: ["9x9", "3x3", "6x6"],
      reorg: x * 0.33
    };
  },

  // ----------------------------------------------
  // 3) NC — MATRIX-Schicht
  // ----------------------------------------------
  MATRIX(x) {
    return {
      org:  { width: 9, height: 9 },
      reorg:{ zoom: [1, 3, 9] },
      nc:   { zoom: [6, 12, 18] },
      nc_value: x * 0.81
    };
  },

  // ----------------------------------------------
  // 4) RUN-3 — ORG → REORG → NC
  // ----------------------------------------------
  RUN3(x) {
    return {
      org: x,
      reorg: x * 0.33,
      nc: x * 0.81
    };
  },

  // ----------------------------------------------
  // 5) SYNC — Vollumfang
  // ----------------------------------------------
  SYNC(x) {
    const run = this.RUN3(x);

    return {
      pos: this.POS(run.org),
      engine: this.ENGINE(run.reorg),
      matrix: this.MATRIX(run.nc),
      run3: run
    };
  }
};
