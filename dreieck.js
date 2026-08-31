export const ENGINE_6E6D = {

  AXIOM(x) {
    return x;
  },
 
  PUMPE(x) {
    const sixCut = x / 6;
    const impulse = sixCut * 0.33;
    return { sixCut, impulse };
  },

  PIPELINE(x) {
    return {
      raw: x,
      org: x,
      reorg: x * 0.33,
      nc: x * 0.81
    };
  },

  NC(x) {
    return {
      depth: x,
      density: x * 0.81
    };
  }
};
