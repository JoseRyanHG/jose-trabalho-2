document.addEventListener("DOMContentLoaded", () => {
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices-container");
    const startBtn = document.getElementById("start-btn");

    const steps = [
        { text: "Você está na véspera de Natal e encontra um mapa misterioso. O que você faz?", choices: ["Seguir o mapa", "Ignorar e assistir TV"] },
        { text: "Você decide seguir o mapa e encontra uma casa antiga. O que você faz?", choices: ["Entrar na casa", "Voltar para casa"] },
        { text: "Dentro da casa, você encontra uma chave dourada. O que você faz?", choices: ["Usar a chave na porta ao fundo", "Levar a chave e sair"] },
        { text: "Você usa a chave e encontra um baú cheio de presentes. O que você faz?", choices: ["Abrir o baú", "Levar o baú para casa"] },
        { text: "Você decide abrir o baú e encontra um bilhete. O que você faz?", choices: ["Ler o bilhete", "Ignorar o bilhete"] },
        { text: "O bilhete diz que você deve entregar os presentes a um grupo de crianças. O que você faz?", choices: ["Seguir as instruções", "Deixar os presentes e voltar"] },
        { text: "Você segue as instruções e entrega os presentes. As crianças ficam muito felizes. O que você faz?", choices: ["Voltar para casa", "Explorar mais a cidade"] },
        { text: "Você decide explorar mais e encontra uma festa de Natal. O que você faz?", choices: ["Participar da festa", "Voltar para casa"] },
        { text: "Você participa da festa e conhece novos amigos. O que você faz?", choices: ["Ficar na festa", "Voltar para casa"] },
        { text: "Você decide ficar na festa e se diverte muito. O que você faz?", choices: ["Ficar até o final", "Sair cedo"] },
        { text: "Você fica até o final e todos se despedem. O que você faz?", choices: ["Ir para casa feliz", "Ir para casa triste"] },
        { text: "Você volta para casa feliz e passa um ótimo Natal. Fim da história.", choices: [] },
        { text: "Você volta para casa triste e acaba assistindo TV sozinho. Fim da história.", choices: [] },
        { text: "Você volta para casa e acaba com um sentimento de perda. Fim da história.", choices: [] },
        { text: "Você volta para casa feliz e encontra sua família esperando por você. Fim da história.", choices: [] },
        { text: "Você volta para casa e encontra uma surpresa de Natal deixada por um amigo. Fim da história.", choices: [] },
        { text: "Você decide explorar mais a cidade e encontra um evento especial de Natal. O que você faz?", choices: ["Participar do evento", "Voltar para casa"] },
        { text: "Você participa do evento e se sente muito realizado. Fim da história.", choices: [] },
        { text: "Você volta para casa e percebe que a noite de Natal foi inesquecível. Fim da história.", choices: [] },
    ];

    let currentStep = 0;

    function renderStep(stepIndex) {
        if (stepIndex >= steps.length) return;

        const step = steps[stepIndex];
        storyText.innerText = step.text;
        choicesContainer.innerHTML = '';

        step.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.addEventListener("click", () => {
                currentStep = stepIndex + 1;
                if (currentStep >= steps.length) {
                    currentStep = steps.length - 1;
                }
                renderStep(currentStep);
            });
            choicesContainer.appendChild(button);
        });
    }

    startBtn.addEventListener("click", () => {
        startBtn.style.display = 'none';
        renderStep(currentStep);
    });
});