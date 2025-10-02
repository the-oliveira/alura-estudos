let total = 0;
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade');
    let produtosCarrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    let arrayProduto = produto.value.replace('R$', '').split('-');
    let subTotal = quantidade.value > 0 ? parseInt(arrayProduto[1]) * quantidade.value : parseInt(arrayProduto[1]) * 1;

    produtosCarrinho.innerHTML +=
        `
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade.value}x</span> ${arrayProduto[0]} 
        <span class="texto-azul">R$${subTotal}</span>
        </section>
        `;

    total += subTotal;
    valorTotal.textContent = `R$ ${total}`;
    quantidade.value = 0;

}

function limpar() {

    total = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';
}