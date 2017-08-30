function Board(numSquares) {
  this.squares = new Array(numSquares);
  this._init();
}

Board.prototype._init = function() {
  for (i = 0; i < this.squares.length; i++) {
    this.squares[i] = '_';
  }
  this.squares[0] = 'salida';
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
