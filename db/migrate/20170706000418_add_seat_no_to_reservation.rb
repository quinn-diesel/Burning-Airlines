class AddSeatNoToReservation < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :seat_no, :string
  end
end
