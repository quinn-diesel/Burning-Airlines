class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :users, through: :reservations
end
