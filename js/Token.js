function Token(color, board, container) {
  this.prevPosition = 0;
  this.position = 0;
  this.color = color;
  this.board = board;
  console.log(this.board.squares[0]);
  this.element = $('<div>').addClass('token').addClass(color);
  container.append(this.element);
  this.setOnSquare(0);
}

Token.prototype.setOnSquare = function(n){
  this.element.css({
    'top': this.board.squares[n][0].offsetTop + 25 ,
    'left':this.board.squares[n][0].offsetLeft + 25
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


Token.prototype._actionOca = function() {
  console.log('DE OCA A OCA Y TIRO PORQUE ME TOCA');
  var saltoOca2 = this.board.squares.indexOf('oca', this.position);
  this.prevPosition = this.position;
  this.position = this.board.squares[saltoOca2];

};

// Token.prototype._actionPuente = function() {
//   //  if this.position= this.board.squares.indexOf('puente');
//   this.prevPosition = this.position;
//   this.position = this.board.squares[indexPuente];
//   console.log('DE PUENTE A PUENTE Y TIRO PORQUE ME LLEVA LA CORRIENTE');
// };

Token.prototype._evalSquares = function() {
  switch (this.board.squares[this.position]) {
    case 'oca':
      this._actionOca(this.position);
      break;
    case 'puente':
      //this._actionPuente(this.position);
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
