class ReviewController < ApplicationController
  protect_from_forgery :except => [:add, :update, :delete]
  before_filter :is_logged
  def add
    respond_to do |format|
      format.json {
        reviewN = Review.create(review_params)
        reviewN.user_id = 1 # POPRAVITI  da radi kada se user loginuje
        reviewN.save
        msg = { :status => "ok", :message => "Success!", :html => reviewN }
        render :json => msg
      }
      format.html {
        render :status => :method_not_allowed, :nothing => true
        return
      }
    end

  end

  def get
    @review = Review.find(params[:id])
    render json: @review
  end
  
  def update
    respond_to do |format|
      format.json {
        
        reviewN = Review.update(review_params[:id],review_params)
        msg = { :status => "ok", :message => "Success!", :html => reviewN }
        render :json => msg
      }
      format.html {
        render :status => :method_not_allowed, :nothing => true
        return
      }
    end
    
  end
  def delete
    respond_to do |format|
      format.json {
        Review.destroy(review_params[:id])
        msg = { :status => "ok", :message => "Success!", :html => "<b>Obrisano</b>" }
        render :json => msg
      }
    end
    
  end
  def getall
    @reviews=Review.all
    render json: @reviews
  end

  private

  def review_params
    params.require(:review).permit(:id,:rating, :content, :date_created, :user_id)
  end

end
