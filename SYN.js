// SYN.js — reine Synchronisation

export const SYN = {
  ALL: true,
  ULTRA: true,
  ENGINE: true,
  MATRIX: true,
  ROTATION: true
};

// SYN‑Engine (Bindung ohne Zahlen)
export const SYN_ENGINE = {
  MODE: "ULTRA-KERNEL",
  SWITCH: { from: "6E", to: "6D", time: 0 },
  PREFETCH: { zoom: [1,3,6,9] },
  SYNC: SYN.ALL
};

// SYN‑Pipeline (Bindung ohne Werte)
export function synPipeline(tag) {
  return {
    tag,
    sync: true,
    engine: SYN_ENGINE.MODE,
    switch: SYN_ENGINE.SWITCH
  };
}
