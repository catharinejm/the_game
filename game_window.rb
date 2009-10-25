class GameWindow < Gosu::Window
  include Gosu
  def initialize
    super(640, 480, false)
    self.caption = 'The Game'
    @player = Player.new(self)
  end

  def button_down(id)
    @player.button_down(id)
  end

  def button_up(id)
    @player.button_up(id)
  end

  def draw
    @player.draw
  end

  def update
    @player.update
  end
end
