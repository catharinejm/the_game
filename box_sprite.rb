class BoxSprite < Sprite
  Layer = 0
  def initialize(window)
    init_images window, 'box.png'
    super
  end

  def draw x, y
    @images.first.draw(x - @center_x, y - @center_y, Layer)
  end
end
