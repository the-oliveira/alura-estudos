function alterarStatus(op) {
    let opcaoJogo = document.getElementById(`game-${op}`);
    let imgJogo = opcaoJogo.querySelector('.dashboard__item__img');
    let statusJogo = opcaoJogo.querySelector('.dashboard__item__button');

    if (imgJogo.classList.contains('dashboard__item__img--rented')) {

        statusJogo.classList.remove('dashboard__item__button--return');
        imgJogo.classList.remove('dashboard__item__img--rented');
        statusJogo.textContent = 'Alugar'

    } else {
        statusJogo.classList.add('dashboard__item__button--return')
        imgJogo.classList.add('dashboard__item__img--rented')
        statusJogo.textContent = 'Devolver'

    }
}