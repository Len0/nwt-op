class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery except: :login

  before_filter :set_locale
  def index

  end

  def set_locale
    if (params[:locale])
      session[:locale] = params[:locale]
    elsif session[:locale].nil?
      session[:locale] = request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    end
    I18n.locale = session[:locale] || I18n.default_locale
  end

  def is_logged
    if session[:user_id].nil?
      flash[:error] = (t "user.does_not_have_permission")
      redirect_to root_path, :notice => (t "user.not_logged_in")
    end
  end

  def is_oglasivac
    tip=session[:user_type]
    if tip.nil? or tip!='oglasivac'
      respond_to do |format|
        format.json {
          msg = { :status => "error", :message => "Nemate privilegije!"}
          render :json => msg
        }
      end

    end
  end
end
