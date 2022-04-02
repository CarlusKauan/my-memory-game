import './style.css'
import CardGame from '../../components/CardGame'

function BoardGame(amountCard){
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCard)

    return `
    <section class="board-game">
       ${ $htmlContent }
    </section>
    `;
}

export default BoardGame;