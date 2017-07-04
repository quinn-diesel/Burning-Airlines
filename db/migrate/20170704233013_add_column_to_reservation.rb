class AddColumnToReservation < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :row_no, :string
    add_column :reservations, :column_no, :string
  end
end
