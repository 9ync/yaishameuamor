function liberar() {
  document.getElementById('bloqueio').style.display = 'none';
  document.getElementById('conteudo').classList.remove('oculto');

  const audio = new Audio('musica.mp3');
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();
}
