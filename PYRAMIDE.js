// PYRAMIDE.js — verzahnte ULTRA‑Engine

export const PYRAMIDE = {
  MODE: 128,              // quantisierte Oberachse
  SPLIT: {
    LEFT: 64,             // quantisierte Teilachse
    RIGHT: 64             // quantisierte Teilachse
  },
  MERGE: {
    ENABLED: true,        // Rückführung erlaubt
    TYPE: "synchron"      // syn‑Bindung
  },
  TRACE: {
    ACTIVE: false,        // kein Drift‑Tracking
    LEVEL: 0              // absolute Ruhe
  },
  ENGINE: {
    TYPE: "ULTRA",        // ULTRA‑Kernel
    SWITCH: {
      FROM: "6E",         // Ober‑Ableitung
      TO: "6D",           // Tiefen‑Kernel
      TIME: 0             // instant syn‑Bindung
    },
    PREFETCH: {
      ZOOM: [1,3,6,9],    // quantisierte Zoom‑Achsen
      MODE: "ULTRA"       // syn‑Prefetch
    },
    SYNC: true            // syn‑Bindung aktiv
  }
};
