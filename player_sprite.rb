class PlayerSprite
  include Gosu
  def initialize(window)
    @images = Image.load_tiles(window, "player.png", 40, 39, false)
    @animation = 0
    @last_frame_change = Time.now
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
