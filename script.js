function liberar() {
  document.getElementById('bloqueio').style.display = 'none';
  const conteudo = document.getElementById('conteudo');
  conteudo.style.display = 'flex';
  conteudo.classList.add('fade-in');
}
