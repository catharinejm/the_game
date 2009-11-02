class Sprite
  include Gosu
  Layer = 0
  attr_reader :width, :height, :center

  def self.image path, columns = 1, rows = 1
    @@image_args = [path, -columns, -rows, false]
  end

  def initialize(window)
    @@images ||= Image.load_tiles(window, *@@image_args)
    @animation = 0
    @last_frame_change = Time.now
    @width = @@images.first.width
    @height = @@images.first.height
    @center_x = @width / 2
    @center_y = @height / 2
  end

  def frame_change
    if Time.now - @last_frame_change > 0.2
      @last_frame_change = Time.now
      @animation = 1 - @animation
    end
  end

  def still
    @@images[@animation]
  end

  def draw direction, x, y
    img = send(direction)
    img.draw(x - @center_x, y - @center_y, Layer)
  end

  def down
    frame_change
    @@images[@animation]
  end

  def up
    frame_change
    @@images[@animation + 2]
  end

  def right
    frame_change
    @@images[@animation + 4]
  end

  def left
    frame_change
    @@images[@animation + 6]
  end
end
