class StaticPagesController < ApplicationController
  def index
    
  end
  
  def games
    @games = Game.all
  end
  
  def game
    @player = Player.new
    @game = Game.find(params[:id])
  end
  
  def contact
  
  end
end
