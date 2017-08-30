// ----- INSTANCIAS OBJETOS-----------//

var board = new Board(64);
var dice = new Dice(6);
var token = new Token('rojo', board);
console.log(board.squares);
//para Mover ficha desde consola ---> board._renderToken(token.move(dice.roll()));

// ------ HTML - CSS -------------//

$(document).ready(function() {
  var $container = $('.main');
  dice.initRender($container);
  board.initRender($container);
  token.initRender($container);

  $('#roll').on("click", function() {

    var numDice = dice.roll();
    //muestro resultado en dado
    $('#dice').text(numDice);

    //modifico posicion token
    token.move(numDice);
  });
});
