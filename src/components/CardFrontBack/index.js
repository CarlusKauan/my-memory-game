import './style.css'
import CardGame from '../CardGame'

function CardFrontBack(){
    return /*html*/ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-html", "Logo do HTML")}
            ${CardGame("logo-css", "Logo do CSS")}
            ${CardGame("logo-javascript", "Logo do JavaScript")}
        </article>        
    `;
}

export default CardFrontBack