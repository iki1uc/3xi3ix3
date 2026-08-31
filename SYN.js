export function SYN_AXES(STATE) {
  const raw = STATE.achsen;

  return {
    full: raw,                       // alle Achsen
    capped756: Math.min(756, raw),   // Imperium‑Limit
    capped1000: Math.min(1000, raw), // High‑Zoom
    capped1500: Math.min(1500, raw), // Ultra‑Zoom
    dynamic: Math.min(756, 200 + raw * 0.1), // goldene 0.1‑Zoomachse
    zoom: raw * 0.33,                // REORG‑Zoom
    ncZoom: raw * 0.81               // NC‑Zoom
  };
}
