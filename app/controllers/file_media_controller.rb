class FileMediaController < ApplicationController
  def create
    respond_to do |format|
      format.json {
        
        @file_media = FileMedia.new(:lokacija=>params[:file])
        logger.debug @file_media
        if @file_media.save
          render :json=>@file_media.errors.messages
        else
          render :json=>@file_media
       end
        
      }
    end
  end
  
  def all
    respond_to do |format|
    format.json{
      files = FileMedia.all
      render :json=>files
    }
  end
  end
  private

  def media_params
    params.permit(:file,:format)
  end
end
