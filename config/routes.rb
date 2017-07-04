Rails.application.routes.draw do

  root 'session#new'

  get '/login'  => 'session#new' # login form
  post '/login' => 'session#create' # check credentials and attempt login (set session)
  delete '/login' => 'session#destroy' # log out destroy the session


  get '/pages/app' => 'pages#app'

  resources :reservations
  resources :flights
  resources :airplanes
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
