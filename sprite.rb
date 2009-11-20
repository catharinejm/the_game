class Sprite
  include Gosu
  attr_reader :width, :height

  def init_images window, path, columns = 1, rows = 1
    @images = Image.load_tiles(window, path, -columns, -rows, false)
  end

  def initialize(window)
    @width = @images.first.width
    @height = @images.first.height
  end
end
