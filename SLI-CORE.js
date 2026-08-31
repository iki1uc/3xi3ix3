// ======================================================
// SLI-CORE.js — Imperium-Verstärker / 3x3x3-Engine
// ======================================================

// 1) N-SEQUENZEN — Rohmaterial für SLI
export const SLI_N = [
  { N:10, NC:"D", H:1, B:2,  T:3,  ID:10, RAW:"ULTRA-U" },
  { N:20, NC:"N", H:2, B:4,  T:6,  ID:20, RAW:"ULTRA-U" },
  { N:30, NC:"B", H:3, B:6,  T:9,  ID:30, RAW:"ULTRA-U" },
  { N:40, NC:"K", H:4, B:8,  T:12, ID:40, RAW:"ULTRA-U" },
  { N:50, NC:"I", H:5, B:10, T:15, ID:50, RAW:"ULTRA-U" },
  { N:60, NC:"X", H:6, B:12, T:18, ID:60, RAW:"ULTRA-U" },
  { N:70, NC:"M", H:7, B:14, T:21, ID:70, RAW:"ULTRA-U" },
  { N:80, NC:"S", H:8, B:16, T:24, ID:80, RAW:"ULTRA-U" },
  { N:90, NC:"U", H:9, B:18, T:27, ID:90, RAW:"ULTRA-U" }
];

// ------------------------------------------------------
// 2) SLI-PHYSIK — Verstärkerachsen
// ------------------------------------------------------
export const SLI_PHYSIK = {
  ROOT: x => Math.sqrt(x),        // Wurzelverstärker
  CURVE: x => Math.sin(x * 0.33), // Krümmungsverstärker
  WARP: x => Math.cos(x * 0.66),  // Raumverzug
  SIX: x => x * 6,                // goldene 6
  NC: x => x * 0.81,              // Tiefenverstärker
  ORBIT: x => x * 0.33,           // Orbitverstärker
  INFINITY: x => x * Infinity     // Unendlichkeitsverstärker
};

// ------------------------------------------------------
// 3) SLI-ENGINE — 3x3x3 Verstärker
// ------------------------------------------------------
export function SLI_ENGINE(entry) {
  const x = entry.N;

  return {
    CORE: {
      FUNCTION: "VERSTÄRKER",
      ENGINE: "3x3x3",
      BOOST: true
    },

    raw: entry,

    // Physikverstärker
    root: SLI_PHYSIK.ROOT(x),
    curve: SLI_PHYSIK.CURVE(x),
    warp: SLI_PHYSIK.WARP(x),

    // Matheverstärker
    nc: SLI_PHYSIK.NC(x),
    orbit: SLI_PHYSIK.ORBIT(x),
    six: SLI_PHYSIK.SIX(x),

    // Unendlichkeit
    infinite: SLI_PHYSIK.INFINITY(x),

    // 3x3x3 ENGINE
    engine3x3x3: {
      h: entry.H,
      b: entry.B,
      t: entry.T,
      cube: entry.T ** 3
    }
  };
}

// ------------------------------------------------------
// 4) SLI-MASTER — verarbeitet alle N-Stufen
// ------------------------------------------------------
export const SLI_MASTER = {
  ALL: SLI_N.map(SLI_ENGINE),
  MODE: "IMPERIUM-SLI",
  AXIS: "ORG-REORG-NC"
};
