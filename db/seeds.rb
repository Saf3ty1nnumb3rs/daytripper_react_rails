# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Post.destroy_all
Image.destroy_all
Destination.destroy_all


josh = User.create!(username: 'S4f3ty' , image: , email: , location: 'Murph\'s mom\'s bedroom' )
murphdawg = User.create!(username: 'MurphDawg' , image: , email: , location: 'Lawrenceville, GA' )
camcam = User.create!(username: 'CamCam', image: , email: , location: 'EAV')
wilhelm = User.create!(username: 'KaiserWilhelm', image: , email: , location: 'Don\'t Care' )
blake = User.create!(username: 'NatureboyBlakeSavage', image: , email: , location: 'Atlanta, GA' )