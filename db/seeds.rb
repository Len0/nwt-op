# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
UserType.create([{user_type: 'administrator'},{user_type: 'klijent'},{user_type: 'oglasivac'}])

AdType.create([{ad_type: 'tv'},{ad_type: 'radio'},{ad_type: 'novine'},{ad_type: 'plakat'},{ad_type: 'pano'},{ad_type: 'mobilna'}])

User.create([{username: 'emir', hashed_password: 'emir1', password: "emir", salt: '1', name: 'Emir Ahmetovic', email:'emir@gmail.com', is_activated: 1, user_type_id:1 },
             {username: 'Irfan', hashed_password: 'irfo1',password: "klixovaca", salt: '2', name: 'Irfan Prazina', email:'irfo@gmail.com', is_activated: 1, user_type_id:1 },
             {username: 'Alen', hashed_password: 'leno1', password: "klixovaca",salt: '3', name: 'Alen Hadzic', email:'leno@gmail.com', is_activated: 1, user_type_id:1 },
             {username: 'Kemo', hashed_password: 'kemulator1', password: "klixovaca", salt: '4', name: 'Kemo Kemica', email:'kemulator@gmail.com', is_activated: 1, user_type_id: 3 },
             {username: 'Stojan', hashed_password: 'stojica1', password: "klixovaca", salt: '5', name: 'Stojan Stojica', email:'stojica@gmail.com', is_activated: 1, user_type_id: 3 },
             {username: 'Firaun', hashed_password: 'firni1', password: "klixovaca", salt: '6', name: 'Firaun Sejdic', email:'firni@ganci.com', is_activated: 1, user_type_id: 2 },
             {username: 'Bobek', hashed_password: 'bobi1', password: "klixovaca",  salt: '7', name: 'Bobek Plast', email:'bobek@ganci.com', is_activated: 1, user_type_id: 2 }
            ])

Subscription.create([{date_subscribed: Date.today.to_s, user_id: 1, user_sub_to_id:2},
                     {date_subscribed: Date.today.to_s, user_id: 3, user_sub_to_id:2},
                     {date_subscribed: Date.today.to_s, user_id: 6, user_sub_to_id:4},
                     {date_subscribed: Date.today.to_s, user_id: 6, user_sub_to_id:5},
                     {date_subscribed: Date.today.to_s, user_id: 7, user_sub_to_id:4}
                    ])

Discussion.create([{content: "Extra!", ad_offer_id: 1, user_id: 6},
                   {content: "Super!", ad_offer_id: 1, user_id: 7},
                   {content: "Ovo je dobro", ad_offer_id: 2, user_id: 6},
                   {content: "Ovo ne navalja nista", ad_offer_id: 2, user_id: 7},
                   {content: "Daj dzaba", ad_offer_id: 3, user_id: 6}
                  ])

Review.create([{content: "Extra!", rating: 3, user_id: 1},
                   {content: "Super!", rating: 3, user_id: 2},
                   {content: "Ovo je dobro", rating: 3,user_id: 3},
                   {content: "Ovo ne navalja nista", rating: 3, user_id: 4},
                   {content: "Daj dzaba", rating: 3, user_id: 5}
                  ])

AdBought.create([{date_start: Date.today.to_s, duration: 30, ad_offer_id: 1, user_id: 1},
               {date_start: Date.today.to_s, duration: 30, ad_offer_id: 1, user_id: 2},
               {date_start: Date.today.to_s,duration: 30, ad_offer_id: 2, user_id: 3},
               {date_start: Date.today.to_s,duration: 30, ad_offer_id: 2, user_id: 4},
               {date_start: Date.today.to_s,duration: 30, ad_offer_id: 3, user_id: 5}
              ])

AdOffer.create([{title: 'Reklama TV', subtitle: 'Najjeftinije na planeti', description: 'Primetime reklama na TV Amna', price: 50.23, unit: 'min', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: false, views_count: 0,max_duration:2, user_id: 4, ad_type_id: 1},
                {title: 'Reklama Radio', subtitle: 'Najjeftinije u eteru', description: 'Na radiju Kameleon', price: 20.00, unit: 'min', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: false,views_count:0, user_id: 4, max_duration:2, ad_type_id: 2},
                {title: 'Reklama TV Druga', subtitle: 'Najjeftinije na planeti 2', description: 'Primetime reklama na TV Kiseljak', price: 12.45, unit: 'min', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: false,views_count:0,max_duration:2, user_id: 4, ad_type_id: 1},
                {title: 'Reklama Radio Druga', subtitle: 'Najjeftinije u eteru 2', description: 'Na radiju Istocno Sarajevo', price: 20.23, unit: 'min', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: 0,views_count:0,max_duration:2, user_id: 4, ad_type_id: 2},
                {title: 'Reklama Novine', subtitle: 'Najjeftinije na papiru', description: 'Kod Fahre', price: 2.25, unit: 'duz', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: false,views_count:0,max_duration:2, user_id: 4, ad_type_id: 3},
                {title: 'Reklama Plakat', subtitle: 'Najjeftinije po slici', description: 'Europlakat', price: 4.00, unit: 'sat', date_start: Date.today.to_s, date_end: (Date.today + 10).to_s, visibility: false,views_count:0, max_duration:2, user_id: 4, ad_type_id: 4}
               ])