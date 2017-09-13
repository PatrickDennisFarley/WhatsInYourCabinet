class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.string :title, null: false
      t.string :category
      t.string :glass
      t.string :instructions, null: false
      t.string :image
      t.string :ingredient1, null: false
      t.string :measure1, null: false
      t.string :ingredient2
      t.string :measure2
      t.string :ingredient3
      t.string :measure3
      t.string :ingredient4
      t.string :measure4
      t.string :ingredient5
      t.string :measure5
      t.string :ingredient6
      t.string :measure6
      t.string :ingredient7
      t.string :measure7
      t.string :ingredient8
      t.string :measure8
      t.string :ingredient9
      t.string :measure9
      t.string :ingredient10
      t.string :measure10

      t.timestamps null: false
    end
  end
end
