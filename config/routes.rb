# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'base#app'

  scope '/api' do
    resources :restaurants
  end

  get '*path', to: 'application#fallback_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
