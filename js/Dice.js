function Dice(faces){
  this.faces = faces;
}

Dice.prototype.roll = function(){
  var random= Math.floor(Math.random() * this.faces)+1;
  console.log("TIRO DADO : " + random);
  return random;
};
