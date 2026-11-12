let modal = document.getElementById("meuModal");

let imagens = document.querySelectorAll(".foto img");

let imagemAmpliada = document.getElementById("imagemAmpliada");

imagens.forEach(function (imagem) {
  imagem.onclick = function () {
    modal.style.display = "grid";
    modal.style.placeItems = "center";
    modal.style.height = "100vh";
    modal.style.margin = 0;

    imagemAmpliada.src = this.src;
  };
});

let span = document.getElementsByClassName("fechar")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
