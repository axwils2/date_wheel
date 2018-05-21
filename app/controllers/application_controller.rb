# frozen_string_literal: true

# ============================================
# APPLICATION-CONTROLLER =====================
# ============================================
class ApplicationController < ActionController::API
  protect_from_forgery with: :exception

  def fallback_html
    render file: 'public/index.html'
  end
end
