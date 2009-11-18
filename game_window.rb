class GameWindow < Gosu::Window
  include Gosu

  MovementKeys = {
    KbDown  => :down,
    KbUp    => :up,
    KbLeft  => :left,
    KbRight => :right
  }

  OtherKeys = {
    KbQ     => :exit
  }

  def initialize
    super(640, 480, false)
    self.caption = 'The Game'
    @player = Player.new(self)
    @box = Box.new self, 100, 100
    @objects = [@box]
  end

  def button_down(id)
    @player.send("start_#{MovementKeys[id]}") if MovementKeys.has_key?(id)
    send(OtherKeys[id]) if OtherKeys.has_key?(id)
  end

  def button_up(id)
    @player.send("stop_#{MovementKeys[id]}") if MovementKeys.has_key?(id)
  end

  def coords_available?(x, y)
    !@objects.any? { |o| o.occupying?(x, y) }
  end

  def draw
    @player.draw
    @box.draw
  end

  def update
    @player.update
  end
end
