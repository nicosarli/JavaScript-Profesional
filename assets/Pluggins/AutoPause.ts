import MediaPlayer from '../MediaPlayer';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

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

    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  // Si uso las Arrow Functions no necesito bindear en el constructor el this.handleIntersection.
  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
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

  private handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };
}

export default AutoPause;
