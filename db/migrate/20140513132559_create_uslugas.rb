class CreateUslugas < ActiveRecord::Migration
  def change
    create_table :uslugas do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :user_id
      t.timestamps
    end
  end
end
