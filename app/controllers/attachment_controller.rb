class AttachmentController < ApplicationController
  before_filter :is_logged, except: [:add]
  protect_from_forgery :except => [:add, :update, :delete]
  def add
    respond_to do |format|
      format.json {
        attachmentN = Attachment.create(attachment_params)
        #attachmentN.user_id = 1 # POPRAVITI  da radi kada se user loginuje
        attachmentN.save
        msg = { :status => "ok", :message => "Success!", :html => attachmentN}
        render :json => msg
      }
      format.html {
        render :status => :method_not_allowed, :nothing => true
        return
      }
    end

  end

  def update
    respond_to do |format|
      format.json {

        attachmentN = Attachment.update(attachment_params[:id],attachment_params)
        msg = { :status => "ok", :message => "Success!", :html => attachmentN }
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
        Attachment.destroy(attachment_params[:id])
        msg = { :status => "ok", :message => "Success!", :html => "<b>Obrisano</b>" }
        render :json => msg
      }
      format.html {
        render :status => :method_not_allowed, :nothing => true
        return
      }
    end

  end

  def get
    @attachment = Attachment.find(params[:id])
    render json: @attachment
  end
  
  def getall
    @attachments = Attachment.all
    render json: @attachments
  end

  def attachment_params
    params.require(:attachment).permit(:id,:path, :date_created, :ad_bought_id, :user_id)
  end

end
