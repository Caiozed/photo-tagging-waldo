class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.integer :left
      t.integer :top
      t.string :image

      t.timestamps null: false
    end
  end
end
