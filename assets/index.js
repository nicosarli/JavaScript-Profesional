import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./Pluggins/AutoPlay.js";
import AutoPause from "./Pluggins/AutoPause.js";

const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#muteButton");
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
