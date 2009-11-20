class Box
  def initialize window, x, y
    @sprite = BoxSprite.new(window)
    @x, @y = x, y
  end

  def draw
    @sprite.draw(@x, @y)
  end

  def left_edge()   @x - @sprite.width / 2  end
  def right_edge()  @x + @sprite.width / 2  end
  def bottom_edge() @y end
  def top_edge()    @y - @sprite.height end

  def occupying? x, y
    (left_edge..right_edge).include?(x) && (top_edge..bottom_edge).include?(y)
  end
end
