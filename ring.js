// ======================================================
// RING.js — EVO-Ring-Kernel
// ======================================================

import { ENTKORREKTOR } from "./ENTKORREKTOR.engine.js";

export const RING = {

  segment(axiom, pipe){
    return `${axiom}::${pipe}`;
  },

  // Goldene 6 Erweiterungen
  OI(x){ return ENTKORREKTOR.ORG(ENTKORREKTOR.REORG(x)); }
  IO(x){ return ENTKORREKTOR.REORG(ENTKORREKTOR.ORG(x)); }
  XI(x){ return ENTKORREKTOR.NC(ENTKORREKTOR.REORG(x)); }
  IX(x){ return ENTKORREKTOR.REORG(ENTKORREKTOR.NC(x)); }

  build(axiom, pipe, value){
    return {
      segment: this.segment(axiom, pipe),
      oi: this.OI(value),
      io: this.IO(value),
      xi: this.XI(value),
      ix: this.IX(value)
    };
  }
};
