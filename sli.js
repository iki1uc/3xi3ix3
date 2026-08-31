export const SLI_CORE = {
  FUNCTION: "VERSTÄRKER",
  ENGINE: "3x3x3",
  BOOST: true,

  amplify(x) {
    return {
      root: Math.sqrt(x),
      curve: Math.sin(x * 0.33),
      warp: Math.cos(x * 0.66),
      nc: x * 0.81,
      orbit: x * 0.33,
      six: x * 6,
      infinite: x * Infinity
    };
  }
};
