// ======================================================
// CITY.js — Brain-Regen-Kernel
// ======================================================

import { ENTKORREKTOR } from "./ENTKORREKTOR.engine.js";

export const CITY = {

  // Regen ohne Ebbe
  regen(x){
    return {
      pulse: x * 2.33,
      flow: x * 1.11,
      evo: x * 1.81
    };
  },

  // Goldene 6 Erweiterungen
  OI(x){ return ENTKORREKTOR.ORG(ENTKORREKTOR.REORG(x)); }
  IO(x){ return ENTKORREKTOR.REORG(ENTKORREKTOR.ORG(x)); }
  XI(x){ return ENTKORREKTOR.NC(ENTKORREKTOR.REORG(x)); }
  IX(x){ return ENTKORREKTOR.REORG(ENTKORREKTOR.NC(x)); }

  // City-Output
  build(x){
    return {
      regen: this.regen(x),
      oi: this.OI(x),
      io: this.IO(x),
      xi: this.XI(x),
      ix: this.IX(x)
    };
  }
};
