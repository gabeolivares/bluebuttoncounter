Rails.application.routes.draw do
  root to: 'count#home'

  post "/count", to: "count#increment_count"
  get "/count", to: "count#current_count"
  post "/reset_count", to: "count#reset_count"
end
