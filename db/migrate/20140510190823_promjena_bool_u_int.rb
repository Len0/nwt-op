class PromjenaBoolUInt < ActiveRecord::Migration
  def change
    execute 'ALTER TABLE ad_offers ALTER COLUMN visibility TYPE integer USING (visibility::integer)'
  end
end