// Menu mobile!!

const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

menuBtn.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});