// ======================================================
// JOB.js — iki1uc Arbeits-Kernel
// ======================================================

import { AXIOM_COLLECTOR } from "./axiom.collector.js";
import { ENTKORREKTOR_INFRA } from "./ENTKORREKTOR.INFRA.js";

// Job-Task: Grundaufgabe
function JOB_TASK(entry){
  return {
    axiom: entry.axiom,
    pipe: entry.pipe,
    key: entry.key,
    task: `${entry.axiom}::${entry.pipe}::TASK`
  };
}

// Job-Flow: Echo + Hall
function JOB_FLOW(entry){
  return {
    echo: entry.echo,
    hall: entry.hall,
    flowKey: `${entry.key}::FLOW`
  };
}

// Job-Engine: Energie + ENTKORREKTOR
function JOB_ENGINE(entry, value){
  return {
    energie: entry.energie,
    engine: entry.engine,
    engineKey: `${entry.key}::ENGINE`,
    value
  };
}

// Job-Infra: Rohr + Schloss + Ingenieur
function JOB_INFRA(value){
  return {
    infra: ENTKORREKTOR_INFRA(value),
    infraKey: `INFRA::${value}`
  };
}

// Job-Markt: Markt + Leben
function JOB_MARKT(value){
  const infra = ENTKORREKTOR_INFRA(value);
  return {
    markt: infra.markt,
    leben: infra.leben,
    marktKey: `MARKT::${value}`
  };
}

// Haupt-JOB-Generator
export function JOB(value = 1){

  const collected = AXIOM_COLLECTOR(value);

  return collected.map(entry => {

    return {
      // Grunddaten
      axiom: entry.axiom,
      pipe: entry.pipe,
      key: entry.key,

      // Job-Schichten
      task: JOB_TASK(entry),
      flow: JOB_FLOW(entry),
      engine: JOB_ENGINE(entry, value),
      infra: JOB_INFRA(value),
      markt: JOB_MARKT(value),

      // EVO-Ring + Pyramide
      ring: entry.ring,
      pyramid: entry.pyramid
    };
  });
}
