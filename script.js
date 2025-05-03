function mostrarMensagem() {
  document.getElementById("mensagem").innerText =
    "eu te amo princesa 🤍";
}

function liberarSite() {
  document.getElementById("entrada").style.display = "none";
  const conteudo = document.getElementById("conteudoSite");
  conteudo.classList.remove("oculto");
  conteudo.classList.add("revelado");
}
