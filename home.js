// ======================================================
// PREFETCH.entkorrektor — iki1uc Final-Kernel
// ======================================================

export const PREFETCH = {

  ORG(x) {
    return x;
  },

  REORG(x) {
    return x * 0.33;
  },

  NC(x) {
    return x * 0.81;
  },

  RUN3(x) {
    return {
      org: this.ORG(x),
      reorg: this.REORG(x),
      nc: this.NC(x)
    };
  }
};
