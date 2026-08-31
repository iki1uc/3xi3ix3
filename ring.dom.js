// ======================================================
// ring.dom.js — Ring Visualisierung
// ======================================================
 
import { RING } from "./ring.js";

export function renderRingDOM(axiom, pipe, value = 1){

  const data = RING.build(axiom, pipe, value);

  const root = document.createElement("div");
  root.className = "ring-root";

  root.innerHTML = `
    <h2>EVO Ring</h2>
    <p>Segment: ${data.segment}</p>

    <h3>Goldene 6</h3>
    <p>OI: ${data.oi}</p>
    <p>IO: ${data.io}</p>
    <p>XI: ${data.xi}</p>
    <p>IX: ${data.ix}</p>
  `;

  return root;
}
