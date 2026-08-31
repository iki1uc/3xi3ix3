// ======================================================
// KERNEL RESET · org → reorg · stabil · ALLROUNDER-kompatibel
// ======================================================
export function resetKernel(STATE, AXIS, ULTRA_PORT) {

  // 1) arg.sync – Synchronisationspunkt
  const arg = {
    sync: true,
    timestamp: Date.now(),
    mode: "REORG"
  };

  // 2) ORG – Ursprungszustand
  const org = {
    achsen: 820,
    connected: false,
    mode: "ORG",
    ultra: false,
    connectTime: 0,
    lastReset: Date.now(),
    modeHistory: ["ORG"]
  };

  // 3) REORG – neuer Zustand
  const reorg = {
    ...org,
    mode: "REORG",
    ultra: true,
    sync: arg,
    resetTime: performance.now(),
    modeHistory: [...org.modeHistory, "REORG"]
  };

  // 4) AXIS – sauber neu binden
  const newAxis = {
    base: () => reorg.achsen,
    x: () => Math.min(1500, reorg.achsen * 0.15),
    y: () => Math.min(1500, reorg.achsen * 0.15),
    z: () => Math.min(1500, reorg.achsen * 0.10)
  };

  // 5) ULTRA_PORT – sauber neu binden
  const newPort = {
    IN: ULTRA_PORT.IN,
    OUT: ULTRA_PORT.OUT,
    flow: (x) => {
      const base = ULTRA_PORT.flow(x);
      return {
        ...base,
        reset: true,
        sync: arg.sync,
        kernel: "REORG"
      };
    }
  };

  // 6) Rückgabe
  return {
    state: reorg,
    axis: newAxis,
    port: newPort,
    arg: arg,
    message: `🔄 KERNEL REORG · ${arg.timestamp} · sync=${arg.sync}`
  };
}
