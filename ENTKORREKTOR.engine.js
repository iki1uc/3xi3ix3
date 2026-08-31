// ======================================================
// AXIOM.COLLECTOR.js — kompatible Edition für ENTKORREKTOR.engine
// sammelt AXIOM × PIPELINE × ENERGIE × ECHO × HALL × ENGINE
// ======================================================

import { buildAxiomPipelineMatrix } from "./sli.sys";
import { EnergieAxiomPipeline } from "./energie.js";
import { ZOOG } from "./ZOOG.js";
import { DRUUCK } from "./DRUUCK.js";
import { ENTKORREKTOR } from "./6x6y.js";

// Hauptsammler
export function AXIOM_COLLECTOR(value = 1){

  const matrix = buildAxiomPipelineMatrix();

  return matrix.map(entry => {

    const energie = EnergieAxiomPipeline(entry.axiom, entry.pipe, value);
    const echo    = ZOOG.echo(entry.pipe, value);
    const hall    = DRUUCK.hall(entry.pipe, value);

    // ENTKORREKTOR.engine Integration
    const engine  = ENTKORREKTOR.ENGINE(value);

    return {
      axiom: entry.axiom,
      pipe: entry.pipe,

      // Energie / Echo / Hall
      energie,
      echo,
      hall,

      // ENTKORREKTOR Engine
      engine,

      // eindeutiger Schlüssel
      key: `${entry.axiom}::${entry.pipe}`
    };
  });
}
