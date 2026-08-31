// ======================================================
// ALLROUNDER · AXIS-SCALE · x / y / z
// ======================================================
export const AXIS = {

  base(){
    return STATE.achsen;
  },

  x(){
    return Math.min(1500, this.base() * 0.15);
  },

  y(){
    return Math.min(1500, this.base() * 0.15);
  },

  z(){
    return Math.min(1500, this.base() * 0.10);
  }
};
export const sliRun3 = SLI_MASTER.ALL([
  { N:3, H:1, B:2, T:3 }
]);
