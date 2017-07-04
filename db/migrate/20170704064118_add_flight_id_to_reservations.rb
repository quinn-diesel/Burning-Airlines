class AddFlightIdToReservations < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :flight_id, :integer
  end
end
