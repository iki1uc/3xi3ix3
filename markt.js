// ======================================================
// MARKT.js — Markt-Lebensraum-Kernel
// ======================================================

import { ENTKORREKTOR_INFRA } from "./ENTKORREKTOR.INFRA.js";

export const MARKT = {

  // Markt + Leben aus INFRA
  base(x){
    const infra = ENTKORREKTOR_INFRA(x);
    return {
      markt: infra.markt,
      leben: infra.leben
    };
  },

  // Goldene 6 Erweiterungen
  OI(x){ return ENTKORREKTOR_INFRA(x).markt.demand * 1.11; }
  IO(x){ return ENTKORREKTOR_INFRA(x).markt.supply * 0.81; }
  XI(x){ return ENTKORREKTOR_INFRA(x).leben.evo * 1.33; }
  IX(x){ return ENTKORREKTOR_INFRA(x).leben.regen * 0.66; }

  build(x){
    return {
      base: this.base(x),
      oi: this.OI(x),
      io: this.IO(x),
      xi: this.XI(x),
      ix: this.IX(x)
    };
  }
};
