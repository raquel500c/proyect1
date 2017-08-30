function Token(color, board) {
  this.prevPosition = 0;
  this.position = 0;
  this.color = color;
  this.board = board;
}

Token.prototype.initRender = function ($body) {
  var $token = $('<div>');
  $token.attr('id', 'token');
  $token.addClass('token col-sm-2');
  $body.append($token);
  this.render();
};

Token.prototype.render = function() {
  //cambia color casilla ocupada del board
  $('#' + this.prevPosition).css({'background-color': 'aquamarine'});
  $('#' + this.position).css({'background-color': 'red'});
};

Token.prototype.move = function(diceNumber) {
  this.prevPosition = this.position;
  this.position += diceNumber;
  console.log('TIRADA DADO :' + diceNumber);
  console.log(token);

  this.render();
};

Board.prototype.evalSquares = function() {
  switch (this.squares) {
    case 'oca':
      console.log('De Oca a Oca, y tiro porque me toca');
      break;
    case 'puente':

      break;
    case 'posada':

      break;

    case 'dados':

      break;
    case 'kata':

      break;
    case 'laberinto':

      break;
    case 'prision':

      break;
    case 'muerte':

      break;
    case 'llegada':

      break;
    default:

  }
};
