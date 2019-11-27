Rails.application.routes.draw do
  resources :bank_statements
  resources :accounts
  resources :apartments
  get '*path', to: 'pages#root', constraints: ->(request){request.format.html?}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#root'
end
