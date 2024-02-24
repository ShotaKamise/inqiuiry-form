Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "inquiries#new"
  post '/inquiries', to: 'inquiries#create'
  get '/inquiries', to: 'inquiries#index'
  delete '/inquiries/:id', to: 'inquiries#destroy'
  # resources :inquiry, only: [:destroy]
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
