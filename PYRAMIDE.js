// ======================================================
// PYRAMIDE.js — iki1uc ULTRA-SUITE / Pipeline / PUMPE
// ======================================================

export const PYRAMIDE = {

  // --------------------------------------------------
  // 1) MODE — Oberachse / quantisiert
  // --------------------------------------------------
  MODE: 128,
  AXIS: "ORG-REORG-NC",

  // --------------------------------------------------
  // 2) SPLIT — quantisierte Teilachsen
  // --------------------------------------------------
  SPLIT: {
    LEFT: 64,
    RIGHT: 64,
    axis: "REORG",
    competence: "TEILACHSE"
  },

  // --------------------------------------------------
  // 3) MERGE — Rückführung / syn-Bindung
  // --------------------------------------------------
  MERGE: {
    ENABLED: true,
    TYPE: "synchron",
    axis: "NC-ORG"
  },

  // --------------------------------------------------
  // 4) TRACE — Drift / Ruhe
  // --------------------------------------------------
  TRACE: {
    ACTIVE: false,
    LEVEL: 0,
    axis: "ORG"
  },

  // --------------------------------------------------
  // 5) ENGINE — ULTRA-KERNEL
  // --------------------------------------------------
  ENGINE: {
    TYPE: "ULTRA",
    SWITCH: {
      FROM: "6E",
      TO: "6D",
      TIME: 0,
      axis: "NC-ORG"
    },
    PREFETCH: {
      ZOOM: [1, 3, 6, 9],
      MODE: "ULTRA",
      axis: "ORG-REORG-NC"
    },
    SYNC: true
  },

  // --------------------------------------------------
  // 6) PIPELINE — Kraftstofffluss / Routing
  // --------------------------------------------------
  PIPELINE: {
    ROUTE(x) {
      return {
        raw: x,
        org: x * 1,
        reorg: x * 0.33,
        nc: x * 0.81,
        axis: "ORG-REORG-NC"
      };
    },
    competence: "ROUTING",
    axis: "ORG-REORG-NC"
  },

  // --------------------------------------------------
  // 7) PUMPE
