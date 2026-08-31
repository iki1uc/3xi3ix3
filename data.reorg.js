export const DATA_REORG = {
  ORG(x) {
    return x;
  },
  REORG(x) {
    return x * 0.33;
  },
  RUN(x) {
    return {
      org: this.ORG(x),
      reorg: this.REORG(x)
    };
  }
};

