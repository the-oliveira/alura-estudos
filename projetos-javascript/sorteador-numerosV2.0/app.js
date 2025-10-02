function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicio = parseInt(document.getElementById("de").value);
    let fim = parseInt(document.getElementById("ate").value);
    let listaNum = [];
    let i = 0;

    if (inicio > fim) {
        alert('O inicio deve ser menor que o final.')
    } else if (quantidade > inicio + fim) {
        alert('Digite um intervalo maior.')
    } else {
        while (i < quantidade) {
            let num_gerado = numeroAleatorio(inicio, fim);
            if (!listaNum.includes(num_gerado)) {
                listaNum.push(num_gerado);
                i++;
            }
        }

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNum}</label>`
        habilitarReinicio();
    }


}


function numeroAleatorio(inicio, fim) {
    let num = Math.floor(Math.random() * (fim - inicio + 1) + inicio);
    return num
}

function habilitarReinicio() {
    let btnreiniciar = document.getElementById('btn-reiniciar');
    if (btnreiniciar.classList.contains('container__botao-desabilitado')) {
        btnreiniciar.classList.remove('container__botao-desabilitado');
        btnreiniciar.classList.add('container__botao');
    } else {
        btnreiniciar.classList.remove('container__botao');
        btnreiniciar.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    habilitarReinicio();
}   