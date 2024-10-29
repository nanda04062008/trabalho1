const perguntas = [
    {
        pergunta: "O que foi a Ditadura Militar no Brasil?",
        opcoes: [
            "Governo de Jango",
            "Regime Cívil Militar ocorrido em meados da decada de 70",
            "Livro publicado por Janio Quadros em1962 ",
            "Regime liderado exlusivamente por militares no Brasil em meados de 1970"
        ],
        resposta: 1 // índice da resposta correta
    },
    {
        pergunta: "O que é reforma agraria?",
        opcoes: [
            "Distribuição igualitaria de terras,retirando o excesso dos maiores fazendeiros e distribuindo para os menores",
            "Reformas de fazendas para a centralização de plantio de cana de açucar",
            "Sistema adquirido pelo Brasil em 2007",
            "Atual reforma protestante"
        ],
        resposta: 0
    },
    {
        pergunta: "Como se iniciou a Ditadura Militar no Brasil?",
        opcoes: [
            "Com o assassinato de Jango",
            "em 2016 durante o governo Temer",
            "Atravez do medo da ameaça do Paraguay por disputa territorial",
            "Com os militares tomando o poder do país contando com o apoio da população"
        ],
        resposta: 3
    },
    {
        pergunta: "Quem foi Jango?",
        opcoes: [
            "Foi diretor do jornal Brasil Diario, e lider do movimento armado no Brasil",
            "Presidente do Brasil, conhecido por seus discursos e ideais considerados 'Comunistas' ",
            "Militar que liderava o regime durante oos primeiros anos (1964-1969)",
            "Principal opositor do regime militar"
        ],
        resposta: 1
    },
    {
        pergunta: "O que foi a Marcha da Familia com Deus pela Liberdade e o que defendiam?",
        opcoes: [
            "Marcha religiosa realizada pelo Pe. Marcelo Rossi",
            "Manifestação ",
            "Campanha contra a Covid-19",
            "Um protesto realizado pelos cidadãos brasileiros contra Jango e contra seus ideais 'comunistas'"
        ],
        resposta: 3
    },
    {
        pergunta: "O que acontecia com os opositores do governo durante a Ditadura?",
        opcoes: [
            "Ganhavam uma medalha de bravura",
            "Podiam se candidatar a cargos politicos",
            "Eram obrigados a deixar o país",
            "Eram mortos e torturados"
        ],
        resposta: 3
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
