class CreateAirplanes < ActiveRecord::Migration[5.0]
  def change
    create_table :airplanes do |t|
      t.integer :rows
      t.integer :columns
      t.string :name

      t.timestamps
    end
  end
end
