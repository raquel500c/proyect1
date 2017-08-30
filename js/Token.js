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
  token._evalSquares(this.position);
  this.render();
};

Token.prototype._evalSquares = function() {
  var specialsSquares = ['salida', '1', '2', '3', '4', 'oca', 'puente', '7', '8', 'oca',
      '10', '11', 'puente', '13', 'oca', '15', '16', '17', 'oca', 'posada',
      '20', '21', '22', 'oca', '24', '25', '26', 'oca', 'dados', '29', '30',
      'pozo', 'oca', '33', '34', '35', 'oca', '37', '38', '39',
      '40', 'oca', 'laberinto', '43', '44', 'oca', '46', '47', '48', '49',
      'oca', '51', '52', 'dados', 'oca', '55', 'prision', '57', 'muerte', 'oca',
      '60', '61', '62', 'llegada'
    ];

  console.log(specialsSquares);
  switch (specialsSquares[this.position]) {
    case 'oca':
      alert('De Oca a Oca, y tiro porque me toca');
      for (i=specialsSquares[this.position+1];i<this.position.length;i++){
        var indexOca= specialsSquares.indexOf('oca');
        this.prevPosition=this.position;
        this.position=specialsSquares[indexOca];
      }
      return dice.roll;
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
      return false;

  }
};
