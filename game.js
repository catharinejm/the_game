Game = {};
Game.world = new World();
Game.player = new Player();
Game.keys = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40
};

Game.keyBindings = function(e) {
  switch(e.which) {
  case this.keys.LEFT:
    this.player.moveLeft();
    return false;
  case this.keys.RIGHT:
    this.player.moveRight();
    return false;
  case this.keys.UP:
    this.player.moveUp();
    return false;
  case this.keys.DOWN:
    this.player.moveDown();
    return false;
  }
}

Game.start = function() {
  $(document).keydown(this.keyBindings);
}

Game.stop = function() {
  $(document).unbind('keydown', this.keyBindings);
}
