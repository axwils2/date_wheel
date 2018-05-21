# frozen_string_literal: true

# ============================================
# APPLICATION-CONTROLLER =====================
# ============================================
class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception, unless: -> { request.format.json? }

  # -----------------------------------
  # FALLBACK-HTML ---------------------
  # -----------------------------------
  def fallback_html
    render file: 'public/index.html'
  end
end
