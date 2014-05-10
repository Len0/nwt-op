class PrepravkaIsvisiblEuVisibility < ActiveRecord::Migration
  def change
    rename_column :ad_offers, :is_hidden, :visibility
  end
end
