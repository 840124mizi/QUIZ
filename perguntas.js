const perguntas = [
    {
        pergunta: "Qual é o animal mais rápido do mundo?",
        opcoes: [
            "Guepardo",
            "Falcão-peregrino",
            "Cavalo",
            "Tubarão-branco"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "Quantos anos pode viver uma tartaruga-de-couro'?",
        opcoes: [
            "20 anos",
            "50 anos",
            "80 anos",
            "mais de 100 anos"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual é o maior mamifero marinho'?",
        opcoes: [
            " Tubarão-baleia",
            " orca ",
            "baleia-azul",
            "Golfinho"
        ],
        resposta: 1
    },
    {
        pergunta: "Quantos patas tem uma aranha?",
        opcoes: [
            "4",
            "6",
            "8",
            "10"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual é o animal conhecido por sua habilidades em construir baragens'?",
        opcoes: [
            " Lontra",
            " Castor",
            "Jacaré",
            "Tartaruga"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual animal pode regenerar partes do seu corpo'?",
        opcoes: [
            "Elefante",
            "Estrela-do-mar",
            "Golfinho",
            "Lobo"
        ],
        resposta: 1
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

