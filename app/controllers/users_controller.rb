class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :destroy]
  before_filter :is_logged, :except => [:login, :new, :create, :activation]

  def ban
    admin = User.where(id: session[:user_id]).first
    if (!params.has_key?(:user_id))
    else
      user_to_ban = User.where(id: params[:user_id]).first
      if user_to_ban.nil?
        logger.debug("Administrator #{admin.username} pokusao banovati nepostojeceg korisnika sa id #{params[:user_id]}.")
      elsif user_to_ban.id == admin.id
        logger.debug("LOL! Administrator #{admin.username} pokusao banovati samog sebe!!!!!!!!1111")
      else
        if user_to_ban.is_banned?
          logger.debug("Administrator #{admin.username} pokusao banovati vec banovanog korisnika sa id #{params[:user_id]} (username= #{user_to_ban.username})")
        else
          user_to_ban.is_banned=true
          if user_to_ban.valid?
            user_to_ban.save
            logger.debug("Administrator #{admin.username} banovao korisnika sa id #{params[:user_id]} (username= #{user_to_ban.username})")
          else
            logger.debug("Administrator #{admin.username} pokusao banovati korisnika sa id #{params[:user_id]} (username= #{user_to_ban.username}) ali je nesto poslo po zlu.")
          end
        end
      end
    end
    redirect_to request.referer
  end

  def unban
    # this action shall be run only after the require_admin filter!
    admin = User.where(id: session[:user_id]).first

    if (!params.has_key?(:user_id))
    else
      user_to_unban = User.where(id: params[:user_id]).first
      if user_to_unban.nil?
        logger.debug("Administrator #{admin.username} pokusao odbanovati nepostojeceg korisnika sa id #{params[:user_id]}.")
      else
        if !user_to_unban.is_banned?
          logger.debug("Administrator #{admin.username} pokusao odbanovati korisnika koji nije banovan. Korisnik ima id #{params[:user_id]} i username= #{user_to_unban.username})")
        else
          user_to_unban.is_banned=false
          if user_to_unban.valid?
            user_to_unban.save
            logger.debug("Administrator #{admin.username} odbanovao korisnika sa id #{params[:user_id]} (username= #{user_to_unban.username})")
          else
            logger.debug("Administrator #{admin.username} pokusao odbanovati korisnika sa id #{params[:user_id]} (username= #{user_to_unban.username}) ali je nesto poslo po zlu.")
          end
        end
      end
    end
    redirect_to request.referer
  end

  def activation
    act_hash = params[:act_hash]
    user = User.where(hashed_password: act_hash ).first

    if user.nil?
      redirect_to root_path, :notice => (t "Korisnik ne postoji.")
    else
      user.is_activated = 1
      user.save
      redirect_to root_path, :notice => (t "Korisnik je aktiviran")
    end


  end

  def login
    @user = User.authenticate(params[:username], params[:password])
    if @user.nil?
      respond_to do |format|
        format.json {
          render :json => {:error => "true", :message => (t "user.does_not_exist")}
        }
        format.html {
          redirect_to root_path, :notice  => (t "user.invalid_login_params")
        }
        end
    else
      session[:user_id] = @user.id
      session[:user_name] = @user.username
      session[:user_type] = @user.user_type.user_type

      # Spasi u log
      log = Log.new()
      log.description = "User " + @user.name + " logged in."
      log.tag = "login"
      log.save

      logger.debug @user.user_type
      respond_to do |format|
        format.json {
        }
        format.html {
          redirect_to root_path, :notice => (t "user.logged_in_successfully")
        }
        end

      end
  end

  def logout
    session[:user_id] = nil
    session[:user_name] = nil
    session[:user_type] = nil

    respond_to do |format|
      format.json {
      }
      format.html {
        redirect_to root_path, :notice => (t "user.logged_out_successfully")
      }
    end
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end
  
  
  def indexSearch
    @users = User.all
  end
  
  # GET /users/1
  # GET /users/1.json
  def show
    set_user
  end

  # GET /users/new
  def new
    @user = User.new
  end

  def all
    @users = User.all
    render json: @users
  end



  def get
    @user = User.where(id: params[:id]).first
    respond_to do |format|
      format.json {
        if @user.nil?
          render :json => {:error => "true", :message => (t "user.does_not_exist")}
        else
          render :json => @user
        end
      }
    end
  end



  # POST /users
  # POST /users.json
   def create
    if verify_recaptcha
      @user = User.new(user_params)
      @user.is_activated = 0
      @user.is_banned = 0


      respond_to do |format|
        if @user.save
          UserMailer.activate_account(@user).deliver
          format.html { redirect_to @user, notice: (t "user.succesfully_created") }
          format.json { render action: 'show', status: :created, location: @user }
        else
          format.html { render action: 'new' }
          format.json { render json: @user.errors, status: :unprocessable_entity }
        end
      end
    else
      respond_to do |format|
        format.html { redirect_to new_user_path, notice: (t user.invalid_fields) }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def edit
    
  end
  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: (t "user.succesfully_updated") }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to request.referer }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:username, :email, :name,:password,:password_confirmation, :contact, :description,:avatar)
  end
end 