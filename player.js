function Player() {
  this._x = 30;
  this._y = 30;
  this._radius = 15;
  this._moveDistance = 5;
  this._moveTime = 200;
  this._avatar = Game.world.grantAvatar(this._x, this._y, this._radius);

  this.left = function() {
    return this._x - this._radius;
  }
  this.right = function() {
    return this._x + this._radius;
  }
  this.top = function() {
    return this._y - this._radius;
  }
  this.bottom = function() {
    return this._y + this._radius;
  }

  this.signal = function(event) {
    $(this._avatar.node).trigger('player:' + event, this);
  }

  this.moveLeft = function() {
    this._x -= this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
    this.signal('move');
  }

  this.moveRight = function() {
    this._x += this._moveDistance;
    this._avatar.animate({ cx: this._x }, this._moveTime);
    this.signal('move');
  }

  this.moveUp = function() {
    this._y -= this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
    this.signal('move');
  }

  this.moveDown = function() {
    this._y += this._moveDistance;
    this._avatar.animate({ cy: this._y }, this._moveTime);
    this.signal('move');
  }
};
