function Board(goosemap, container) {
  this.map = goosemap;
  var board = $('<div>');
  board.addClass('board');
  container.append(board);
  this.squares = [];

  for (i = 0; i < this.map.length; i++) {
    var square = $('<div>').text(i).addClass(this.map[i]).addClass('squares');
    board.append(square);
    this.squares.push(square);
    if(i%10 == 0){
      board.append('</br>');
    }
  }
}
