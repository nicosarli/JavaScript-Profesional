import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./Pluggins/AutoPlay";
import AutoPause from "./Pluggins/AutoPause";
import Ads from "./Pluggins/Ads";

const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

// muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error);
  });
}
