json.extract! flight, :id, :date, :to, :from, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
