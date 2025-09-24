let listaNumeros = [];
let limite = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


mensagemInicial();

function arrumaTexto(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    arrumaTexto('h1', 'Número secreto');
    arrumaTexto('p', `Escolha um número de 1 a ${limite}`);

}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * limite + 1);

    if (listaNumeros.length == limite) {
        listaNumeros = [];
    }

    if (listaNumeros.includes(numeroGerado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeros.push(numeroGerado);
        return numeroGerado;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio && tentativas == 1) {
        arrumaTexto('h1', `Parabéns!`);
        arrumaTexto('p', ` Acertou de primeira!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute == numeroAleatorio && tentativas > 1) {
        arrumaTexto('h1', `Parabéns!`);
        arrumaTexto('p', ` Acertou em ${tentativas} tentativas!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute < numeroAleatorio) {
        arrumaTexto('p', 'Talvez um número maior...');
        tentativas++;
        limparCampo();

    } else {
        arrumaTexto('p', 'Talvez um número menor...');
        tentativas++;
        limparCampo();
    }

}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}