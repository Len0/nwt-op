CarrierWave.configure do |config|
  config.dropbox_app_key = "korujg30fvrc91g"
  config.dropbox_app_secret = "og7hgr4lzp3d2b9"
  config.dropbox_access_token = "zkbhszm2zt4b9sib"
  config.dropbox_access_token_secret = "x2f197v1hh138nl"
  config.dropbox_user_id = 249162469
  config.dropbox_access_type = "app_folder"
  config.permissions = 0666
  config.directory_permissions = 0777
  config.root = Rails.root.join('tmp')
  config.cache_dir = 'carrierwave'
end