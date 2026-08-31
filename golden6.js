// ======================================================
// golden6.js — NC-geführter runder goldener 6-Kern
// ======================================================

import { CITY } from "./city.js";
import { RING } from "./ring.js";
import { MARKT } from "./markt.js";
import { WORK } from "./work.js";

export function GOLDEN6(value = 1, axiom = "ORG-RAW", pipe = 0){

  return {
    city: CITY.build(value),
    ring: RING.build(axiom, pipe, value),
    markt: MARKT.build(value),
    work: WORK.build(value),

    // goldene 6 Achsen
    oi: CITY.OI(value),
    io: CITY.IO(value),
    xi: CITY.XI(value),
    ix: CITY.IX(value),

    key: `G6::${axiom}::${pipe}::${value}`
  };
}
