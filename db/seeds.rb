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


josh = User.create!(username: 'S4f3ty' , image: 'https://media.licdn.com/dms/image/C4E03AQF0yZmy5aAz9g/profile-displayphoto-shrink_200_200/0?e=1528592400&v=beta&t=fHbYRhKC7Jz-rlOY110O6a_D7PleEkZpkmp3J02hu84', email: 'fielddayforthesundays@gmail.com' , location: 'Murph\'s mom\'s bedroom' )
murphdawg = User.create!(username: 'MurphDawg' , image: 'https://media.licdn.com/dms/image/C4E03AQHm8ZI5qfxY5g/profile-displayphoto-shrink_800_800/0?e=1528592400&v=beta&t=_XhlapRYG0v5AdBnivugDPNDc3gDOVr6uAhKXNyq2OM', email: 'jdawg@email.com' , location: 'Lawrenceville, GA' )
camcam = User.create!(username: 'CamCam', image: 'https://files.slack.com/files-pri/T0351JZQ0-FA4ND5FFX/cam5.jpg', email: 'dookie@emailstuff.com', location: 'EAV')
wilhelm = User.create!(username: 'KaiserWilhelm', image: 'https://files.slack.com/files-pri/T0351JZQ0-FA4NCDMPF/photo_on_4-10-18_at_7.24_pm.jpg', email: 'zeitgeist@germanic.com', location: 'Don\'t Care' )
blake = User.create!(username: 'NatureboyBlakeSavage', image: 'https://ca.slack-edge.com/T0351JZQ0-U6V8GUE4X-a20f62c507d7-1024', email:'kittykat@hellokitty.com' , location: 'Atlanta, GA' )

 destination1 = Destination.create!(title: 'Toccoa Falls', image: 'https://photos.smugmug.com/Photography/Waterfalls-of-North-Georgia/i-sTTL87G/2/58f5fa47/X4/toccoa%20falls%20h-X4.jpg' , description: 'Sriracha raw denim scenester yuccie squid cold-pressed kale chips chambray swag green juice. Literally farm-to-table wayfarers succulents. Deep v vaporware trust fund lyft chicharrones kombucha street art everyday carry selvage brooklyn glossier normcore cloud bread authentic schlitz.')
 destination2 = Destination.create!(title: 'Chattanooga, TN' , image: 'https://pbs.twimg.com/media/DaNDy2sXkAAxNYG.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing Tennessee River, such as white water rafting, hang-gliding, and hiking.' )
 destination3 = Destination.create!(title:'Athens, GA', image: 'https://i2.wp.com/smoothmoversathens.com/wp-content/uploads/2017/01/athens-ga-real-estate-downtown1.jpg?zoom=2&resize=280%2C280', description: 'home of the University of Georgia as well as a thriving indie music scene. The city has a number of historical buildings with typical Southern architecture in addition to several 18th-century house museums open for touring. A college town, it is quite walkable and packs many venues into its small downtown area.' )
 destination4 = Destination.create!(title: 'Guidestones' , image: 'http://thinkingsidewayspodcast.com/wp-content/uploads/2014/06/GeorgiaGuidestones.jpg', description:'Often referred to as America’s stone henge, the Georgia Guidestones are a set of monolithic structures that were erected in Georgia in March of 1980.' )
 destination5 = Destination.create!(title: 'Brasstown Bald', image: 'http://www.golakechatuge.com/fullpanel/uploads/images/Brasstown%20Bald.jpg', description: 'Georgia’s tallest mountain. Its incredible 360 degree view allows you to see Georgia, North Carolina, Tennessee and South Carolina on a clear day. The changing seasons on Brasstown Bald offer visitors the opportunity to experience the wonders of nature for most of the year. ')
 destination6 = Destination.create!(title: 'Also Dope Spot', image: 'https://www.shutterbug.com/images/17/1jaws1518.jpg', description: 'Banh mi pour-over mixtape small batch, dreamcatcher williamsburg you probably haven\'t heard of them authentic kombucha umami YOLO messenger bag pitchfork slow-carb. Try-hard typewriter fam master cleanse art party, cliche pug palo santo tousled fingerstache gluten-free kinfolk readymade. Ramps trust fund YOLO hammock meh you probably haven\'t heard of them vegan mumblecore church-key. 3 wolf moon')
 destination7 = Destination.create!(title: 'Dope Spot', image: 'https://s-media-cache-ak0.pinimg.com/originals/f7/d9/43/f7d94371aaf7033f700f04bf2b9a629c.jpg', description: 'Pabst craft beer scenester green juice post-ironic aesthetic typewriter snackwave authentic slow-carb church-key succulents shoreditch gochujang YOLO.')
 destination8 = Destination.create!(title: 'Jigokudani Monkey Park', image: 'https://www.ar.jal.co.jp/world/en/guidetojapan/detail/img/jigokudani/jigokudani_01.jpg', description: 'Everyday carry dreamcatcher messenger bag kinfolk, deep v quinoa copper mug wolf vaporware. Bicycle rights tumblr prism, pork belly next level palo santo hell of post-ironic sriracha vape tumeric banh mi. Adaptogen craft beer pinterest heirloom tofu. +1 butcher')
 destination9 = Destination.create!(title: 'Beach!!!', image: 'https://lyndaanneart.files.wordpress.com/2015/07/img_1467.jpg?w=829&h=&crop=1&zoom=2', description: 'Pok pok thundercats messenger bag etsy migas twee coloring book, vegan venmo yuccie green juice quinoa raw denim direct trade. Pour-over swag retro, organic woke slow-carb cliche forage meh humblebrag blog affogato four dollar toast. Godard asymmetrical semiotics pickled leggings.')
 destination10 = Destination.create!(title: 'Woods!!!', image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/IMG_2551.jpg', description: 'Pok pok thundercats messenger bag etsy migas twee coloring book, vegan venmo yuccie green juice quinoa raw denim direct trade. Pour-over swag retro, organic woke slow-carb cliche forage meh humblebrag blog affogato four dollar toast. Godard asymmetrical semiotics pickled leggings.')

image1 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/170501Daily_0.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination1.id  )
image2 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/Narrows%202%20Yellow%20Tree-1%20%20Edit%201.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination1.id )
image3 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/6_6.jpg' , description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination2.id )
image4 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/Sunrise%20pond_1.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination2.id )
image5 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/IMG_3318.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination3.id )
image6 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/DSC_0655-1_0.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination4.id )
image7 = Image.create!(image: 'https://www.shutterbug.com/images/17/2jaws1518.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination5.id)
image8 = Image.create!(image: 'https://www.shutterbug.com/images/17/1jaws1518.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination6.id)
image9 = Image.create!(image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElvyi9dtTJI_Lmext6SCr_nezQxUpjWjrxiqGsq8CENegPaGm', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination7.id )
image10 = Image.create!(image: 'https://davesboringlife2999.files.wordpress.com/2011/06/20110606-084143.jpg?w=460&zoom=2' , description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination8.id )
image11 = Image.create!(image: 'https://davesboringlife2999.files.wordpress.com/2011/06/20110611-113708.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination9.id)
image12 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/170501Daily_0.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination1.id  )
image13 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/Narrows%202%20Yellow%20Tree-1%20%20Edit%201.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination1.id )
image14 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/6_6.jpg' , description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination2.id )
image15 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/Sunrise%20pond_1.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination2.id )
image16 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/IMG_3318.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination3.id )
image17 = Image.create!(image: 'https://www.shutterbug.com/images/styles/960-wide/public/photo_post/%5Buid%5D/DSC_0655-1_0.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination9.id )
image18 = Image.create!(image: 'https://www.shutterbug.com/images/17/1jaws1518.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination9.id)
image19 = Image.create!(image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElvyi9dtTJI_Lmext6SCr_nezQxUpjWjrxiqGsq8CENegPaGm', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination10.id )
image20 = Image.create!(image: 'https://davesboringlife2999.files.wordpress.com/2011/06/20110606-084143.jpg?w=460&zoom=2' , description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination10.id )
image21 = Image.create!(image: 'https://davesboringlife2999.files.wordpress.com/2011/06/20110611-113708.jpg', description: 'Has plenty of outdoor fun. In addition to parks and the Riverwalk, there are also a host of adventurous activities to enjoy along the rushing' , destination_id: destination10.id)