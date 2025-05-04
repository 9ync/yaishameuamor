function liberar() {
  document.getElementById('bloqueio').style.display = 'none';
  document.getElementById('conteudo').classList.remove('oculto');

  // Reproduz música de fundo
  const audio = new Audio('musica.mp3');
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();
}
