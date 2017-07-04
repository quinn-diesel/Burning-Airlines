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
u2 = User.create name:"regular", email:"regular@email.com", password:'chicken', is_admin:false
u3 = User.create name:"bravetraveller", email:"brave@email.com",
password:'chicken'

Reservation.destroy_all
r1 = Reservation.create


Flight.destroy_all
f1 = Flight.create date:"2017-12-12", from:"Los Angeles", to:"Sydney"
f2 = Flight.create date:"2017-11-11", from:"London", to:"Jakarta"
f3 = Flight.create date:"2017-07-19", from:"Los Angeles", to:"Sydney"

Airplane.destroy_all
p1 = Airplane.create name:'797', rows:"20", columns:"4"
p2 = Airplane.create name:'A999', rows:"24", columns:"6"
p3 = Airplane.create name:'C678', rows:'30', columns:'12'

u1.reservations << r1


p1.flights << f1 << f2
p2.flights << f3

f1.reservations << r1


puts "Seeds planted...."
