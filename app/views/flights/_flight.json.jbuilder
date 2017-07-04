json.extract! flight, :id, :date, :to, :from, :plane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
