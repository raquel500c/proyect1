function Dice(faces) {
  this.faces = faces;
}

Dice.prototype.initRender = function($body) {
  var $dice = $('<div>').text(this.faces);
  $dice.addClass('col-sm-3');
  $dice.attr('id', 'dice');
  $body.append($dice);

  var $buttonRoll = $('<button>').text('ROLL DICE');
  $buttonRoll.addClass("btn btn-default btn-lg");
  $buttonRoll.attr('id', 'roll');
  $body.append($buttonRoll);
};

Dice.prototype.roll = function() {
  var random = Math.floor(Math.random() * this.faces) + 1;
  return random;
};
