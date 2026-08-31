// ======================================================
// ALLROUNDER · AXIS-SCALE · x / y / z
// ======================================================
const AXIS = {

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
