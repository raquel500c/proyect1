function Dice(faces) {
  this.faces = faces;
}

Dice.prototype.initRender = function(container) {

  var buttonRoll = $('<button>').text('ROLL DICE');
  buttonRoll.addClass("btn btn-default btn-lg roll");
  container.append(buttonRoll);

  var dice = $('<div>').text(this.faces);
  dice.addClass('dice');
  container.append(dice);
};

Dice.prototype.roll = function() {
  var random = Math.floor(Math.random() * this.faces) + 1;
  return random;
};
