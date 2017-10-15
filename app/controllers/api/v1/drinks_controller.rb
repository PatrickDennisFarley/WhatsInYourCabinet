require 'pry'

class Api::V1::DrinksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Drink.all, adapter: :json
  end

  def show
    drink = Drink.find(params[:id])
    ingredient = drink.ingredient
    render json: { drink: drink, ingredient: ingredient }, adapter: :json
  end

  def create
    data = JSON.parse(request.body.read)
    if Drink.exists?(user_id: current_user.id, body: data["body"])
      @drink = Drink.where(user_id: current_user.id, body: data["body"])
      render json: @drink
    else
      drink = Drink.create(user_id: current_user.id, body: data["body"])
      render json: drink
    end
  end

end
