import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';
import PlayerTitle from './src/components/PlayerTitle';

// Consumindo a API DOM para manipular elementos HTML
const $root = document.querySelector("#root")
const $htmlCardGame = CardGame() + CardGame() + CardGame() + CardGame() + CardGame() + CardGame();
const $htmlPlayerTitle = PlayerTitle('Player 1') + PlayerTitle('Player 2')
// chamando a $root, com insertAdjacent para adicionar um elemento !
$root.insertAdjacentHTML("beforebegin", $htmlPlayerTitle)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)



