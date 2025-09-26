alert('Bem-vindo ao Jogo do número secreto!');

let limite = 1000;
let numeroSecreto = parseInt(Math.random() * limite + 1);
let chute;
let cont = 0


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${limite}`);
    cont++;
    
    if (chute == numeroSecreto && cont == 1) {
        alert(`Acertou de primeira! O número era ${chute}`)
        break;
    } else if (chute == numeroSecreto) {
        alert(`Acertou! o número era ${chute} e você fez ${cont} tentativa(s)`);
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('Chutou alto!');
        } else {
            alert('Chutou baixo!');
        }
    }
}

