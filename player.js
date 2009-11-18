function Player() {
  this._x = 30;
  this._y = 30;
  this._width = 30;
  this._height = 40;
  this._moveDistance = 5;
  this._moveTime = 200;
  this._avatar = Game.world.grantAvatar(this._x, this._y, this._width, this._height);

  this.left = function() {
    return this._x - this._width / 2;
  }
  this.right = function() {
    return this._x + this._width / 2;
  }
  this.top = function() {
    return this._y - this._height / 2;
  }
  this.bottom = function() {
    return this._y + this._height / 2;
  }

  this.signal = function(event) {
    this._avatar.trigger('player:' + event, this);
  }

  this.moveLeft = function() {
    this._x -= this._moveDistance;
    this._avatar.css({left: this._x + 'px'});
    this.signal('move');
  }

  this.moveRight = function() {
    this._x += this._moveDistance;
    this._avatar.css({left: this._x + 'px'});
    this.signal('move');
  }

  this.moveUp = function() {
    this._y -= this._moveDistance;
    this._avatar.css({top: this._y + 'px'});
    this.signal('move');
  }

  this.moveDown = function() {
    this._y += this._moveDistance;
    this._avatar.css({top: this._y + 'px'});
    this.signal('move');
  }
};
