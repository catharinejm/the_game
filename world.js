function World() {
  this._width = 640;
  this._height = 400;
  this._tile = Raphael('game_window', this._width, this._height);
}

$.extend(World.prototye, {
  grantAvatar: function(x, y) {
    return this._tile.circle(x, y, 15);
  }
});


