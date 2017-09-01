function Token(color, board, container) {
  this.prevPosition = 0;
  this.position = 0;
  this.color = color;
  this.board = board;
  this.element = $('<div>').addClass('token').addClass(color);
  container.append(this.element);
  this.setOnSquare(0);
}

Token.prototype.message = function(message) {
  $('.player-' + this.color).append($('<p>').html(message));
};

Token.prototype.setOnSquare = function(n) {
  this.element.css({
    'top': this.board.squares[n][0].offsetTop + 138,
    'left': this.board.squares[n][0].offsetLeft + 492
  });
};

Token.prototype.move = function(diceNumber) {
  this.prevPosition = this.position;
  this.message('TIRADA DADO : ' + diceNumber);
  if (this.position + diceNumber == 63) {
    this.position = 63;
    this.setOnSquare(this.position);
    this.message('YOU ARE THE WINNER!!');
    return;
  } else if (this.position + diceNumber > 63) {
    this.position += diceNumber;
    this.position = 63 - this.position % 63;
  } else {
    this.position += diceNumber;
  }
  this.setOnSquare(this.position);
  this._evalSquares(this.position);
};

Token.prototype._evalSquares = function() {
  switch (this.board.map[this.position]) {
    case 'beer':
      this._toNextIndex(this.board.map[this.position]);
      this.message('IRONBEER A IRONBEER Y TIRO PORQUE SÍ.. de ' + this.prevPosition + ' a ' + this.position);
      break;
    case 'kata':
      this._toAnyIndex(this.board.map[this.position]);
      this.message('KATA A KATA Y TIRO PORQUE ME DA LA GANA .. de ' + this.prevPosition + ' a ' + this.position);
      break;
    case 'perroMalo':
      this._toAnyIndex(this.board.map[this.position]);
      this.message('PERROMALO A PERROMALO Y TIRO PORQUE ME HA AYUDADO .. de ' + this.prevPosition + ' a ' + this.position);
      break;
    case 'wc':
      this._toAnyIndex('libros');
      break;
    case 'marc':
      this.position = 0;
      this.message('MARC TE BORRA EL CÓDIGO.... ¡¡VUELVE A EMPEZAR!!.. de ' + this.prevPosition + ' a ' + this.position);
      break;
    default:
      return false;
  }
  this.setOnSquare(this.position);
};

Token.prototype._toNextIndex = function(name) {
  var nextIndex = this.board.map.indexOf(name, this.position + 1);
  if (nextIndex == -1)
    return;
  this.prevPosition = this.position;
  this.position = nextIndex;
};

Token.prototype._toAnyIndex = function(name) {
  var anyIndex = this.board.map.indexOf(name, this.position + 1);
  if (anyIndex == -1)
    anyIndex = this.board.map.indexOf(name);
  this.prevPosition = this.position;
  this.position = anyIndex;
  return;
};
