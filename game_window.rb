class GameWindow < Gosu::Window
  include Gosu

  KEYS = {
    KbDown  => :down,
    KbUp    => :up,
    KbLeft  => :left,
    KbRight => :right
  }

  MENU = {
    KbQ     => :exit
  }

  def initialize
    super(640, 480, false)
    self.caption = 'The Game'
    @player = Player.new(self)
  end

  def button_down(id)
    @player.send("start_#{KEYS[id]}") if KEYS.has_key?(id)
    send(MENU[id]) if MENU.has_key?(id)
  end

  def button_up(id)
    @player.send("stop_#{KEYS[id]}") if KEYS.has_key?(id)
  end

  def draw
    @player.draw
  end

  def update
    @player.update
  end
end
