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
r1 = Reservation.create seat_no:"2B"
r2 = Reservation.create seat_no:"3A"
r3 = Reservation.create seat_no:"4D"



Flight.destroy_all
f1 = Flight.create date:"2017-12-12", from:"Los Angeles", to:"Sydney"
f2 = Flight.create date:"2017-11-11", from:"London", to:"Jakarta"
f3 = Flight.create date:"2017-09-19", from:"Los Angeles", to:"Sydney"
f4 = Flight.create date:"2017-09-20", from:"Madrid", to:"Paris"
f5 = Flight.create date:"2017-09-21", from:"Paris", to:"New York"
f6 = Flight.create date:"2017-09-22", from:"Bangkok", to:"New York"
f7 = Flight.create date:"2017-09-23", from:"New York", to:"Sydney"
f8 = Flight.create date:"2017-09-24", from:"New Dehli", to:"Honolulu"
f9 = Flight.create date:"2017-09-25", from:"Honolulu", to:"New York"
f10 = Flight.create date:"2017-09-26", from:"Tokyo", to:"Toronto"
f11 = Flight.create date:"2017-09-27", from:"Toronto", to:"Bangkok"
f12 = Flight.create date:"2017-09-28", from:"Dubai", to:"Honolulu"
f13 = Flight.create date:"2017-09-29", from:"Nanjing", to:"Sydney"
f14 = Flight.create date:"2017-09-30", from:"Singapore", to:"Madrid"
f15 = Flight.create date:"2017-10-19", from:"Phuket", to:"Bali"
f16 = Flight.create date:"2017-10-01", from:"Cuba", to:"Bali"

Airplane.destroy_all
p1 = Airplane.create name:'797', rows:"20", columns:"4"
p2 = Airplane.create name:'A999', rows:"24", columns:"6"
p3 = Airplane.create name:'747', rows:'30', columns:'4'
p4 = Airplane.create name:'888', rows:'18', columns:'5'
p5 = Airplane.create name:'676', rows:'24', columns:'4'
p6 = Airplane.create name:'454', rows:'26', columns:'6'
p7 = Airplane.create name:'333', rows:'28', columns:'4'
p8 = Airplane.create name:'A18', rows:'17', columns:'5'
p9 = Airplane.create name:'987', rows:'32', columns:'5'
p10 = Airplane.create name:'A346', rows:'40', columns:'6'


u1.reservations << r1
u2.reservations << r2
u3.reservations << r3


p9.flights << f16

p1.flights << f1 << f2
p2.flights << f3
p3.flights << f4
p4.flights << f5
p5.flights << f6
p6.flights << f7
p7.flights << f8 << f12
p8.flights << f9 << f13
p9.flights << f10 << f14
p10.flights << f11 << f15 << f16


f1.reservations << r1 << r2 << r3


puts "Seeds planted...."
