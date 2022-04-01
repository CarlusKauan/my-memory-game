import CardGame from './src/components/CardGame';

// Consumindo a API DOM para manipular elementos HTML
const $root = document.querySelector("#root")
const $htmlCardGame = CardGame();

// chamando a $root, com insertAdjacent para adicionar um elemento !
$root.insertAdjacentHTML("beforeend", $htmlCardGame)



