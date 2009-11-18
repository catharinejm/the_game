function World() {
  this._width = 640;
  this._height = 400;
  this._tile = Raphael('game_window', this._width, this._height);

  this.monitorSignals();
}

$.extend(World.prototype, {
  grantAvatar: function(x, y, width, height) {
    var avatar = $('<div id="player"></div>');
    avatar.css({ position: 'absolute',
                 top: y + 'px',
                 left: x + 'px',
                 background: "url(player.png) no-repeat scroll 0 0",
                 width: width + 'px',
                 height: height + 'px'});
    $(this._tile.canvas).parent().append(avatar);
    return avatar;
  },

  monitor: function(event, callback) {
    $(this._tile.canvas).bind(event, callback);
  },
  
  monitorSignals: function() {
    var self = this;
    this.monitor('player:move', function(event, player) {
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
