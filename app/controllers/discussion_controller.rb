class DiscussionController < ApplicationController
  before_filter :is_logged
  protect_from_forgery :except => [:add, :update, :delete]
  def add
    respond_to do |format|
      format.json {
        discussionN = Discussion.create(discussion_params)
        discussionN.save
        msg = { :status => "ok", :message => "Success!", :html => discussionN}
        render :json => msg
      }
      format.html {
        render :status => :method_not_allowed, :nothing => true
        return
      }
    end

  end

  def get
    @discussion = Discussion.find(params[:id])
    render json: @discussion
  end

  def getAdQuestions
    @question = Discussion.where(ad_offer_id: params[:id]).order(:created_at).reverse_order;
    render json: @question
  end
  
  def update
    respond_to do |format|
      format.json {
        
        discussionN = Discussion.update(discussion_params[:id],discussion_params)
        msg = { :status => "ok", :message => "Success!", :html => discussionN }
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
        Discussion.destroy(discussion_params[:id])
        msg = { :status => "ok", :message => "Success!", :html => "<b>Obrisano</b>" }
        render :json => msg
      }
    end
    
  end
  def getall
    @discussions=Discussion.all
    render json: @discussions
  end

  private

  def discussion_params
    params.require(:discussion).permit(:id,:content, :date_created, :ad_offer_id, :user_id)
  end


end
