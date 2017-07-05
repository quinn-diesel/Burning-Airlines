class Flight < ApplicationRecord
  belongs_to :airplane, optional: true
  has_many :reservations
  has_many :users, :through => :reservations
end
