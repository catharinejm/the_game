class Box
  def initialize window, x, y
    @sprite = BoxSprite.new(window)
    @x, @y = x, y
  end

  def draw
    @sprite.draw(@x, @y)
  end
end
