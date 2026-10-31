const dados = {

    yoongi: {

        tema: "roxo",

        foto: "../img/Yoongi perfil.jpg",

        nome: "Min Yoongi",

        papel: "Rapper • Produtor • BTS",

        bio: "Integrante do BTS, conhecido também como Agust D.",

        eventos: [

            {
                ano: "1993",
                titulo: "Nascimento",
                descricao: "Nasce em Daegu, Coreia do Sul."
            },

            {
                ano: "2010",
                titulo: "Entrada na BigHit",
                descricao: "Começa sua trajetória como trainee."
            },

            {
                ano: "2013",
                titulo: "Debut do BTS",
                descricao: "Estreia oficialmente com No More Dream.",
            },

            {
                ano: "2016",
                titulo: "Agust D",
                descricao: "Primeira mixtape solo."
            },

            {
                ano: "2023",
                titulo: "Turnê D-DAY",
                descricao: "Primeira turnê mundial solo."
            }

        ]
    },

    iverson: {

        tema: "laranja",

        foto: "../img/iverson perfil.jpg",

        nome: "Allen Iverson",

        papel: "Lenda da NBA",

        bio: "Um dos maiores armadores da história do basquete.",

        eventos: [

            {
                ano: "1975",
                titulo: "Nascimento",
                descricao: "Nasce em Hampton, Virgínia."
            },

            {
                ano: "1996",
                titulo: "Draft da NBA",
                descricao: "Escolha número 1 do Draft."
            },

            {
                ano: "1997",
                titulo: "Rookie do Ano",
                descricao: "Conquista o prêmio de melhor novato."
            },

            {
                ano: "2001",
                titulo: "MVP da NBA",
                descricao: "Melhor jogador da temporada.",
            },

            {
                ano: "2016",
                titulo: "Hall da Fama",
                descricao: "Entrada no Hall of Fame."
            }

        ]
    }
};

function carregarTimeline(pessoa) {

    const dadosPessoa = dados[pessoa];

    document.body.dataset.tema = dadosPessoa.tema;

    document.getElementById("fotoPerfil").src =
        dadosPessoa.foto;

    document.getElementById("nome").textContent =
        dadosPessoa.nome;

    document.getElementById("papel").textContent =
        dadosPessoa.papel;

    document.getElementById("bio").textContent =
        dadosPessoa.bio;

    const timeline =
        document.getElementById("timeline");

    const anos =
        document.getElementById("anos");

    timeline.innerHTML = "";
    anos.innerHTML = "";

    dadosPessoa.eventos.forEach(evento => {

        const btn =
            document.createElement("button");

        btn.textContent = evento.ano;

        btn.onclick = () => {

            document
                .getElementById("evento" + evento.ano)
                .scrollIntoView({
                    behavior: "smooth"
                });

        };

        anos.appendChild(btn);

        const card =
            document.createElement("div");

        card.classList.add("evento");

        card.id = "evento" + evento.ano;

        card.innerHTML = `
            <p class="ano">${evento.ano}</p>

            <p class="titulo">${evento.titulo}</p>

           

            <p class="descricao">
                ${evento.descricao}
            </p>

            ${evento.video
                ?
                `${evento.video}
                </iframe>`
                :
                ""
            }
        `;

        timeline.appendChild(card);

    });

}

carregarTimeline("yoongi");