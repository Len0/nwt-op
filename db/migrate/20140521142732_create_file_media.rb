class CreateFileMedia < ActiveRecord::Migration
  def change
    create_table :file_media do |t|
      t.string :lokacija

      t.timestamps
    end
  end
end
