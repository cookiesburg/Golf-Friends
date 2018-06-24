Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/:id/scores' => 'users#scores'
      resources :users
      resources :scores
      resources :courses
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
