function mostrarMural() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("conteudo").classList.remove("oculto");
}

function ativarMural(el) {
  el.classList.toggle("ativo");
}
