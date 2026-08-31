// ======================================================
// SYN.js — Imperium-SYN / Physik / Mathe / Antwortkernel
// ======================================================

// --------------------------------------------------
// 1) Flags — Imperium-Schalter
// --------------------------------------------------
export const SYN = {
  ALL: true,
  ENGINE: true,
  MATRIX: true,
  ROTATION: true,
  WURZEL: true,
  KRÜMMUNG: true,
  WAHRSCHEINLICHKEIT: true,
  UNENDLICHKEIT: true,
  RUN: true,
  ZOOM: true
};

// --------------------------------------------------
// 2) Physik — echte mathematische Achsen
// --------------------------------------------------
export const SYN_PHYSIK = {

  // Wurzel-Pumpe (Physik)
  ROOT(x) {
    return Math.sqrt(x);
  },

  // Krümmung (Geometrie)
  CURVE(x) {
    return Math.sin(x * 0.33);
  },

  // Raumverzug (Kosmologie)
  WARP(x) {
    return Math.cos(x * 0.66);
  },

  // Wahrscheinlichkeitsachse (goldene 6)
  SIX(x) {
    return x * 6;
  },

  // Unendlichkeit (∞-Achse)
  INFINITY(x) {
    return
