import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';
import BoardGame from './src/objects/BoardGame/';
import BoardScore from './src/objects/BoardScore';

// Consumindo a API DOM para manipular elementos HTML
const $root = document.querySelector("#root")
// chamando a $root, com insertAdjacent para adicionar um elemento !
$root.insertAdjacentHTML(
    "beforeend",
    `
        ${BoardScore()}
        ${BoardGame(6)}
    `
);