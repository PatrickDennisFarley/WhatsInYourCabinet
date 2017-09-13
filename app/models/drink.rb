class Drink < ApplicationRecord
  validates :title, presence: true
  validates :ingredient1, presence: true
  validates :measure1, presence: true
  validates :instructions, presence: true

end
