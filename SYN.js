// ======================================================
// SYN.js — neue Synchronisation / Messung / Krümmung / Pumpe
// ======================================================

// 1) SYN — reine Flags
export const SYN = {
  ALL: true,
  ULTRA: true,
  ENGINE: true,
  MATRIX: true,
  ROTATION: true,
  WURZEL: true,        // neue Achse
  KRÜMMUNG: true,      // neue Achse
  WAHRSCHEINLICHKEIT: true // goldene 6
};

// 2) SYN‑Engine — jetzt mit echter Messlogik
export const SYN_ENGINE = {
  MODE: "ULTRA-KERNEL",
  SWITCH: { from: "6E", to: "6D", time: 0 },

  // neue Messachsen
  ROOT: x => Math.sqrt(x),          // Wurzel‑Pumpe
  CURVE: x => Math.sin(x * 0.33),   // Krümmung
  WARP: x => Math.cos(x * 0.66),    // Raumverzug

  // goldene 6 — Wahrscheinlichkeitsachse
  SIX: x => x * 6,

  PREFETCH: { zoom: [1,3,6
