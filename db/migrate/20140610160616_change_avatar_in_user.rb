class ChangeAvatarInUser < ActiveRecord::Migration
  def change
    remove_column :users, :avatar
    add_column :users, :avatar, :integer, default: 0
  end
end
