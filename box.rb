class Box
  def initialize window, x, y
    @sprite = BoxSprite.new(window)
    @x, @y = x, y
  end

  def draw
    @sprite.draw(@x, @y)
  end

  def occupying? x, y
    (@sprite.left_edge..@sprite.right_edge).include?(x) && (@sprite.bottom_edge..@sprite.top_edge).include?(y)
  end
end
