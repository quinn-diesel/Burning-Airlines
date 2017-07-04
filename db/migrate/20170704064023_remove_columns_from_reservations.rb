class RemoveColumnsFromReservations < ActiveRecord::Migration[5.0]
  def change
    remove_column :reservations, :flight_id
    remove_column :reservations, :integer
  end
end
