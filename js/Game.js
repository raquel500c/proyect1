// ----- INSTANCIAS OBJETOS-----------//


//para Mover ficha desde consola ---> board._renderToken(token.move(dice.roll()));

// ------ HTML - CSS -------------//

$(document).ready(function() {
  var container = $('.main');

  var board = new Board(goosemap, container);

  var dice = new Dice(6);
  var token = new Token('rojo', board, container);
  console.log(board.squares);

  dice.initRender(container);

  $('#roll').on("click", function() {

    var numDice = dice.roll();
    //muestro resultado en dado
    $('#dice').text(numDice);

    //modifico posicion token
    token.move(numDice);
  });
});
