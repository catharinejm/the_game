class Player
  include Gosu
  Speed = 5
  def initialize(window)
    @window = window
    @x = @window.width / 2
    @y = @window.height / 2
    @vx = @vy = 0
    @sprite = Image.load_tiles(@window, "player.png", 33, 33, false)
  end

  def button_down(id)
    case id
    when KbDown
      @vy = Speed
    when KbUp
      @vy = -Speed
    when KbLeft
      @vx = -Speed
    when KbRight
      @vx = Speed
    end
  end

  def button_up(id)
    case id
    when KbDown
      @vy = 0
    when KbUp
      @vy = 0
    when KbLeft
      @vx = 0
    when KbRight
      @vx = 0
    end
  end

  def draw
    @sprite.draw(@x, @y, 0)
  end

  def update
    @x += @vx
    @y += @vy
  end
end
