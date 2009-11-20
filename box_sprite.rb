class BoxSprite < Sprite
  Layer = -1
  def initialize(window)
    init_images window, 'box.png'
    super
  end

  def draw x, y
    @images.first.draw(x, y, Layer)
  end
end
