class CountController < ApplicationController
  def home
  end

  def increment_count
    session[:count] ||= 0
    session[:count] += 1
    render json: { count: session[:count] }
  end

  def current_count
    session[:count] ||= 0
    render json: { count: session[:count] }
  end

  def reset_count
    session[:count] = 0
    render json: { count: session[:count] }
  end
end
