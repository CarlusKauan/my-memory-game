import './style.css'

function PlayerName(content){
    return /*html*/`
    <div class="container">
        <p class="Player-title">${content}</p>
    </div>
    `;
}

export default PlayerName;