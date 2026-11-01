// Nav responsiva 

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});

//CARDS E VIDEOS

function abrirVideo(idVideo, botao){

    const card =
    botao.closest(".conteudo");

    card
    .querySelector(".texto")
    .classList
    .add("esconder");

    document
    .getElementById(idVideo)
    .classList
    .add("ativo");
}

function fecharVideo(idVideo){

    const video =
    document.getElementById(idVideo);

    const conteudo =
    video.parentElement;

    conteudo
    .querySelector(".texto")
    .classList
    .remove("esconder");

    video
    .classList
    .remove("ativo");
}