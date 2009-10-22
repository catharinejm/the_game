function World() {
  this._width = 640;
  this._height = 400;
  this._tile = Raphael('game_window', this._width, this._height);

  this.monitorSignals();
}

$.extend(World.prototype, {
  grantAvatar: function(x, y, radius) {
    return this._tile.circle(x, y, radius);
  },

  monitor: function(event, callback) {
    $(this._tile.canvas).bind(event, callback);
  },
  
  monitorSignals: function() {
    var self = this;
    this.monitor('player:move', function(event, player) {
      console.log(player.left(), player.right() + '>' + self._width, player.top(), player.bottom() + '>' + self._height);
      if (player.left() < 0)
        player.moveRight();
      if (player.right() > self._width)
        player.moveLeft();
      if (player.top() < 0)
        player.moveDown();
      if (player.bottom() > self._height)
        player.moveUp();
    })
  }
})
