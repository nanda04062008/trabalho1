const perguntas = [
    {
        pergunta: "Quem escreveu 'Dom Casmurro'?",
        opcoes: [
            "Machado de Assis",
            "Joaquim Manuel de Macedo",
            "José de Alencar",
            "Clarice Lispector"
        ],
        resposta: 0 // índice da resposta correta
    },
    {
        pergunta: "O que é reforma agraria?",
        opcoes: [
            "Distribuição igualitaria de terras,retirando o excesso dos maiores fazendeiros e distribuindo para os menores",
            "Reformas de fazendas para a centralização de plantio de cana de açucar",
            "",
            "Teatro"
        ],
        resposta: 0
    },
    {
        pergunta: "Como se iniciou a Ditadura Militar no Brasil?",
        opcoes: [
            "Aluísio Azevedo",
            "José de Alencar",
            "Machado de Assis",
            "Carlos Drummond de Andrade"
        ],
        resposta: 1
    },
    {
        pergunta: "Quem foi Jango e como ele saiu do poder?",
        opcoes: [
            "Iracema",
            "Senhora",
            "O Guarani",
            "Memórias Póstumas de Brás Cubas"
        ],
        resposta: 2
    },
    {
        pergunta: "O que foi a Marcha da Familia com Deus pela Liberdade e o que defendiam?",
        opcoes: [
            "Marcha religiosa realizada pelo Pe. Marcelo Rossi",
            "Manifestação ",
            "Carlos Drummond de Andrade",
            "Um protesto realizado pelos cidadãos brasileiros contra Jango e contra seus ideais 'comunistas'"
        ],
        resposta: 3
    },
    {
        pergunta: "O que acontecia com os opositores do governo durante a Ditadura?",
        opcoes: [
            "1890",
            "1888",
            "1892",
            "1889"
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
