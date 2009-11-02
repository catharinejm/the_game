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

  def start_down()  @vy += Speed  end
  def start_up()    @vy -= Speed end
  def start_left()  @vx -= Speed end
  def start_right() @vx += Speed  end

  def stop_down()  @vy -= Speed end
  def stop_up()    @vy += Speed end
  def stop_left()  @vx += Speed end
  def stop_right() @vx -= Speed end

  def direction
    return :right if @vx > 0
    return :left if @vx < 0
    return :up if @vy < 0
    return :down if @vy > 0
    :still
  end

  def draw
    @sprite.draw(direction, @x, @y)
  end

  def update
    update_x
    update_y
  end

  def update_x
    @x = (@x + @vx) % @window.width
  end

  def update_y
    @y = (@y + @vy) % @window.height
  end
end
