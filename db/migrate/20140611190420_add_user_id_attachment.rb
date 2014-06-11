class AddUserIdAttachment < ActiveRecord::Migration
  def change
    add_column :attachments, :user_id, :integer, default: 1
  end
end
