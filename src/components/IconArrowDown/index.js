import './style.css'

function IconArrowDown(currentPlayer = 1){
    return /*html*/ `
        <img 
        data-currentPlayer = "${currentPlayer}"
        src="../../../images/IconArrowDown.png" 
        class="arrow-down">
    `;
}


export default IconArrowDown