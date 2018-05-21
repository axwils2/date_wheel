# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'base#index'

  scope '/api' do
    resources :restaurants
  end
end
