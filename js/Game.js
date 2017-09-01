$(document).ready(function() {
  var container = $('.main');
  var board = new Board(travelmap, container);
  var dice = new Dice(6);
  var token = new Token('yellow', board, container);

  dice.initRender(container);

  $('.roll').on("click", function() {
    var numDice = dice.roll();
    $('.dice').text(numDice);
    token.move(numDice);
  });
});
