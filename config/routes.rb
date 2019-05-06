Rails.application.routes.draw do
  devise_for :users
  
  root 'items#index'

  resources :users, only: [:show]
  resources :items, only: [:index, :show] do
    resources :categories, only: [:search]
  end
end
