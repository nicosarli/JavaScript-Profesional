class AutoPause {
  constructor() {
    this.threshold = 0.3;
    // this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
  }

  // Si uso las Arrow Functions no necesito bindear en el constructor el this.handleIntersection.
  handleIntersection = (entries) => {
    const entry = entries[0];

    // const isVisible = entry.intersectionRatio >= this.threshold; --> a pata

    if (entry.isIntersecting) {
      // --> con un elemento del entry
      this.player.play();
    } else {
      this.player.pause();
    }

    // if (isVisible) {
    //   this.player.play();
    // } else {
    //   this.player.pause();
    // }
  };
}

export default AutoPause;
