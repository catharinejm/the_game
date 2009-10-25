class Player
  include Gosu
  Speed = 2
  def initialize(window)
    @window = window
    @x = @window.width / 2
    @y = @window.height / 2
    @vx = @vy = 0
    @sprite = PlayerSprite.new(@window)
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

  def direction
    return :right if @vx > 0
    return :left if @vx < 0
    return :up if @vy < 0
    return :down if @vy > 0
    :still
  end

  def draw
    @sprite.send(direction).draw(@x, @y, 0)
  end

  def update
    @x += @vx
    @y += @vy
  end
end
