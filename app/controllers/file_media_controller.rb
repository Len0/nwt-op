class FileMediaController < ApplicationController
  def create
    respond_to do |format|
      format.json {

        file_media = FileMedia.new(:lokacija=>params[:file])
        logger.debug file_media
        if file_media.save
          render :json=>file_media.id
        else
          render :json=>file_media.id
        end

      }
    end
  end

  def all
    respond_to do |format|
      format.json{
        files = FileMedia.find(:all, :order => "id desc", :limit => 5)
        render :json=>files
      }
    end
  end

  def get
    respond_to do |format|
      format.json{
        file = FileMedia.find(params[:id])
        render :json=>file.lokacija
      }
    end
  end
  private

  def media_params
    params.permit(:file,:format,:id)
  end
end
