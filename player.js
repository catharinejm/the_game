function Player() {
  this._x = 30;
  this._y = 30;
  this._moveDistance = 5;
  this._moveTime = 200;
  this._avatar = Game.world.grantAvatar(this._x, this._y);
}

$.extend(Player.prototype, {
  moveLeft: function() {
    this._x -= this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
  },
  moveRight: function() {
    this._x += this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
  },
  moveUp: function() {
    this._y -= this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
  },
  moveDown: function() {
    this._y += this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
  }
});
