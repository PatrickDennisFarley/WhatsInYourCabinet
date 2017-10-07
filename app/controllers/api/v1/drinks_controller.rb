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

end
