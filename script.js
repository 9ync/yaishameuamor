const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');
const volumeControl = document.getElementById('volumeControl');

let isPlaying = false;

playPauseBtn.addEventListener('click', function () {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶️';
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener('input', function () {
  audioPlayer.volume = volumeControl.value / 100;
});

function changeVolume(change) {
  let newVolume = audioPlayer.volume * 100 + change;
  if (newVolume > 100) newVolume = 100;
  if (newVolume < 0) newVolume = 0;
  audioPlayer.volume = newVolume / 100;
  volumeControl.value = newVolume;
}
