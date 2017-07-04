Rails.application.routes.draw do

  get 'create/destroy'

  root to: 'login_static#show'

  get 'pages/app'

  resources :reservations
  resources :flights
  resources :airplanes
  resources :users
end
