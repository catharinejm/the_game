function World() {
  this._width = 640;
  this._height = 400;
  this._tile = Raphael('game_window', this._width, this._height);

  this.grantAvatar = function(x, y, radius) {
    return this._tile.circle(x, y, radius);
  }

  this.monitor = function(event, callback) {
    $(this._tile.canvas).bind(event, callback);
  }

  this.monitor('player:move', function(event, player) {
    if (player.left() < 0)
      player.moveRight();
    if (player.right() > this._width)
      player.moveLeft();
    if (player.top() < 0)
      player.moveDown();
    if (player.bottom() > this._height)
      player.moveUp();
  })
}
