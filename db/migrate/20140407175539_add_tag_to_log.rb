class AddTagToLog < ActiveRecord::Migration
  def change
    add_column :logs, :tag, :string
  end
end
