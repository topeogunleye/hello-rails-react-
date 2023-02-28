Rails.application.routes.draw do
  get 'api/random_greeting'
  namespace :api do
    get :random_greeting
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
