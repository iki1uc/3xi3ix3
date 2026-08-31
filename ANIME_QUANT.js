const ANIME_QUANT = {

  frames: [
    "anime/anime01.png",
    "anime/anime02.png",
    "anime/anime03.png",
    "anime/anime04.png",
    "anime/anime05.png",
    "anime/anime06.png",
    "anime/anime07.png",
    "anime/anime08.png",
    "anime/anime09.png"
  ],

  cache: [],

  get(t){
    const idx = Math.floor((t * 10) % this.frames.length);

    if (!this.cache[idx]) {
      const img = new Image();
      img.src = this.frames[idx];
      this.cache[idx] = img;
    }

    return {
      anime: this.frames[idx],
      img: this.cache[idx],
      index: idx,
      axis: "ANIME-QUANT",
      mode: "ULTRA-ANIME"
    };
  }
};
