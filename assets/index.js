import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./Pluggins/AutoPlay.js";

const video = document.querySelector("video");

const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({
  el: video,
  plugins: [
    //new AutoPlay()
  ],
});

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
