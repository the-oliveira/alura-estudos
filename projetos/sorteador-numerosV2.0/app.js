function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicio = parseInt(document.getElementById("de").value);
    let fim = parseInt(document.getElementById("ate").value);
    let listaNum = [];
    let i = 0;

    while (i < quantidade) {
        let num_gerado = numeroAleatorio(inicio, fim);
        listaNum.push(num_gerado);
        i++;
    }

    alert(listaNum)
}


function numeroAleatorio(inicio, fim) {
    let num = Math.floor(Math.random() * (fim - inicio + 1) + inicio);
    return num
}

function reiniciar() {

}