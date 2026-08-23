// QUANT.js — reine quantisierte Werte

export const QUANT = {
  q1: 1,
  q3: 3,
  q6: 6,
  q9: 9,
  q18: 18,
  q27: 27,
  q64: 64,
  q128: 128
};

// QUANT‑Axiome (rein, ohne Bindung)
export const QUANT_AXIOM = {
  "6a": x => ({ tag: "6a", value: x }),
  "6y": x => ({ tag: "6y", compare: x }),
  "6iy": x => ({ tag: "6iy", state: x }),
  "6out": x => ({ tag: "6out", rise: x })
};

// QUANT‑Pipeline (rein, ohne Drift)
export function quantPipeline(x) {
  return {
    a: QUANT_AXIOM["6a"](x),
    y: QUANT_AXIOM["6y"](x),
    iy: QUANT_AXIOM["6iy"](x),
    out: QUANT_AXIOM["6out"](x)
  };
}
