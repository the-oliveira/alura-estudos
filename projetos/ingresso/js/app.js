
function comprar(){

    let op = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let total = document.getElementById(`qtd-${op}`);
    let novoTotal =  parseInt(total.textContent) - parseInt(quantidade);

    if (quantidade > 10 || quantidade < 0){
        alert('Quantidade inválida, digite novamente (0 a 10)');

    } else if (novoTotal > 0){
        total.innerText = `${parseInt(total.textContent) - parseInt(quantidade)}`;

    } else {
        alert('Sem ingressos disponíveis para a opção!');
        
    }
}