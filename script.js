"use strict";


/* ==================================================
   SELEÇÃO DOS ELEMENTOS
================================================== */


const botaoAnalisar = document.querySelector("#botao-analisar");
const resultadoAnalise = document.querySelector("#resultado-analise");


const botaoOrientacao = document.querySelector("#botao-orientacao");
const orientacao = document.querySelector("#orientacao");


const botaoAbrirModal = document.querySelector("#botao-abrir-modal");
const botaoFecharModal = document.querySelector("#botao-fechar-modal");
const botaoEntendi = document.querySelector("#botao-entendi");
const fundoModal = document.querySelector("#fundo-modal");


const anoAtual = document.querySelector("#ano-atual");


/* Guarda o elemento que estava selecionado antes da abertura do modal. */
let elementoAnteriormenteFocado = null;


/* ==================================================
   ANÁLISE DA MENSAGEM SUSPEITA
================================================== */


function analisarMensagem() {
    resultadoAnalise.innerHTML = `
        <h3>Esta mensagem apresenta vários sinais de golpe:</h3>


        <ul>
            <li>Apresenta um valor muito alto e inesperado.</li>
            <li>Tenta provocar medo e urgência.</li>
            <li>Solicita que o usuário clique em um link.</li>
            <li>Utiliza um endereço que não pertence a uma empresa conhecida.</li>
            <li>Não identifica corretamente quem enviou a mensagem.</li>
        </ul>


        <p>
            A ação mais segura é não clicar no link e verificar a informação
            diretamente no aplicativo ou site oficial da empresa.
        </p>
    `;


    resultadoAnalise.classList.add("visivel");


    botaoAnalisar.textContent = "Mensagem analisada";
    botaoAnalisar.disabled = true;
}


/* ==================================================
   ORIENTAÇÃO DE SEGURANÇA
================================================== */


function mostrarOrientacao() {
    orientacao.textContent =
        "Pare, pense e verifique antes de clicar. Empresas legítimas não solicitam senhas ou códigos de segurança por mensagens.";


    botaoOrientacao.textContent = "Orientação apresentada";
}


/* ==================================================
   CONTROLE DO MODAL
================================================== */


function abrirModal() {
    elementoAnteriormenteFocado = document.activeElement;


    fundoModal.classList.add("aberto");
    fundoModal.setAttribute("aria-hidden", "false");


    document.body.style.overflow = "hidden";


    botaoFecharModal.focus();
}


function fecharModal() {
    fundoModal.classList.remove("aberto");
    fundoModal.setAttribute("aria-hidden", "true");


    document.body.style.overflow = "";


    if (elementoAnteriormenteFocado) {
        elementoAnteriormenteFocado.focus();
    }
}


function fecharModalAoClicarNoFundo(evento) {
    if (evento.target === fundoModal) {
        fecharModal();
    }
}


function controlarTeclado(evento) {
    if (
        evento.key === "Escape" &&
        fundoModal.classList.contains("aberto")
    ) {
        fecharModal();
    }
}


/* ==================================================
   ANO DO RODAPÉ
================================================== */


function apresentarAnoAtual() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();


    anoAtual.textContent = `Ano: ${ano}`;
}


/* ==================================================
   EVENTOS
================================================== */


botaoAnalisar.addEventListener("click", analisarMensagem);


botaoOrientacao.addEventListener("click", mostrarOrientacao);


botaoAbrirModal.addEventListener("click", abrirModal);
botaoFecharModal.addEventListener("click", fecharModal);
botaoEntendi.addEventListener("click", fecharModal);


fundoModal.addEventListener("click", fecharModalAoClicarNoFundo);
document.addEventListener("keydown", controlarTeclado);


/* ==================================================
   INICIALIZAÇÃO
================================================== */


apresentarAnoAtual();

