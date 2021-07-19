const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el; //el = HTMLMediaElement. funciones de la api // el = video (html)
}

MediaPlayer.prototype.play = function () {
  //Util
  this.media.play();
}; // +

MediaPlayer.prototype.pause = function () {
  //Util
  this.media.pause();
}; // =

MediaPlayer.prototype.togglePlay = function () {
  //Metodo de la clase
  if (player.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};
const player = new MediaPlayer({ el: video });

button.onclick = () => player.togglePlay();
