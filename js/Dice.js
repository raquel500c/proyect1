function Dice(faces) {
  this.faces = faces;
}

Dice.prototype.initRender = function(container) {
  var dice = $('<div>').text(this.faces);
  dice.addClass('dice');
  container.append(dice);

  var buttonRoll = $('<button>').text('ROLL DICE');
  buttonRoll.addClass("btn btn-default btn-lg roll");
  container.append(buttonRoll);
};

Dice.prototype.roll = function() {
  var random = Math.floor(Math.random() * this.faces) + 1;
  return random;
};
