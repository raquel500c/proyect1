function Board() {
  // this.squares = ['salida', '1', '2', '3', '4', 'oca', 'puente', '7', '8', 'oca',
  //   '10', '11', 'puente', '13', 'oca', '15', '16', '17', 'oca', 'posada',
  //   '20', '21', '22', 'oca', '24', '25', '26', 'oca', 'dados', '29', '30',
  //   'pozo', 'oca', '33', '34', '35', 'oca', '37', '38', '39',
  //   '40', 'oca', 'laberinto', '43', '44', 'oca', '46', '47', '48', '49',
  //   'oca', '51', '52', 'dados', 'oca', '55', 'prision', '57', 'muerte', 'oca',
  //   '60', '61', '62', 'llegada'
  // ];
  this.squares = new Array(64);
  this._init();

}

Board.prototype._init = function() {
  for (i = 0; i < this.squares.length; i++) {
    this.squares[i] = '_';
  }
  //this._setGooses();
};

// Board.prototype._setGooses = function() {
// for (i=0;i<this.squares.length;i++){
//   var oca=false;
//   if (!oca){
//     this.squares[i+5]='goose';
//     oca=true;
//   }else{
//     this.squares[i+4]='goose';
//     oca=false;
//   }
// }

//this.squares.map(function(elem, i, a) {
//(!oca) ? squares[i+5] : squares[i+4]='goose')

//});


Board.prototype._renderToken = function(tokenNumber) {
  var index = tokenNumber;
  this.squares[Token.prevPosition] = '_';
  this.squares[index] = 'TOKEN';
  console.table(this.squares);
};

Board.prototype.evalSquares = function() {
  switch (this.squares) {
    case 'oca':
      console.log('De Oca a Oca, y tiro porque me toca');
      break;
    case 'puente':

      break;
    case 'posada':

      break;

    case 'dados':

      break;
    case 'pozo':

      break;
    case 'laberinto':

      break;
    case 'prision':

      break;
    case 'muerte':

      break;
    case 'llegada':

      break;
    default:

  }
};
