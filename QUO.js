const ANIME_QUANT = {

  frames: [
    "img/anime01.png",
    "img/anime02.png",
    "img/anime03.png",
    "img/anime04.png",
    "img/anime05.png",
    "img/anime06.png",
    "img/anime07.png",
    "img/anime08.png",
    "img/anime09.png"
  ],

  cache: [],

  get(t){
    const idx = Math.floor((t * 10) % this.frames.length);

    // Cache-Bild erzeugen, falls nicht vorhanden
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
