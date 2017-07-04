class RenamePlaneIdInFlights < ActiveRecord::Migration[5.0]
  def change
    rename_column :flights, :plane_id, :airplane_id
  end
end
