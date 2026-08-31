// ======================================================
// ULTRA-PORT — 6a6y6out IN/OUT
// ======================================================
const ULTRA_PORT = {

  IN: {
    ID: "ULTRA-6a6y6out",
    MODE: "ULTRA-IN",
    PORT: "BOOST-IN"
  },

  OUT: {
    ID: "ULTRA-6a6y6out",
    MODE: "ULTRA-OUT",
    PORT: "BOOST-OUT"
  },

  flow(x){
    return {
      id: this.IN.ID,
      mode: this.IN.MODE,
      in: this.IN.PORT,
      out: this.OUT.PORT,

      a: KIT.AXIOM["6a"](x),
      y: KIT.AXIOM["6y"](x, x),
      iy: KIT.AXIOM["6iy"](x),
      outState: KIT.AXIOM["6out"](x),

      ultra: KIT.ULTRA,
      axis: "ORG-REORG-NC",
      state: "ULTRA-PORT"
    };
  }
};
