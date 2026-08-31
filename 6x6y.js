// ======================================================
// NC.engine — ULTRA-KERNEL / iki1uc (kohärent richtig)
// ======================================================

export const NC = {

  engine: {

    // --------------------------------------------------
    // 1) SENSE-LAYER (ORG)
    // --------------------------------------------------
    sense: {
      aura: "MOTORIC.FIELD",
      mana: "MOTORIC.IMPULSE",
      org: true,
      reorg: false,
      meta: false,
      sync: true,
      tmp: false,
      axis: "ORG"
    },

    // --------------------------------------------------
    // 2) CUBE-LAYER (NC-ORG)
    // --------------------------------------------------
    cube: {
      mode: "6-SLOT",
      faces: [1,2,3,4,5,6],
      motoric: true,
      relevance: "NC6",
      density: 0.81,
      axis: "NC-ORG"
    },

    // --------------------------------------------------
    // 3) NODE-LAYER (REORG)
    // --------------------------------------------------
    layer: {
      I: "SELF.NODE
