function Board(numSquares) {
  this.squares = new Array(numSquares);
  this._init();
}

Board.prototype._init = function() {
  for (i = 0; i < this.squares.length; i++) {
    this.squares[i] = '_';
  }
  this.squares[0] = 'SALIDA';
// this._setGooses();
};
Board.prototype.initRender = function ($body) {
  var $board = $('<div>');
  $board.attr('id', 'board');
  $board.addClass('board col-sm-12');
  $body.append($board);

  for (i = 0; i < 64; i++) {
    var $squares = $('<div>').text(i);
    $squares.addClass('squares col-sm2');
    $squares.attr('id', i);
    $board.append($squares);
  }
};

// this.squares = ['salida', '1', '2', '3', '4', 'oca', 'puente', '7', '8', 'oca',
//   '10', '11', 'puente', '13', 'oca', '15', '16', '17', 'oca', 'posada',
//   '20', '21', '22', 'oca', '24', '25', '26', 'oca', 'dados', '29', '30',
//   'pozo', 'oca', '33', '34', '35', 'oca', '37', '38', '39',
//   '40', 'oca', 'laberinto', '43', '44', 'oca', '46', '47', '48', '49',
//   'oca', '51', '52', 'dados', 'oca', '55', 'prision', '57', 'muerte', 'oca',
//   '60', '61', '62', 'llegada'
// ];
