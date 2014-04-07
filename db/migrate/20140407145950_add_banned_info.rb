class AddBannedInfo < ActiveRecord::Migration
  def change
    add_column :users, :is_banned, :boolean
  end
end
