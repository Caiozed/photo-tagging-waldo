class PlayersController < ApplicationController
  def create
    @player = Player.new(player_params)
    @player.save
    redirect_to root_path
  end
  
  def player_params
    params.require(:player).permit(:name, :score, :game_id)
  end
end
