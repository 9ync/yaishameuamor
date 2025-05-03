function liberar() {
  document.getElementById('bloqueio').style.display = 'none';
  document.getElementById('conteudo').classList.remove('oculto');
}

const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');
const volumeControl = document.getElementById('volumeControl');

let isPlaying = false;

playPauseBtn.addEventListener('click', function () {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener('input', function () {
  audioPlayer.volume = volumeControl.value / 100;
});
