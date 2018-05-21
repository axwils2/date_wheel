class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :cuisine_types, array: true, default: []
      t.string :street_number
      t.string :street_name
      t.string :city
      t.string :state
      t.string :postal_code
    end
  end
end
