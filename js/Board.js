function Board(travelmap, container) {
  this.map = travelmap;
  var board = $('<div>');
  board.addClass('board');
  container.append(board);
  this.squares = [];
  var row = $('<div>').addClass('row');
  board.append(row);
  var player1 = $('<div>').addClass('player player-yellow col-sm-3');
  row.append(player1);
  var titPlayer1 = $('<h2>');
  player1.append(titPlayer1).text('PLAYER 1');
  var centerColumn = $('<div>').addClass('col-sm-6');
  for (i = 0; i < this.map.length; i++) {
    var square = $('<div>').text(i).addClass(this.map[i]).addClass('squares');
    centerColumn.append(square);
    this.squares.push(square);
    if (i % 10 == 0) {
      centerColumn.append('</br>');
    }
  }
  row.append(centerColumn);
  var player2 = $('<div>').addClass('player player-pink col-sm-3');
  row.append(player2);
  var titPlayer2 = $('<h2>');
  player2.append(titPlayer2).text('PLAYER 2');
}
