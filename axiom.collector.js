// ======================================================
// AXIOM.COLLECTOR.js — sammelt AXIOM × PIPELINE × ENERGIE × ECHO × HALL
// ======================================================

import { buildAxiomPipelineMatrix } from "./sli.sys";
import { EnergieAxiomPipeline } from "./energie.js";
import { ZOOG } from "./ZOOG.js";
import { DRUUCK } from "./DRUUCK.js";

// Hauptsammler
export function AXIOM_COLLECTOR(value = 1){

  const matrix = buildAxiomPipelineMatrix();

  const collected = matrix.map(entry => {

    const energie = EnergieAxiomPipeline(entry.axiom, entry.pipe, value);
    const echo    = ZOOG.echo(entry.pipe, value);
    const hall    = DRUUCK.hall(entry.pipe, value);

    return {
      axiom: entry.axiom,
      pipe: entry.pipe,
      energie,
      echo,
      hall,
      key: `${entry.axiom}::${entry.pipe}`
    };
  });

  return collected;
}
