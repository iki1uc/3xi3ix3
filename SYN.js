// ======================================================
// SYN.js — Imperium-SYN / Physik / Mathe / Synthese
// ======================================================

// 1) Flags — reine Imperium-Schalter
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

// ------------------------------------------------------
// 2) Physik + Mathe — echte Antworten im Code
// ------------------------------------------------------
export const SYN_PHYSIK = {

  // Geschwindigkeit (klassisch)
  v: (s, t) => s / t,

  // Beschleunigung
  a: (v, t) => v / t,

  // Energie (klassisch)
  E: m => m * 0.81, // Imperium-Energie = NC-Dichte

  // Wurzel-Pumpe (Mathe)
  ROOT: x => Math.sqrt(x),

  // Krümmung (Sinus)
  CURVE: x => Math.sin(x * 0.33),

  // Raumverzug (Cosinus)
  WARP: x => Math.cos(x * 0.66),

  // goldene 6 —
