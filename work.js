// ======================================================
// WORK.js — Arbeits-Kernel
// ======================================================

import { JOB } from "./job.js";

export const WORK = {

  // Grundarbeit
  base(x){
    return JOB(x);
  },

  // Goldene 6 Erweiterungen
  OI(x){ return x * 1.11; }
  IO(x){ return x * 0.33; }
  XI(x){ return x * 1.81; }
  IX(x){ return x * 0.66; }

  build(x){
    return {
      job: this.base(x),
      oi: this.OI(x),
      io: this.IO(x),
      xi: this.XI(x),
      ix: this.IX(x)
    };
  }
};
