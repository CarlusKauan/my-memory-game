import './style.css'
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';

function BoardGame(amountCard) {
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    return /*html*/ `
    <section class="board-game">
       ${$htmlCards}
    </section>
    `;
}

export default BoardGame;