var User = {
  x:      500,
  y:      15,
  radius: 10,
  attributes: {
    'fill': '#ff0000',
    'fill-opacity': 1,
    'stroke': '#990000',
    'stroke-width': 2
  }
}

Map = {
  x: -1,
  y: -1,
  width: 602,
  height: 401,
  attributes: {
    'fill': '#fff',
    'stroke-width': 0
  }
}

function paperWidth() {
  return parseInt($('#paper').css('width'));
}

window.onload = function() {  
  var paper      = Raphael('paper', 600, 400)
  var user       = paper.circle(User.x, User.y, User.radius).attr(User.attributes);
  var background = paper.rect(Map.x, Map.y, Map.width, Map.height).attr(Map.attributes);

  background.node.onclick = function(e) {}
  background.toBack();

  $(document).keydown(function(e) {
    var key   = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    var extra = e.shiftKey ? 12 : 0

    switch(key) {
      case 37: 
        // console.log('left arrow');
        if(user.attrs.cx <= 15 || User.x <= 15) { return false; }
        User.x = User.x - 10;
        user.animate({cx: User.x}, 100);
        return false;
      case 38:
        // console.log('up arrow');
        if(user.attrs.cy <= 15 || User.y <= 15) { return false; }
        User.y = User.y - 10;
        user.animate({cy: User.y}, 100);
        return false;
      case 39: 
        // console.log('right arrow');
        if(user.attrs.cy >= paperWidth() || User.y >= paperWidth()) { return false; }
        User.x = User.x + 10;
        user.animate({cx: User.x}, 100);
        return false;
      case 40: 
        // console.log('down arrow');
        User.y = User.y + 10;
        user.animate({cy: User.y}, 100);
        return false;
    }
  });
}


