// ======================================================
// ROUNDLER · AXIS-SCALE · x / y / z
// ======================================================

const ROUNDLER = {

  base(){
    return Math.sqrt(STATE.achsen);
  },

  smooth(v){
    return v * 0.9 + this.base() * 0.1;
  },

  round(v){
    return Math.round(v);
  },

  circle(t){
    return {
      x: Math.sin(t) * AXIS.x(),
      y: Math.cos(t) * AXIS.y(),
      z: AXIS.z()
    };
  },

  orbitShift(t){
    return {
      x: this.round(Math.sin(t) * AXIS.x()),
      y: this.round(Math.cos(t) * AXIS.y()),
      z: this.round(AXIS.z())
    };
  }
};
