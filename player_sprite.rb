class PlayerSprite < Sprite
  Layer = 0

  def initialize(window)
    init_images window, "player.png", 2, 4
    @animation = 0
    @last_frame_change = Time.now
    super
  end

  def frame_change
    if Time.now - @last_frame_change > 0.2
      @last_frame_change = Time.now
      @animation = 1 - @animation
    end
  end

  def still
    @images[@animation]
  end

  def draw direction, x, y
    img = send(direction)
    img.draw(x - @center_x, y - @center_y, Layer)
  end

  def down
    frame_change
    @images[@animation]
  end

  def up
    frame_change
    @images[@animation + 2]
  end

  def right
    frame_change
    @images[@animation + 4]
  end

  def left
    frame_change
    @images[@animation + 6]
  end
end
