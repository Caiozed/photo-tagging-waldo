class Player < ActiveRecord::Base
    scope :top_ten, -> {order(:score).limit(10)}
    belongs_to :game
end
