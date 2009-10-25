class Player
  include Gosu
  def initialize(window)
    @window = window
    @x = @window.width / 2
    @y = @window.height / 2
    @vx = @vy = 0
    @speed = 2
    @sprite = PlayerSprite.new(@window)
  end

  def start_down()  @vy = @speed  end
  def start_up()    @vy = -@speed end
  def start_left()  @vx = -@speed end
  def start_right() @vx = @speed  end

  def stop_down()  @vy = 0 end
  def stop_up()    @vy = 0 end
  def stop_left()  @vx = 0 end
  def stop_right() @vx = 0 end

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
