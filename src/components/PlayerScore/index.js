import './style.css'

function PlayerScore(points = 0) {
    return /*html*/ `
        // data pegar o valor !
        <ol data-points="${points}">
            <li class="player-score-bg">1</li>
            <li class="player-score-bg-green">2</li>
            <li class="player-score-bg-green">3</li>
        </ol>
    `;
}

export default PlayerScore;