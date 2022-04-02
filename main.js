import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';
import PlayerTitle from './src/components/PlayerTitle';
import BoardGame from './src/objects/BoardGame/';

// Consumindo a API DOM para manipular elementos HTML
const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(5);
const $htmlPlayerTitle = PlayerTitle('Player 1') + PlayerTitle('Player 2')
// chamando a $root, com insertAdjacent para adicionar um elemento !
$root.insertAdjacentHTML("beforebegin", $htmlPlayerTitle)
$root.insertAdjacentHTML("beforeend", $htmlBoardGame)



