// ======================================================
// QUANT.engine — Axiom / Pumpe / Pipeline / NC / Krümmung
// ======================================================

export const QUANT_ENGINE = {

  // --------------------------------------------------
  // 1) AXIOM — reine Wahrheit
  // --------------------------------------------------
  AXIOM(x) {
    return {
      tag: "QUANT-AXIOM",
      value: x,
      proof: true,
      axis: "ORG"
    };
  },

  // --------------------------------------------------
  // 2) PUMPE — Antrieb / Kraftstoff
  // --------------------------------------------------
  PUMPE(x) {
    const sixCut = x / 6;
    const curvature = Math.sqrt(x * 6.66);

    return {
      tag: "QUANT-PUMPE",
      sixCut,
      curvature,
      impulse: sixCut * 0.33,
      axis: "REORG"
    };
  },

  // --------------------------------------------------
  // 3) PIPELINE — Kraftstofffluss
  // --------------------------------------------------
  PIPELINE(x) {
    return {
      tag: "QUANT-PIPELINE",
      raw: x,
      org: x * 1,
      reorg: x * 0.33,
      nc: x * 0.81,
      axis: "ORG-REORG-NC"
    };
  },

  // --------------------------------------------------
  // 4) NC-ANTRIEB — Tiefenachse
  // --------------------------------------------------
  NC(x) {
    return {
      tag: "QUANT-NC",
      depth: x * 1.5,
      density: x * 0.81,
      infinite: x * Infinity,
      axis: "NC-ORG"
    };
  },

  // --------------------------------------------------
  // 5) KRÜMM
