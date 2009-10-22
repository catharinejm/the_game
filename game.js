Game = {
  init: function() {
    Game.world = new World();
    Game.player = new Player();
    Game.keys = {
      LEFT: 37,
      RIGHT: 39,
      UP: 38,
      DOWN: 40
    }

    Game.keyBindingsUp = function(e) {
      console.log('keyup');
      switch(e.which) {
      case Game.keys.LEFT:
        Game.player.stopX();
        return false;
      case Game.keys.RIGHT:
        Game.player.stopX();
        return false;
      case Game.keys.UP:
        Game.player.stopY();
        return false;
      case Game.keys.DOWN:
        Game.player.stopY();
        return false;
      }
    }

    Game.keyBindings = function(e) {
      switch(e.which) {
      case Game.keys.LEFT:
        Game.player.moveLeft();
        return false;
      case Game.keys.RIGHT:
        Game.player.moveRight();
        return false;
      case Game.keys.UP:
        Game.player.moveUp();
        return false;
      case Game.keys.DOWN:
        Game.player.moveDown();
        return false;
      }
    }

    Game.start = function() {
      $(document).keydown(Game.keyBindings);
      $(document).keyup(Game.keyBindingsUp);
      Game.player.startLoop();
    }

    Game.stop = function() {
      $(document).unbind('keydown', Game.keyBindings);
      $(document).unbind('keyup', Game.keyBindingsUp);
      Game.player.stopLoop();
    }
  }
}
