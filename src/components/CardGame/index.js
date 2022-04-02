// importação do css
import './style.css';

// # Função
function CardGame() {
    return /*html */`
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-game"> 
                <div class="flip-card-front">
                    <img src="images/alura-pixel.png" alt="Logo da Alura">
                </div>     
                <div class="flip-card-back">
                    <img src="images/alura-pixel.png" alt="Logo Js">
                </div>
            </div>
        </div>
    </div>
    `;
}

export default CardGame;

/* # arrow Function
const CardGame = () => {}
*/

/* # Function sendo atribuida para uma variável 
const CardGame = function(){}
*/