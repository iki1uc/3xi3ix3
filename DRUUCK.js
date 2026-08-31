// ======================================================
// DRUUCK.js — SUPER-HALL Kernel
// ======================================================

import { EnergiePipeline } from "./energie.js";
import { buildAxiomPipelineMatrix } from "./sli.sys";

export const DRUUCK = {

  // Super-Hall für eine Pipeline
  hall(pipe, value){
    const energy = EnergiePipeline(pipe, value);

    return {
      pipe,
      in: value,
      out: value + (energy * 0.81),   // Hall-Tiefe
      depth: energy * 1.11,
      energy
    };
  },

  // Super-Hall für gesamte 9×9 Matrix
  hallMatrix(value){
    const matrix = buildAxiomPipelineMatrix();

    return matrix.map(entry => {
      return {
        axiom: entry.axiom,
        pipe: entry.pipe,
        hall: this.hall(entry.pipe, value)
      };
    });
  }
};
