// ======================================================
// evo.total.js — Manifest / Unmanifest Kernel
// ======================================================

export const EVO_TOTAL = {

  manifest(x){
    return {
      state: "manifest",
      value: x,
      pulse: x * 1.33
    };
  },

  unmanifest(x){
    return {
      state: "unmanifest",
      value: x,
      shadow: x * 0.33
    };
  },

  toggle(x, mode = "manifest"){
    return mode === "manifest"
      ? this.manifest(x)
      : this.unmanifest(x);
  }
};
