// ======================================================
// SLI.js — Imperium-SLI / Verstärker / 3x3x3-Engine
// ======================================================

// 1) SLI-CORE — deine Konfiguration
export const SLI_CORE = {
  FUNCTION: "VERSTÄRKER",
  ENGINE: "3x3x3",
  BOOST: true
};

// ------------------------------------------------------
// 2) SLI-PHYSIK — echte Verstärkerachsen
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
// 3) SLI-MATHE — Imperium-Formeln
// ------------------------------------------------------
export const SLI_MATHE = {
  CUBE3: x => x ** 3,
  ZOOM: x => x * 0.33,
  NC_ZOOM: x => x * 0.81
};

// ------------------------------------------------------
// 4) SLI-ENGINE — verarbeitet N10–N90
// ------------------------------------------------------
export function SLI_ENGINE(entry) {
  const x = entry.N;

  return {
    core: SLI_CORE,
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
      cube: SLI_MATHE.CUBE3(entry.T)
    }
  };
}

// ------------------------------------------------------
// 5) SLI-MASTER — verarbeitet alle Stufen
// ------------------------------------------------------
export const SLI_MASTER = {
  MODE: "IMPERIUM-SLI",
  AXIS: "ORG-REORG-NC",

  ALL(entries) {
    return entries.map(SLI_ENGINE);
  }
};
