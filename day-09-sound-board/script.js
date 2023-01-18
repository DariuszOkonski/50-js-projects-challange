const songs = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");
const buttonStop = document.getElementById("button-stop");

buttonStop.addEventListener("click", () => {
  stopSong();
});

songs.forEach((song) => {
  const button = document.createElement("button");
  button.innerText = song;
  button.classList.add("btn");

  button.addEventListener("click", () => {
    stopSong();
    document.getElementById(song).play();
  });

  buttons.appendChild(button);
});

function stopSong() {
  songs.forEach((song) => {
    const currentSong = document.getElementById(song);
    currentSong.pause();
    currentSong.currentTime = 0;
  });
}

// song.play();
// song.pause();
// song.currentTime = 0;
