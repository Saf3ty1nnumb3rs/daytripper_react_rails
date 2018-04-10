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

 destination1 = Destination.create!(title: , image: , description: )
 destination1 = Destination.create!(title: 'Chattanooga' , image: , description: has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing Tennessee River, such as white water rafting, hang-gliding, and hiking. )
 destination1 = Destination.create!(title:'Athens, GA', image: , description: 'home of the University of Georgia as well as a thriving indie music scene. The city has a number of historical buildings with typical Southern architecture in addition to several 18th-century house museums open for touring. A college town, it is quite walkable and packs many venues into its small downtown area.' )
 destination1 = Destination.create!(title: 'Guide Stones' , image: , description: )
 destination1 = Destination.create!(title: , image: , description: )
 destination1 = Destination.create!(title: , image: , description: )
 destination1 = Destination.create!(title: , image: , description: )
 destination1 = Destination.create!(title: , image: , description: )
 destination1 = Destination.create!(title: , image: , description: )


image1 = Image.create!(image: , description: , destination_id: )
image2 = Image.create!(image: , description: , destination_id: )
image3 = Image.create!(image: , description: , destination_id: )
image4 = Image.create!(image: , description: , destination_id: )
image5 = Image.create!(image: , description: , destination_id: )
image6 = Image.create!(image: , description: , destination_id: )
image7 = Image.create!(image: , description: , destination_id: )
image8 = Image.create!(image: , description: , destination_id: )
image9 = Image.create!(image: , description: , destination_id: )
image10 = Image.create!(image: , description: , destination_id: )
image11 = Image.create!(image: , description: , destination_id: )
