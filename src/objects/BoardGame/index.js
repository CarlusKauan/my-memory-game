import './style.css'
import CardGame from '../../components/CardGame'

function BoardGame(amountCard){
    const $htmlCardGame = CardGame()
    const $htmlBoardGame = $htmlCardGame.repeat(amountCard)

    return $htmlBoardGame;
}

export default BoardGame;