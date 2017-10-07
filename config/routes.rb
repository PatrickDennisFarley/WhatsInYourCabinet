Rails.application.routes.draw do
  devise_for :users

  root 'static_pages#index'
  resources :all_drinks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :drinks do
        get 'all_drinks', on: :collection
      end
      resources :queries, only: [:create, :index, :destroy]
    end
  end
end
