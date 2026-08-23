// KIT.JS — ULTRA‑Kernel kompatibel
// Version: 6a6y6out.MODE

// ---------------------------------------------
// AXIOME
// ---------------------------------------------
const AXIOM = {
  "6a":  x => ({ moment: x, tag: "Augenblick" }),
  "6y":  (a,b) => ({ compare: [a,b], tag: "so_wie" }),
  "6iy": x => ({ state: x, tag: "ist_soll" }),
  "6out": x => ({ rise: x, tag: "Aufstieg" })
};

// ---------------------------------------------
// ULTRA ENGINE CORE
// ---------------------------------------------
const ULTRA = {
  MODE: "ULTRA-KERNEL",
  SWITCH: { from: "6E", to: "6D", time: 0 },
  MATRIX: { width: 9, height: 9 },
  ACHSE: [9,18,27],
  VERDICHTUNG: "3xi3ix3",
  PREFETCH: { mode: "ULTRA", zoom: [1,3,6,9] },
  SYNC: true
};

// ---------------------------------------------
// 9HOCH9 — MATRIX GENERATOR
// ---------------------------------------------
function nineByNine(x, y) {
  return {
    IN:  { x, y, dir: "horizontal" },
    OUT: { x, y, dir: "vertikal" },
    BREITE: 9,
    TIEFE: 9,
    ANCHOR: 1,
    MYSTER: true
  };
}

// ---------------------------------------------
// 3x3 — AXIOM ENGINE
// ---------------------------------------------
function threeByThree(mode="DA") {
  return {
    AXIOM: mode,
    ZOOM: [1,3,9],
    BEST: { SCORE: 100, MODE: "ULTRA-SCORE", CORE: ["S","M","U"] }
  };
}

// ---------------------------------------------
// 6E6D — TIEFEN-KERNEL
// ---------------------------------------------
function sixE6D(level=6) {
  return {
    ABLEITUNG: "U",
    KERNEL: "Tiefen-Kernel",
    ZOOM: [level, level*2, level*3],
    BOOST: true
  };
}

// ---------------------------------------------
// RESPO‑S333 — ROTATION
// ---------------------------------------------
const RESPO = {
  ROTATION: ["DA","NE","BEN","AI","IX","XI","DA"],
  MRON: {
    TP3: "DA",
    TP6: "NE",
    TP9: "BEN",
    TPK: ["AI","IX","XI"]
  },
  IMPULS333: { DA:3, NE:3, BEN:3 }
};

// ---------------------------------------------
// 6a6y6out — STATE PIPELINE
// ---------------------------------------------
function pipeline(x) {
  const a = AXIOM["6a"](x);
  const y = AXIOM["6y"](x, x);
  const iy = AXIOM["6iy"](x);
  const out = AXIOM["6out"](x);

  return { a, y, iy, out };
}

// ---------------------------------------------
// EXPORT
// ---------------------------------------------
export const KIT = {
  AXIOM,
  ULTRA,
  RESPO,
  nineByNine,
  threeByThree,
  sixE6D,
  pipeline
};

