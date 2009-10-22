function Player() {
  this._x = 30;
  this._y = 30;
  this._vx = 0;
  this._vy = 0;
  this._radius = 15;
  this._moveDistance = 5;
  this._moveTime = 100;
  this._avatar = Game.world.grantAvatar(this._x, this._y, this._radius);

  this.startLoop = function() {
    var player = this;
    this._loop = setInterval(function() {
      player.move();
    }, this._moveTime);
  }

  this.stopLoop = function() {
    clearInterval(this._loop);
  }

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

  this.move = function() {
    this._x += this._vx;
    this._y += this._vy;
    this._avatar.animate({ cx: this._x, cy: this._y }, this._moveTime);
    this.signal('move');
  }

  this.moveRight = function() {
    this._vx = this._moveDistance;
  }

  this.moveDown = function() {
    this._vy = this._moveDistance;
  }

  this.moveLeft = function() {
    this._vx = -this._moveDistance;
  }

  this.moveUp = function() {
    this._vy = -this._moveDistance;
  }

  this.stopX = function() {
    this._vx = 0;
  }

  this.stopY = function() {
    this._vy = 0;
  }
};
