import './style.css'
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import IconArrowDown from '../../components/IconArrowDown';
import VsScore from '../../components/VsScore';

function BoardScore(){
    return /*html*/ `
    <header class="score-board">
        ${IconArrowDown(2)}
        ${PlayerName('Player1')}
        ${PlayerScore(2)}
        ${VsScore()}
        ${PlayerScore(2)}
        ${PlayerName('Player2')}
    </header>
    `;
}

export default BoardScore