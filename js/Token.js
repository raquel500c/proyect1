function Token() {
  this.prevPosition=0;
  this.position = 0;
}

Token.prototype.move = function(diceNumber) {
  this.prevPosition = this.position;
  console.log('previa POSICION :' + this.prevPosition);
  var newPosition= this.position += diceNumber;
  console.log('NUEVA POSICION :' + newPosition);
  this.position= newPosition;
  return newPosition;
};
