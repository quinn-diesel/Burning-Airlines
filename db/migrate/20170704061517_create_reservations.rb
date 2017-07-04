class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.string :flight_id
      t.string :integer

      t.timestamps
    end
  end
end
