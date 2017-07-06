class SessionController < ApplicationController
  def new  # login page
  end

  def create
    user = User.find_by email: params[:email]

    if user.present? and user.authenticate params[:password] # login success
      session[:user_id] = user.id
      redirect_to '/app#reservations'
    else
      #login fail
      flash[:error] = "Incorrect Email and/or Password"
      redirect_to login_path
    end
  end

  def destroy  # log out
    session[:user_id] = nil
    redirect_to root_path
  end
end
