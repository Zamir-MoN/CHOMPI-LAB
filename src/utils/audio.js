// Audio completely disabled - zero sound synthesis, zero AudioContext
class SoundFX {
  constructor() {
    this.enabled = false;
  }

  init() {}

  toggle() {
    return false;
  }

  pop() {}

  stickerStick() {}

  cartAdd() {}

  whoosh() {}
}

export const sound = new SoundFX();
