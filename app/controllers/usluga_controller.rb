class UslugaController < ApplicationController
  before_filter :is_logged
  before_action :is_oglasivac, only: [:create]
  def create
    #id=session[:user_id]
    user=User.find(3)
    logger.info user.username
    @usluga = user.uslugas.new
    @usluga.name =params[:name]
    @usluga.description = params[:description]
    @usluga.price = params[:price]

    
    respond_to do |format|
        if @usluga.save
          format.json { render json: @usluga, status: :created}
        else
          format.json { render json: @usluga.errors, status: :unprocessable_entity }
        end
      end
  end
  def all
    @usluge = User.find(session[:user_id]).uslugas
    respond_to do |format|
      format.json {render json: @usluge}
    end
  end
  def usluga_params
    params.permit(:name, :description, :price)
  end
end
