class PagesController < ApplicationController

  def home

  end

  def admin_panel
    unless (params[:menu])
      params[:menu] = 'dashboard'
    end

    if params[:menu] == 'users'
      @users = User.all
    end
  end

end
