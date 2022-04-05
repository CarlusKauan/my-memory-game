import './style.css'
import CardGame from '../CardGame'

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("logo-javascript", "Logo do JavaScript")}
            </div>
        </article>        
    `;
}

export default CardFrontBack