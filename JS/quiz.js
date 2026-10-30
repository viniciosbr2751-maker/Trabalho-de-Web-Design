// Nav responsiva !!

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("flotante");
    } else {
        header.classList.remove("flotante");
    }

});

// Parte dos quiz abaixo!! 

let score = 0;
let respondidas = 0;
let totalPerguntas = 0;

const quizzes = {

    yoongi: {

        banner: "img/banner-yoongi.jpg",

        perguntas: [
            {
                pergunta: "Em que ano o BTS estreou?",
                opcoes: ["2011", "2013", "2015"],
                correta: 1
            },
            {
                pergunta: "Qual é o nome artístico solo de Yoongi?",
                opcoes: ["Agust D", "Jin", "RM"],
                correta: 0
            },
            {
                pergunta: "Qual álbum solo foi lançado em 2023?",
                opcoes: ["D-Day", "Map of the Soul", "Proof"],
                correta: 0
            }
        ]
    },

    iverson: {

        banner: "img/banner-iverson.jpg",

        perguntas: [
            {
                pergunta: "Qual era o apelido de Allen Iverson?",
                opcoes: ["The Answer", "The King", "The Hero"],
                correta: 0
            },
            {
                pergunta: "Em qual liga ele jogou?",
                opcoes: ["NFL", "NBA", "MLB"],
                correta: 1
            },
            {
                pergunta: "Qual era sua posição principal?",
                opcoes: ["Pivô", "Armador", "Ala-pivô"],
                correta: 1
            }
        ]
    }
};

function carregarQuiz(nome) {

    document.querySelector(".barra").style.display = "block";
    document.getElementById("escolha").style.display = "none";

    document.body.classList.remove("yoongi", "iverson");
    document.body.classList.add(nome);

    score = 0;
    respondidas = 0;

    const quiz = quizzes[nome];

    totalPerguntas = quiz.perguntas.length;

    const banner = document.getElementById("banner");
    banner.style.display = "block";
    banner.style.backgroundImage = `url(${quiz.banner})`;

    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    quiz.perguntas.forEach((q, index) => {

        let html = `
        <div class="question">
            <h3>${index + 1}. ${q.pergunta}</h3>
        `;

        q.opcoes.forEach((opcao, i) => {
            html += `
                <button onclick="verificar(this,${i},${q.correta})">
                   ${opcao}
                </button>
            `;
        });

        html += `</div>`;

        container.innerHTML += html;
    });

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("voltar").style.display = "none";
    document.getElementById("progresso").style.width = "0%";
}

function verificar(botao, resposta, correta) {

    const pergunta = botao.parentElement;

    if (pergunta.classList.contains("respondida")) {
        return;
    }

    pergunta.classList.add("respondida");

    const botoes = pergunta.querySelectorAll("button");

    botoes.forEach(btn => btn.disabled = true);

    if (resposta === correta) {

        score++;
        botao.classList.add("correct");

    } else {

        botao.classList.add("wrong");

        botoes[correta].classList.add("correct");
    }

    respondidas++;

    const porcentagem =
        (respondidas / totalPerguntas) * 100;

    document.getElementById("progresso").style.width =
        porcentagem + "%";

    if (respondidas === totalPerguntas) {

        let mensagem;

        if (score === totalPerguntas) {
            mensagem = "🏆 Perfeito! Você acertou tudo!";
        }
        else if (score >= totalPerguntas / 2) {
            mensagem = "👏 Muito bem!";
        }
        else {
            mensagem = "📚 Hora de estudar mais!";
        }

        document.getElementById("resultado").innerHTML = `
            ${mensagem}<br>
            Pontuação: ${score}/${totalPerguntas}
        `;

        document.getElementById("voltar").style.display =
            "block";

        
    }
}

function voltarInicio() {
   document.querySelector(".barra").style.display = "none";
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("banner").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("voltar").style.display = "none";

    document.body.classList.remove("yoongi", "iverson");

    document.getElementById("escolha").style.display = "block";
}

