import './style.css'
import CardGame from '../CardGame'


function CardFrontBack(icon, altIcon) {
    // função global !
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        // se a classe existe, remove senão adiciona.
        /*
        if ($cardFrontBack.classList.contains('-active')) {
            $cardFrontBack.classList.remove('-active')
        } else {
            $cardFrontBack.classList.add('-active')
        }
        */
        // toggle = verificar se a classe existe, se sim remove, senão adiciona.
        $cardFrontBack.classList.toggle('-active');
    }

    return /*html*/ `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>
        </article>        
    `;
}

export default CardFrontBack