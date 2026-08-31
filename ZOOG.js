// ======================================================
// ZOOG.js — SUPER-ECHO Kernel
// ======================================================

import { EnergiePipeline } from "./energie.js";
import { buildAxiomPipelineMatrix } from "./sli.sys";

export const ZOOG = {

  // Super-Echo für eine einzelne Pipeline
  echo(pipe, value){
    const energy = EnergiePipeline(pipe, value);

    return {
      pipe,
      in: value,
      out: value + (energy * 0.33),   // Echo-Verstärkung
      energy
    };
  },

  // Super-Echo für gesamte 9×9 Matrix
  echoMatrix(value){
    const matrix = buildAxiomPipelineMatrix();

    return matrix.map(entry => {
      return {
        axiom: entry.axiom,
        pipe: entry.pipe,
        echo: this.echo(entry.pipe, value)
      };
    });
  }
};
