# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeds planting....."

User.destroy_all
u1 = User.create name:"admin", email:"admin@email.com", password:'chicken', is_admin:true

u2 = User.create name:'regular', email:'regular@email.com', password:'chicken', is_admin:false

Reservation.destroy_all
r1 = Reservation.create

Flight.destroy_all
f1 = Flight.create date:"2017-12-12", to:"Sydney", from:"Los Angeles"

Airplane.destroy_all
p1 = Airplane.create name:'797', rows:"20", columns:"4"

u1.reservations << r1

p1.flights << f1

f1.reservations << r1

puts "Seeds planted...."
