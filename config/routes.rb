Rails.application.routes.draw do
  resources :reservations
  resources :flights
  resources :airplanes
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
