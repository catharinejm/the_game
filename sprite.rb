class Sprite
  include Gosu
  attr_reader :width, :height

  def init_images window, path, columns = 1, rows = 1
    @images = Image.load_tiles(window, path, -columns, -rows, false)
  end

  def initialize(window)
    @width = @images.first.width
    @height = @images.first.height
    @center_x = @width / 2
    @center_y = @height / 2
  end

  def left_edge()   @center_x - @width  / 2 end
  def right_edge()  @center_x + @width  / 2 end
  def top_edge()    @center_y - @height / 2 end
  def bottom_edge() @center_y + @height / 2 end
end
