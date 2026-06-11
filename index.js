document.addEventListener("DOMContentLoaded", () => {
    
    const frasesSnoopy = [
        "A vida é mais fácil se você apenas sorrir.",
        "Ontem eu era esperto, então queria mudar o mundo. Hoje sou sábio, então estou mudando a mim mesmo.",
        "Seja você mesmo, ninguém pode dizer que você está fazendo isso errado.",
        "O segredo da felicidade é ter um bom livro, um amigo e um estômago cheio!",
        "Penso que devo ser muito sortudo. Afinal, sou um cachorro!"
    ];

    const btnFrase = document.getElementById('btn-frase');
    const textoFrase = document.getElementById('texto-frase');

  
    if (!btnFrase || !textoFrase) {
        console.error("Erro: O JavaScript não encontrou os IDs 'btn-frase' ou 'texto-frase' no seu HTML.");
        return;
    }

    btnFrase.addEventListener('click', () => {
        const indiceAleatorio = Math.floor(Math.random() * frasesSnoopy.length);
        textoFrase.textContent = `"${frasesSnoopy[indiceAleatorio]}"`;
    });

});

document.addEventListener("DOMContentLoaded", () => {
    
    
    const frasesSnoopy = [
        "A vida é mais fácil se você apenas sorrir.",
        "Ontem eu era esperto, então queria mudar o mundo. Hoje sou sábio, então estou mudando a mim mesmo.",
        "Seja você mesmo, ninguém pode dizer que você está fazendo isso errado.",
        "O segredo da felicidade é ter um bom livro, um amigo e um estômago cheio!",
        "Penso que devo ser muito sortudo. Afinal, sou um cachorro!"
    ];

    const btnFrase = document.getElementById('btn-frase');
    const textoFrase = document.getElementById('texto-frase');

    if (btnFrase && textoFrase) {
        btnFrase.addEventListener('click', () => {
            const indiceAleatorio = Math.floor(Math.random() * frasesSnoopy.length);
            textoFrase.textContent = `"${frasesSnoopy[indiceAleatorio]}"`;
        });
    }


    
    
    
    const perguntasQuiz = [
        { q: "Qual é o nome do passarinho amarelo, melhor amigo do Snoopy?", options: ["Charlie Brown", "Woodstock", "Linus"], correct: 1 },
        { q: "Onde o Snoopy costuma dormir?", options: ["Dentro da casinha", "Na cama do Charlie Brown", "Em cima do teto da casinha"], correct: 2 },
        { q: "Quem é o dono do Snoopy?", options: ["Charlie Brown", "Schroeder", "Franklin"], correct: 0 },
        { q: "Qual é a raça do Snoopy?", options: ["Beagle", "Poodle", "Dálmata"], correct: 0 },
        { q: "Qual é a cor da famosa casinha do Snoopy?", options: ["Azul", "Amarela", "Vermelha"], correct: 2 }
    ];

    const containerPerguntas = document.getElementById('container-perguntas');
    const btnQuiz = document.getElementById('btn-enviar-quiz');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    
    if (containerPerguntas) {
        perguntasQuiz.forEach((pergunta, indexPergunta) => {
            let htmlPergunta = `
                <div class="card mb-3 p-3 shadow-sm">
                    <p class="fw-bold text-dark">${indexPergunta + 1}. ${pergunta.q}</p>
            `;
            
            pergunta.options.forEach((opcao, indexOpcao) => {
                htmlPergunta += `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pergunta${indexPergunta}" value="${indexOpcao}" id="q${indexPergunta}o${indexOpcao}">
                        <label class="form-check-label text-secondary" for="q${indexPergunta}o${indexOpcao}">
                            ${opcao}
                        </label>
                    </div>
                `;
            });

            htmlPergunta += `</div>`;
            containerPerguntas.innerHTML += htmlPergunta;
        });
    }

    
    if (btnQuiz && resultadoQuiz) {
        btnQuiz.addEventListener('click', () => {
            let acertos = 0;
            let respondeuTodas = true;

            perguntasQuiz.forEach((pergunta, indexPergunta) => {
                const selecionado = document.querySelector(`input[name="pergunta${indexPergunta}"]:checked`);
                
                if (!selecionado) {
                    respondeuTodas = false;
                } else {
                    if (parseInt(selecionado.value) === pergunta.correct) {
                        acertos++;
                    }
                }
            });

            if (!respondeuTodas) {
                alert("Por favor, responda todas as 5 perguntas antes de enviar!");
                return;
            }

          
            resultadoQuiz.style.display = "block";
            resultadoQuiz.innerHTML = `Você acertou <strong>${acertos} de 5</strong> perguntas!<br>`;
            
            if (acertos === 5) {
                resultadoQuiz.innerHTML += "🎉 Incrível! Você conhece tudo sobre o Snoopy!";
            } else if (acertos >= 3) {
                resultadoQuiz.innerHTML += "👍 Muito bom! Você teve um bom desempenho!";
            } else {
                resultadoQuiz.innerHTML += "🙃 Que tal rever as tirinhas e tentar de novo?";
            }
        });
    }

});

let htmlPergunta = `
    <div class="snoopy-card-coquette mb-3 p-3">
        <p class="fw-bold" style="color: #4a4a4a !important;">${indexPergunta + 1}. ${pergunta.q}</p>
`;