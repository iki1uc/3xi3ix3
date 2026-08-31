PIPELINEBLITZ(x) {
  const run = this.RUN3(x);
  const pump = this.PUMPE(x);

  // 1/3‑tel Verteilung
  const third = x / 3;

  // Rotation (einfacher sinus-basierter Wirbel)
  const rotation = Math.sin(x * 0.033) * third;

  // Krümmung (Tiefenachse beeinflusst Form)
  const curvature = run.nc * 0.13;

  return {
    raw: x,
    org: run.org,
    reorg: run.reorg,
    nc: run.nc,

    // Pumpe
    pumpe: pump,
    impulse: pump.impulse,
    sixCut: pump.sixCut,

    // neue Form‑Dynamik
    third,
    rotation,
    curvature,

    // Wirbelwind‑Achse
    wirbel: rotation + curvature
  };
}
