Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  patch '/locate', to: 'api/destinations#locate'

  post '/search', to: 'api/destinations#search'

  post '/nav', to: 'api/destinations#show'
  
  
  
  
  
  namespace :api do
    resources :users
    resources :destinations do
      resources :images
      resources :posts
    end
  end
end
