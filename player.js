function Player() {
  this._x = 30;
  this._y = 30;
  this._moveDistance = 5;
  this._moveTime = 200;
  this._avatar = Game.world.grantAvatar(this._x, this._y);

  this.moveLeft = function() {
    this._x -= this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
    this._avatar.node.trigger('player:moveleft')
  }

  this.moveRight = function() {
    this._x += this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
    this._avatar.node.trigger('player:moveright')
  }

  this.moveUp = function() {
    this._y -= this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
    this._avatar.node.trigger('player:moveup')
  }

  this.moveDown = function() {
    this._y += this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
    this._avatar.node.trigger('player:movedown')
  }
};
