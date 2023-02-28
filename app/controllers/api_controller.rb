class ApiController < ApplicationController
  def random_greeting
    @greeting = Message.order("RANDOM()").first.greeting
    render json: { greeting: @greeting }
  end
end
