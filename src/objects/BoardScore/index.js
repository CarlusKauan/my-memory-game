import './style.css'
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import IconArrowDown from '../../components/IconArrowDown';
import VsScore from '../../components/VsScore';

function BoardScore(){
    return /*html*/ `
        ${IconArrowDown()}
        <header class="score-board">
            ${PlayerName('Player1')}
            ${PlayerScore()}
            ${VsScore()}
            ${PlayerScore()}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default BoardScore