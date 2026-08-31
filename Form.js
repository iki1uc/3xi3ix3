AXIOM(x) {
  return x;
}
PUMPE(x) {
  const sixCut = x / 6;
  const impulse = sixCut * 0.33;
  return { sixCut, impulse };
}
PIPELINE(x) {
  return {
    raw: x,
    org: x,
    reorg: x * 0.33,
    nc: x * 0.81
  };
}
axiom: {
  ORG(x) { return x; }
},

R128(x) {
  return {
    org: this.axiom.ORG(x),
    axis: "R128"
  };
}
