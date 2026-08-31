// ======================================================
// ANIME-QUANT — Anime-Frames statt Symbole
// ======================================================
const ANIME_QUANT = {

  frames: [
    "ANIME-FRAME-01",
    "ANIME-FRAME-02",
    "ANIME-FRAME-03",
    "ANIME-FRAME-04",
    "ANIME-FRAME-05",
    "ANIME-FRAME-06",
    "ANIME-FRAME-07",
    "ANIME-FRAME-08",
    "ANIME-FRAME-09"
  ],

  get(t){
    const idx = Math.floor((t * 10) % this.frames.length);
    return {
      anime: this.frames[idx],
      index: idx,
      axis: "ANIME-QUANT",
      mode: "ULTRA-ANIME"
    };
  }
};
