let listaNomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let listaHTML = document.getElementById('lista-amigos');
    if (nome.value) {
        if (listaNomes.includes(nome.value)) {
            alert('Nome já adicionado!')
        } else {
            listaNomes.push(nome.value);
            if (listaHTML.textContent == '') {
                listaHTML.textContent = nome.value;
            } else {
                listaHTML.textContent = listaHTML.textContent + ', ' + nome.value;
            }
        }
    } else {
        alert('Digite um valor válido.')
    }

    nome.value = '';
}


function sortear() {
    
    if (listaNomes.length < 4){ 
        alert('Adicione mais pessoas a lista antes de continuar!');
        return;
    } 
    embaralhaLista(listaNomes);
    listaSorteio = document.getElementById('lista-sorteio');


    for (let indice = 0; indice < listaNomes.length; indice++) {
        if (indice == listaNomes.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[indice] + ' --> ' + listaNomes[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[indice] + ' --> ' + listaNomes[indice + 1] + '<br>';
        }

    }
}

function embaralhaLista(lista) {
    for (let i = lista.length; i; i--) {

        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio] =
            [lista[indiceAleatorio], lista[i - 1]]];
    }
}

function reiniciar() {
    listaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
    listaHTML = document.getElementById('lista-amigos').innerHTML = '';
    listaNomes = [];
}

