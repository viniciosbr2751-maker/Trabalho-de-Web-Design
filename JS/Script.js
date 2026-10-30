// Nav responsiva 

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});





