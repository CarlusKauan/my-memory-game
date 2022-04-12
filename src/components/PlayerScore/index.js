import "./style.css"

function PlayerScore(points = 0) {
    return /*html*/ `
        <!--data pega o valor do parametro ! -->
        <ol class="player-score" data-points="${points}">
            <li class="pointer">1</li>
            <li class="pointer">2</li>
            <li class="pointer">3</li>
        </ol>
    `;
}

export default PlayerScore;