class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.date :date
      t.string :to
      t.string :from
      t.integer :plane_id

      t.timestamps
    end
  end
end
