function Token(color, board, container) {
  this.prevPosition = 0;
  this.position = 0;
  this.color = color;
  this.board = board;
  this.element = $('<div>').addClass('token').addClass(color);
  container.append(this.element);
  this.setOnSquare(0);
}

Token.prototype.setOnSquare = function(n) {
  this.element.css({
    'top': this.board.squares[n][0].offsetTop + 28,
    'left': this.board.squares[n][0].offsetLeft + 28
  });
};


Token.prototype.move = function(diceNumber) {
  this.prevPosition = this.position;
  console.log('TIRADA DADO :' + diceNumber);
  if (this.position + diceNumber == 63) {
    this.position = 63;
    this.setOnSquare(this.position);
    alert('YOU ARE THE WINNER!!');
    return;
  } else if (this.position + diceNumber > 63) {
    this.position += diceNumber;
    this.position = 63 - this.position % 63;
  } else {
    this.position += diceNumber;
  }
  this.setOnSquare(this.position);
  this._evalSquares(this.position);
  console.log(this);
};
/*
Token.prototype._findIndex = function(name) {
  var nextIndex = this.board.map.indexOf(name, this.position + 1);
  if (nextIndex == -1)
    nextIndex = this.board.map.indexOf(name);
};
*/
Token.prototype._actionOca = function() {
  var nextOca = this.board.map.indexOf('oca', this.position + 1);
  alert('DE OCA A OCA Y TIRO PORQUE ME TOCA.. de ' + this.position + ' a' + nextOca);
  this.setOnSquare(this.position);
  this.prevPosition = this.position;
  this.position = nextOca;
  console.log(this.position);
};

Token.prototype._actionPuente = function() {
  console.log('DE PUENTE A PUENTE Y TIRO PORQUE ME LLEVA LA CORRIENTE');
  this.setOnSquare(this.position);
  this.prevPosition = this.position;
  if (this.prevPosition == 6) {
    this.position = 12;
  } else {
    this.position = 6;
  }
};

Token.prototype._evalSquares = function() {

  switch (this.board.map[this.position]) {
    case 'oca':
      this._actionOca(this.position);
      break;
    case 'puente':
      this._actionPuente(this.position);
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
      this.positon = 1;
      break;
    case 'llegada':
      break;
    default:
      return false;
  }
};
