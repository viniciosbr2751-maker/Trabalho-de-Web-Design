const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});







// Menu 

const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

menuBtn.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});
