// importação do css
import './style.css';

// # Função
function CardGame(icon = 'alura-pixel', alt = "Logo da Alura") {
    return /*html */`
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;

/* # arrow Function
const CardGame = () => {}
*/

/* # Function sendo atribuida para uma variável 
const CardGame = function(){}
*/