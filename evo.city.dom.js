// ======================================================
// evo.city.dom.js — DOM Renderer für City
// ======================================================

import { CITY } from "./city.js";

export function renderCityDOM(value = 1){

  const data = CITY.build(value);

  const root = document.createElement("div");
  root.className = "city-root";
 
  root.innerHTML = `
    <h2>EVO City</h2>
    <p>Regen: ${data.regen.pulse}</p>
    <p>Flow: ${data.regen.flow}</p>
    <p>Evo: ${data.regen.evo}</p>

    <h3>Goldene 6</h3>
    <p>OI: ${data.oi}</p>
    <p>IO: ${data.io}</p>
    <p>XI: ${data.xi}</p>
    <p>IX: ${data.ix}</p>
  `;

  return root;
}
