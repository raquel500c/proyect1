// ----- LOGICA -----------//
var dice = new Dice(6);
var token = new Token();
var board = new Board();

// console.log("Position Inicio: " + token.position);
// var diceRoll = dice.roll();
// console.log("Tirada dado: " + diceRoll);
// var newPosition = token.move(dice.roll());
// console.log("Nueva posicion : " + newPosition);
board._renderToken(token.move(dice.roll()));

console.log(board.squares);


// ------ HTML -CSS -------------//
$(document).ready(function() {
  $("").on("click", function() {

  });
});
