class StaticPagesController < ApplicationController
  def index
    
  end
  
  def games
    @players = Player.top_ten
  end
  
  def game
    @player = Player.new
  end
  
  def contact
  
  end
end
