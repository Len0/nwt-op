class SearchController < ApplicationController
  def users
    respond_to do |format|
      format.json {
        if params[:keyword]
          users = User.search params[:keyword]
          render :json => users
        end
      }
    end
  end


  def marketers
    respond_to do |format|
      format.json {
        if params[:name]
          users = User.getMarketers params[:name]
          render :json => users
        end
      }
    end
  end


  def ads
    respond_to do |format|
      format.json {
        ads = AdOffer.search params[:keyword], params[:type], params[:price]
        render :json => ads
      }
    end
  end
end
