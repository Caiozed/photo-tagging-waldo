class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.float :score
      t.integer :game_id 

      t.timestamps null: false
    end
  end
end
