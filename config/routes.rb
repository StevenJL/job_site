Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :user_jobs, only:[:index]
      resources :jobs, only: [:create, :index]
    end
    resources :jobs, only: [:show]
    resources :user_jobs, only: [:create, :show]

    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
