import './style.css'

function VsScore(content = 'vs'){
    return /*html*/ `
    <span class="vs-player">${content}</span>
    `;
}

export default VsScore;