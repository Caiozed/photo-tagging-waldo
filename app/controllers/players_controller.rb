class PlayersController < ApplicationController
  def create
    @player = Player.new(player_params)
    if @player.save
      flash[:success] = "Player score saved!"
      redirect_to games_path
    else
      flash[:danger] = "Ops, something went wrong!!"
      redirect_to games_path
    end
  end
  
  def player_params
    params.require(:player).permit(:name, :score, :game_id)
  end
end
