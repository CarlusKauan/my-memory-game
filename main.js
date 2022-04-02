import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame/';

// Consumindo a API DOM para manipular elementos HTML
const $root = document.querySelector("#root")
// chamando a $root, com insertAdjacent para adicionar um elemento !
$root.insertAdjacentHTML(
    "beforeend",
    `
        ${PlayerName('Player 1')}
        ${PlayerName('Player 2')}
        ${BoardGame(6)}
    `
);