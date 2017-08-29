function Token() {
  this.prevPosition=0;
  this.position = 0;
}

Token.prototype.move = function(diceNumber) {
  this.prevPosition = this.position;
  return this.position += diceNumber;

};
