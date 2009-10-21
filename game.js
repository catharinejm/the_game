function Game() {
  this._world = new World();
}

$.extend(Game.prototye, {
  start: function() {
    $(document).keydown(this.keyBindings);
  },

  stop: function() {
    $(document).unbind('keydown', this.keybindings);
  },

  keyBindings: function(e) {
    switch(e.which) {
    case 37:
      if (x - 8 > 0) {
        x -= 8;
        c.animate({cx: x}, 100);
      }
      return false;
    case 38:
      if (y - 8 > 0) {
        y -= 8;
        c.animate({cy: y}, 100);
      }
      return false;
    case 39:
      if (c.attrs.cx + 8 < 640) {
        x += 8;
        c.animate({cx: x}, 100);
      }
      return false;
    case 40:
      if (c.attrs.cy + 8 < 400) {
        y += 8;
        c.animate({cy: y}, 100);
      }
      return false;
    }
  }
});


