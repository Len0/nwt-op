class FileMedia < ActiveRecord::Base
  mount_uploader :lokacija, FileMediaUploader
end
