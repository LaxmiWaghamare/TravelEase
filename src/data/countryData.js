import india from '../assets/india.jpg';
import korea from '../assets/korea.jpg';
import china from '../assets/china.jpg';
import japan from '../assets/japan.jpg';
import russia from '../assets/russia.jpg';
import newzealand from '../assets/newzealand.jpg';
import gulabjamun from '../assets/gulabjamun.jpg';
import idli from '../assets/idli.jpg';
import panipuri from '../assets/panipuri.jpg';
import jaipurCityPalace from '../assets/Jaipur City Palace.jpg';
import varanasiGhats from '../assets/Varanasi Ghats.jpg';
import keralaBackwaters from '../assets/Kerala Backwaters.jpg';
import himalayanMountains from '../assets/Himalayan Mountains.jpg';
import bulgogi from '../assets/Bulgogi.jpg';
import japchae from '../assets/Japchae.jpg';
import tteokbokki from '../assets/Tteokbokki.jpg';
import gyeongbokgungPalace from '../assets/Gyeongbokgung Palace.jpg';
import jejuIsland from '../assets/Jeju Island.jpg';
import bulguksaTemple from '../assets/Bulguksa Temple.jpg';
import namsanSeoulTower from '../assets/Namsan Seoul Tower.jpg';
import busanGamcheonCultureVillage from '../assets/Busan Gamcheon Culture Village.jpg';
import pekingDuck from '../assets/Peking Duck.jpg';
import dimSum from '../assets/Dim Sum.jpg';
import kungPaoChicken from '../assets/Kung Pao Chicken.jpg';
import hotPot from '../assets/Hot Pot.jpg';
import xiaolongbao from '../assets/Xiaolongbao.jpg';
import liRiver from '../assets/Li River.jpg';
import shanghaiBund from '../assets/Shanghai Bund.jpg';
import forbiddenCity from '../assets/Forbidden City.jpg';
import greatWallOfChina from '../assets/Great Wall of China.jpg';
import terracottaArmy from '../assets/Terracotta Army.jpg';

export const countryData = {
  india: {
    name: 'India',
    image: india,
    description: "From the Himalayas to Kerala's backwaters, India offers a tapestry of landscapes, colors, and cultures for every traveler.",
    price: '₹ 1,00,000',
    cultural: {
      traditions: "India is known for its rich cultural heritage including yoga, meditation, classical dance forms like Bharatanatyam, and traditional arts. The country celebrates diversity with over 2,000 ethnic groups and more than 1,600 languages.",
      languages: "Hindi is the official language, but India recognizes 22 official languages including English, Bengali, Telugu, Marathi, Tamil, and Urdu. There are over 1,600 languages spoken across the country.",
      festivals: "Major festivals include Diwali (Festival of Lights), Holi (Festival of Colors), Eid, Christmas, and regional celebrations like Pongal, Baisakhi, and Onam.",
      history: "India has one of the world's oldest civilizations with a history spanning over 5,000 years. It was home to the Indus Valley Civilization and has been ruled by various dynasties including the Mauryas, Guptas, and Mughals."
    },
    foods: [
      {
        name: "Butter Chicken",
        description: "A rich  and creamy curry made with tender chicken pieces in a tomato-based sauce with butter and cream. Served with naan bread or rice.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg"
      },
      {
        name: "Biryani",
        description: "A fragrant rice dish cooked with aromatic spices, meat (usually chicken or mutton), and caramelized onions. Each region has its own unique variation.",
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=400&h=300&fit=crop"
      },
      {
        name: "Masala Dosa",
        description: "A crispy fermented rice and lentil crepe filled with spiced potato mixture, served with coconut chutney and sambar. A South Indian breakfast favorite that originated in Karnataka and is now popular across India. The dosa is made from a fermented batter of rice and urad dal, creating a light, crispy texture.",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?w=400&h=300&fit=crop"
      },
      {
        name: "Rogan Josh",
        description: "A Kashmiri dish made with tender lamb pieces in a rich, aromatic gravy flavored with Kashmiri red chilies and traditional spices.",
        image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?w=400&h=300&fit=crop"
      },
      {
        name: "Gulab Jamun",
        description: "Soft, spongy milk-solid balls soaked in rose-flavored sugar syrup. A popular dessert served at celebrations and festivals.",
        image: "https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg"
      },
      {
        name: "Idli Sambar",
        description: "Steamed rice cakes made from fermented rice and lentil batter, served with hot sambar and coconut chutney. A healthy and nutritious breakfast option from South India.",
        image: "https://media.istockphoto.com/id/2212874809/photo/traditional-breakfast-of-south-india-idly-served-with-sambar-chutney.jpg?s=612x612&w=0&k=20&c=CygShVOl6zSUXAeFEexohoMLCK6XiGtGxdi6Lj2musc="
      },
      {
        name: "Pani Puri",
        description: "Crispy hollow puris filled with spiced potato mixture and dunked in tangy tamarind water. A popular street food snack that's both spicy and refreshing.",
        image: "https://images.pexels.com/photos/13063313/pexels-photo-13063313.jpeg"
      }
    ],
    religions: [
      {
        name: "Hinduism",
        description: "The world's oldest religion, practiced by about 80% of Indians. It encompasses a wide range of beliefs and practices.",
        sacredPlaces: ["Varanasi", "Haridwar", "Rishikesh", "Badrinath", "Kedarnath", "Jagannath Temple, Puri"]
      },
      {
        name: "Islam",
        description: "The second-largest religion in India, introduced in the 7th century. Indian Muslims have contributed significantly to the country's culture.",
        sacredPlaces: ["Taj Mahal, Agra", "Jama Masjid, Delhi", "Haji Ali Dargah, Mumbai", "Ajmer Sharif, Rajasthan"]
      },
      {
        name: "Sikhism",
        description: "Founded in the 15th century by Guru Nanak, Sikhism emphasizes equality, service, and devotion to God.",
        sacredPlaces: ["Golden Temple, Amritsar", "Hemkund Sahib", "Anandpur Sahib", "Patna Sahib"]
      },
      {
        name: "Buddhism",
        description: "Founded by Gautama Buddha in the 6th century BCE, Buddhism originated in India and spread across Asia.",
        sacredPlaces: ["Bodh Gaya", "Sarnath", "Kushinagar", "Sanchi Stupa", "Ajanta Caves"]
      }
    ],
    places: [
      {
        name: "Taj Mahal",
        city: "Agra",
        description: "A stunning white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. One of the Seven Wonders of the World.",
        image: "https://images.pexels.com/photos/28762053/pexels-photo-28762053.jpeg"
      },
      {
        name: "Jaipur City Palace",
        city: "Jaipur",
        description: "A magnificent palace complex that showcases the rich heritage of Rajasthan with its stunning architecture and royal history.",
        image: "https://images.pexels.com/photos/19149591/pexels-photo-19149591.jpeg"
      },
      {
        name: "Varanasi Ghats",
        city: "Varanasi",
        description: "The spiritual capital of India, known for its sacred ghats along the Ganges River where pilgrims perform religious rituals.",
        image: "https://images.pexels.com/photos/30854162/pexels-photo-30854162.jpeg"
      },
      {
        name: "Kerala Backwaters",
        city: "Kerala",
        description: "A network of interconnected canals, rivers, lakes, and inlets where traditional houseboats offer serene floating experiences.",
        image: "https://images.pexels.com/photos/13044391/pexels-photo-13044391.jpeg"
      },
      {
        name: "Himalayan Mountains",
        city: "Various",
        description: "The world's highest mountain range offers breathtaking trekking routes, spiritual retreats, and adventure sports opportunities.",
        image: "https://images.pexels.com/photos/31029367/pexels-photo-31029367.jpeg"
      }
    ]
  },
  southkorea: {
    name: 'South Korea',
    image: korea,
    description: 'Experience cherry blossoms, mountain temples, and vibrant city life in the heart of East Asia.',
    price: '₹ 1,10,000',
    cultural: {
      traditions: "South Korea has a rich cultural heritage influenced by Confucianism and Buddhism. Traditional practices include tea ceremonies, hanbok (traditional clothing), and respect for elders.",
      languages: "Korean is the official language, with Hangul as the writing system. English is widely taught in schools and used in business.",
      festivals: "Major festivals include Seollal (Lunar New Year), Chuseok (Harvest Festival), and regional celebrations like the Boryeong Mud Festival and Jinju Lantern Festival.",
      history: "Korea has a history spanning over 5,000 years, with three ancient kingdoms (Goguryeo, Baekje, and Silla) and the Joseon Dynasty that ruled for 500 years."
    },
    foods: [
      {
        name: "Bulgogi",
        description: "Thinly sliced marinated beef grilled to perfection. The marinade typically includes soy sauce, sugar, sesame oil, and garlic.",
        image: bulgogi
      },
      {
        name: "Japchae",
        description: "Stir-fried glass noodles with vegetables and meat, seasoned with soy sauce and sesame oil. A popular party dish.",
        image: japchae
      },
      {
        name: "Tteokbokki",
        description: "Spicy rice cakes and fish cakes in a sweet and spicy sauce made with gochujang. A popular street food.",
        image: tteokbokki
      }
    ],
    religions: [
      {
        name: "Buddhism",
        description: "Introduced in the 4th century, Buddhism has deeply influenced Korean culture, art, and philosophy.",
        sacredPlaces: ["Bulguksa Temple", "Haeinsa Temple", "Tongdosa Temple", "Songgwangsa Temple"]
      },
      {
        name: "Confucianism",
        description: "A philosophical system that has shaped Korean society, emphasizing family values, education, and social harmony.",
        sacredPlaces: ["Jongmyo Shrine", "Confucian Schools", "Royal Tombs", "Ancestral Shrines"]
      },
      {
        name: "Christianity",
        description: "Introduced in the 18th century, Christianity has grown significantly and includes both Protestant and Catholic denominations.",
        sacredPlaces: ["Myeongdong Cathedral", "Yoido Full Gospel Church", "Seoul Anglican Cathedral"]
      },
      {
        name: "Shamanism",
        description: "An indigenous religion involving communication with spirits through rituals and ceremonies.",
        sacredPlaces: ["Sacred Mountains", "Shaman Shrines", "Traditional Ritual Sites"]
      }
    ],
    places: [
      {
        name: "Gyeongbokgung Palace",
        city: "Seoul",
        description: "The largest and most beautiful of the Five Grand Palaces built during the Joseon Dynasty, featuring traditional Korean architecture.",
        image: "https://images.pexels.com/photos/4840854/pexels-photo-4840854.jpeg"
      },
      {
        name: "Jeju Island",
        city: "Jeju",
        description: "A volcanic island known for its natural beauty, including Hallasan Mountain, waterfalls, and unique cultural heritage.",
        image: "https://images.pexels.com/photos/11687637/pexels-photo-11687637.jpeg"
      },
      {
        name: "Bulguksa Temple",
        city: "Gyeongju",
        description: "A UNESCO World Heritage site featuring stunning Buddhist architecture and beautiful gardens.",
        image: "https://images.pexels.com/photos/6427160/pexels-photo-6427160.jpeg"
      },
      {
        name: "Namsan Seoul Tower",
        city: "Seoul",
        description: "An iconic tower offering panoramic views of Seoul and a popular spot for couples and tourists.",
        image: "https://images.pexels.com/photos/31414675/pexels-photo-31414675.jpeg"
      },
      {
        name: "Busan Gamcheon Culture Village",
        city: "Busan",
        description: "A colorful hillside village known for its street art, murals, and vibrant cultural atmosphere.",
        image: "https://images.pexels.com/photos/29861965/pexels-photo-29861965.jpeg"
      }
    ]
  },
  china: {
    name: 'China',
    image: china,
    description: "Marvel at the Great Wall, karst mountains, and tranquil lakes—China's natural wonders await.",
    price: '₹ 1,20,000',
    cultural: {
      traditions: "Chinese culture is deeply rooted in Confucianism, emphasizing family values, respect for elders, and social harmony. Traditional practices include calligraphy, martial arts, and tea ceremonies.",
      languages: "Mandarin Chinese is the official language, with hundreds of dialects spoken across the country. Chinese characters have been used for over 3,000 years.",
      festivals: "Major festivals include Chinese New Year (Spring Festival), Mid-Autumn Festival, Dragon Boat Festival, and Lantern Festival.",
      history: "China has one of the world's oldest civilizations with over 5,000 years of recorded history, including the Xia, Shang, Zhou, Qin, Han, Tang, Song, Ming, and Qing dynasties."
    },
    foods: [
      {
        name: "Peking Duck",
        description: "A famous dish from Beijing featuring crispy duck skin served with thin pancakes, spring onions, and hoisin sauce.",
        image: "https://images.pexels.com/photos/15590364/pexels-photo-15590364.jpeg"
      },
      {
        name: "Dim Sum",
        description: "A variety of small dishes served in bamboo steamers, including dumplings, buns, and other bite-sized delicacies.",
        image: "https://media.istockphoto.com/id/839958568/photo/dim-sum.jpg?s=1024x1024&w=is&k=20&c=xzeVGMCxeyqhMGtRpACpFJo8DHSKtgusPaiiExdds7k="
      },
      {
        name: "Kung Pao Chicken",
        description: "A spicy stir-fried dish with chicken, peanuts, vegetables, and chili peppers in a savory sauce.",
        image: "https://media.istockphoto.com/id/1362518882/photo/vegan-fried-tempeh-with-rice-and-vegetables-asian-healthy-food.jpg?s=1024x1024&w=is&k=20&c=pQqwbHJthwKMbO7sz1WnaziZY6yBeIMoAAO58f8XyYg="
      },
      {
        name: "Hot Pot",
        description: "A communal dining experience where diners cook raw ingredients in a simmering pot of soup at the table.",
        image: "https://media.istockphoto.com/id/1306612636/photo/chongqing-hot-pot-chongqing-hotpot.jpg?s=612x612&w=0&k=20&c=eo8HHdFSxzBQrTgqnsnGan1J_suNtx0iGTNMancTD94="
      },
      {
        name: "Xiaolongbao",
        description: "Soup dumplings filled with pork and a rich broth, served with vinegar and ginger.",
        image: "https://images.pexels.com/photos/19021565/pexels-photo-19021565.jpeg"
      }
    ],
    religions: [
      {
        name: "Buddhism",
        description: "Introduced from India in the 1st century CE, Buddhism has deeply influenced Chinese culture and philosophy.",
        sacredPlaces: ["Shaolin Temple", "Lingyin Temple", "Longmen Grottoes", "Mogao Caves", "Potala Palace"]
      },
      {
        name: "Taoism",
        description: "An indigenous Chinese philosophy and religion emphasizing harmony with nature and the Tao (the Way).",
        sacredPlaces: ["Wudang Mountains", "Qingcheng Mountain", "Mount Tai", "Taoist Temples"]
      },
      {
        name: "Confucianism",
        description: "A philosophical system based on the teachings of Confucius, emphasizing moral values and social harmony.",
        sacredPlaces: ["Confucius Temple", "Confucius Family Mansion", "Confucius Cemetery", "Confucian Schools"]
      },
      {
        name: "Islam",
        description: "Introduced in the 7th century, Islam has a significant presence in China, especially in Xinjiang and other western regions.",
        sacredPlaces: ["Great Mosque of Xi'an", "Id Kah Mosque", "Niu Jie Mosque", "Huaisheng Mosque"]
      }
    ],
    places: [
      {
        name: "Great Wall of China",
        city: "Beijing",
        description: "One of the world's most impressive architectural feats, stretching over 13,000 miles across northern China.",
        image: "https://images.pexels.com/photos/9274463/pexels-photo-9274463.jpeg"
      },
      {
        name: "Forbidden City",
        city: "Beijing",
        description: "A vast imperial palace complex that served as the home of Chinese emperors for nearly 500 years.",
        image: "https://images.pexels.com/photos/210284/pexels-photo-210284.jpeg"
      },
      {
        name: "Terracotta Army",
        city: "Xi'an",
        description: "An archaeological site featuring thousands of life-sized terracotta soldiers guarding the tomb of Emperor Qin Shi Huang.",
        image: "https://images.pexels.com/photos/31467010/pexels-photo-31467010.jpeg"
      },
      {
        name: "Li River",
        city: "Guilin",
        description: "Famous for its karst mountain scenery and the iconic view of fishermen on bamboo rafts.",
        image: "https://images.pexels.com/photos/2084291/pexels-photo-2084291.jpeg"
      },
      {
        name: "Shanghai Bund",
        city: "Shanghai",
        description: "A waterfront area featuring colonial-era buildings and modern skyscrapers, showcasing Shanghai's history and development.",
        image: "https://images.pexels.com/photos/345162/pexels-photo-345162.jpeg"
      }
    ]
  },
  japan: {
    name: 'Japan',
    image: japan,
    description: 'From Mount Fuji to serene cherry blossoms, Japan blends tradition and breathtaking nature.',
    price: '₹ 1,30,000',
    cultural: {
      traditions: "Japanese culture emphasizes harmony, respect, and discipline. Traditional practices include tea ceremonies, flower arranging (ikebana), and martial arts like karate and judo.",
      languages: "Japanese is the official language, with three writing systems: hiragana, katakana, and kanji (Chinese characters).",
      festivals: "Major festivals include Hanami (cherry blossom viewing), Tanabata (Star Festival), Obon (ancestor worship), and regional matsuri celebrations.",
      history: "Japan has a rich history spanning over 2,000 years, from the Jomon period through the feudal era to modern times, with the Meiji Restoration marking a major turning point."
    },
    foods: [
      {
        name: "Sushi",
        description: "Vinegared rice combined with various ingredients like fish, vegetables, and egg, often served with wasabi and soy sauce.",
        image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
      },
      {
        name: "Ramen",
        description: "Noodles served in a flavorful broth with various toppings like pork, egg, and vegetables. Each region has its own style.",
        image: "https://images.pexels.com/photos/31393431/pexels-photo-31393431.jpeg"
      },
      {
        name: "Tempura",
        description: "Lightly battered and deep-fried seafood and vegetables, served with a dipping sauce.",
        image: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg"
      },
      {
        name: "Wagyu Beef",
        description: "Premium Japanese beef known for its marbling and tenderness, often served as steak or in hot pot dishes.",
        image: "https://images.pexels.com/photos/8935365/pexels-photo-8935365.jpeg"
      },
      {
        name: "Matcha Desserts",
        description: "Green tea-flavored sweets including ice cream, cakes, and traditional wagashi (Japanese confections).",
        image: "https://media.istockphoto.com/id/908660758/photo/dessert-cake-in-a-white-cup.jpg?s=612x612&w=0&k=20&c=oBG9tsmAZWodcWpv1v0A6G6KO_-EHf1Xj4XkhMtqh_Q="
      },
      {
        name: "Pasta",
        description: "Delicious pasta served on elegant black plates, showcasing Japanese culinary artistry and attention to presentation.",
        image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
      }
    ],
    religions: [
      {
        name: "Shinto",
        description: "Japan's indigenous religion, focusing on kami (spirits) and the connection between humans and nature.",
        sacredPlaces: ["Ise Grand Shrine", "Meiji Shrine", "Fushimi Inari Shrine", "Itsukushima Shrine"]
      },
      {
        name: "Buddhism",
        description: "Introduced from China in the 6th century, Buddhism has deeply influenced Japanese culture and philosophy.",
        sacredPlaces: ["Todai-ji Temple", "Kinkaku-ji (Golden Pavilion)", "Ryoan-ji Temple", "Senso-ji Temple"]
      },
      {
        name: "Zen Buddhism",
        description: "A school of Buddhism emphasizing meditation and mindfulness, with significant influence on Japanese arts and culture.",
        sacredPlaces: ["Eihei-ji Temple", "Kennin-ji Temple", "Daitoku-ji Temple", "Zen Meditation Centers"]
      },
      {
        name: "Christianity",
        description: "Introduced in the 16th century, Christianity has a small but significant presence in Japan.",
        sacredPlaces: ["St. Mary's Cathedral", "Oura Church", "Christian Historical Sites"]
      }
    ],
    places: [
      {
        name: "Mount Fuji",
        city: "Shizuoka/Yamanashi",
        description: "Japan's highest and most iconic mountain, a UNESCO World Heritage site and popular hiking destination.",
        image: "https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg"
      },
      {
        name: "Fushimi Inari Shrine",
        city: "Kyoto",
        description: "Famous for its thousands of vermilion torii gates leading up the mountain, dedicated to the Shinto god of rice.",
        image: "https://images.pexels.com/photos/3767862/pexels-photo-3767862.jpeg"
      },
      {
        name: "Shibuya Crossing",
        city: "Tokyo",
        description: "The world's busiest pedestrian crossing, symbolizing Tokyo's energy and modern urban culture.",
        image: "https://images.pexels.com/photos/6635794/pexels-photo-6635794.jpeg"
      },
      {
        name: "Arashiyama Bamboo Grove",
        city: "Kyoto",
        description: "A magical bamboo forest path that creates a serene atmosphere and is one of Kyoto's most photographed locations.",
        image: "https://images.pexels.com/photos/52706/pexels-photo-52706.jpeg"
      },
      {
        name: "Miyajima Island",
        city: "Hiroshima",
        description: "Famous for the floating torii gate of Itsukushima Shrine, a UNESCO World Heritage site and one of Japan's most scenic spots.",
        image: "https://images.pexels.com/photos/32853965/pexels-photo-32853965.jpeg"
      }
    ]
  },
  russia: {
    name: 'Russia',
    image: russia,
    description: 'Explore the vastness of Russia, from Lake Baikal to the wilds of Siberia and the beauty of St. Petersburg.',
    price: '₹ 1,25,000',
    cultural: {
      traditions: "Russian culture is rich in literature, music, ballet, and visual arts. Traditional practices include banya (steam baths), samovar tea ceremonies, and folk dancing.",
      languages: "Russian is the official language, with over 100 minority languages spoken across the vast country.",
      festivals: "Major celebrations include Maslenitsa (Butter Week), Victory Day, and regional festivals celebrating local cultures and traditions.",
      history: "Russia has a complex history spanning over 1,000 years, from the Kievan Rus through the Tsarist era, Soviet period, to modern Russia."
    },
    foods: [
      {
        name: "Borscht",
        description: "A hearty beet soup with vegetables and meat, often served with sour cream and dark bread.",
        image: "https://images.pexels.com/photos/18955541/pexels-photo-18955541.jpeg"
      },
      {
        name: "Pelmeni",
        description: "Small dumplings filled with meat, served with sour cream and often in a clear soup.",
        image: "https://images.pexels.com/photos/8601683/pexels-photo-8601683.jpeg"
      },
      {
        name: "Beef Stroganoff",
        description: "Sautéed pieces of beef served in a sauce with sour cream, mushrooms, and onions.",
        image: "https://images.pexels.com/photos/1998918/pexels-photo-1998918.jpeg"
      },
      {
        name: "Blini",
        description: "Thin pancakes served with various fillings like caviar, sour cream, or jam.",
        image: "https://images.pexels.com/photos/4966612/pexels-photo-4966612.jpeg"
      },
      {
        name: "Pirozhki",
        description: "Small baked or fried buns filled with meat, vegetables, or sweet fillings.",
        image: "https://images.pexels.com/photos/8599660/pexels-photo-8599660.jpeg"
      }
    ],
    religions: [
      {
        name: "Russian Orthodoxy",
        description: "The dominant religion in Russia, with deep historical and cultural significance.",
        sacredPlaces: ["Cathedral of Christ the Saviour", "St. Basil's Cathedral", "Trinity Lavra of St. Sergius", "Kazan Cathedral"]
      },
      {
        name: "Islam",
        description: "The second-largest religion in Russia, particularly strong in regions like Tatarstan and the North Caucasus.",
        sacredPlaces: ["Kul Sharif Mosque", "Moscow Cathedral Mosque", "Blue Mosque", "Historical Mosques"]
      },
      {
        name: "Buddhism",
        description: "Practiced primarily in regions like Kalmykia, Buryatia, and Tuva.",
        sacredPlaces: ["Ivolginsky Datsan", "Buddhist Temples", "Sacred Mountains", "Meditation Centers"]
      },
      {
        name: "Judaism",
        description: "Has a long history in Russia, with significant communities in major cities.",
        sacredPlaces: ["Moscow Choral Synagogue", "Jewish Cultural Centers", "Historical Synagogues"]
      }
    ],
    places: [
      {
        name: "Red Square",
        city: "Moscow",
        description: "The heart of Moscow, surrounded by iconic landmarks including the Kremlin, St. Basil's Cathedral, and Lenin's Mausoleum.",
        image: "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg"
      },
      {
        name: "Hermitage Museum",
        city: "St. Petersburg",
        description: "One of the world's largest and oldest museums, housed in the magnificent Winter Palace.",
        image: "https://images.pexels.com/photos/5146452/pexels-photo-5146452.jpeg"
      },
      {
        name: "Lake Baikal",
        city: "Siberia",
        description: "The world's deepest and oldest lake, containing 20% of the world's unfrozen freshwater.",
        image: "https://images.pexels.com/photos/7108215/pexels-photo-7108215.jpeg"
      },
      {
        name: "Trans-Siberian Railway",
        city: "Various",
        description: "The world's longest railway line, offering a unique way to experience Russia's vast landscapes.",
        image: "https://images.pexels.com/photos/10357443/pexels-photo-10357443.jpeg"
      },
      {
        name: "Kazan Kremlin",
        city: "Kazan",
        description: "A UNESCO World Heritage site featuring a unique blend of Russian and Tatar architecture.",
        image: "https://media.istockphoto.com/id/621234134/photo/sun-rises.jpg?s=612x612&w=0&k=20&c=yHDyKxv06bqGwKz_z7hJgIlY-EOKla_0QqgAUgzdYRA="
      }
    ]
  },
  newZealand: {
    name: 'New Zealand',
    image: newzealand,
    description: 'A paradise for nature lovers—discover fjords, mountains, and lush green valleys in New Zealand.',
    price: '₹ 1,40,000',
    cultural: {
      traditions: "New Zealand culture blends Maori traditions with European influences. Traditional practices include haka (war dance), poi dancing, and carving.",
      languages: "English and Maori are the official languages, with Maori being the language of the indigenous people.",
      festivals: "Major celebrations include Waitangi Day, ANZAC Day, and various Maori cultural festivals and events.",
      history: "New Zealand has a rich history from Maori settlement around 1300 CE to European colonization in the 19th century, leading to the modern multicultural society."
    },
    foods: [
      {
        name: "Hangi",
        description: "Traditional Maori method of cooking food in an earth oven using heated rocks and steam.",
        image: "https://media.istockphoto.com/id/1127129358/photo/traditional-hangi-meal-cooked-underground-in-an-earth-oven-by-maori-people-rotorua-north.jpg?s=1024x1024&w=is&k=20&c=nfQ2CbEo24iosoygDIq8wMfKmUXlUJidoZqSPcLT9Q4="
      },
      {
        name: "Pavlova",
        description: "A meringue-based dessert topped with fresh fruit and whipped cream, named after Russian ballerina Anna Pavlova.",
        image: "https://media.istockphoto.com/id/527028494/photo/delicious-berry-pavlova-cake-with-strawberries-and-raspberries.jpg?s=612x612&w=0&k=20&c=c1Vu__bajQxNW0mbzI_r2KYM1pNKnmgpEoYEUSlLXrQ="
      },
      {
        name: "Fish and Chips",
        description: "A British-influenced dish featuring battered fish and crispy chips, popular throughout New Zealand.",
        image: "https://media.istockphoto.com/id/1136847748/photo/fish-and-chips.jpg?s=612x612&w=0&k=20&c=1G1K9lH_UU9tQxW0pSdl2Qk2m_LHl4l_Dc8iP64a96o="
      },
      {
        name: "Lamb",
        description: "New Zealand is famous for its high-quality lamb, often served roasted or grilled.",
        image: "https://media.istockphoto.com/id/1486754572/photo/nihari-delicious-and-spicy-tender-meat-curry.jpg?s=612x612&w=0&k=20&c=npEIeHy_oOC4IWiGOYN4k7PwFOUT9REHIDlcVcozkT8="
      },
      {
        name: "Manuka Honey",
        description: "Unique honey with medicinal properties, produced from the native manuka tree.",
        image: "https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg"
      }
    ],
    religions: [
      {
        name: "Christianity",
        description: "The dominant religion, with various denominations including Anglican, Catholic, and Presbyterian churches.",
        sacredPlaces: ["St. Paul's Cathedral", "Christchurch Cathedral", "Sacred Heart Cathedral", "Historic Churches"]
      },
      {
        name: "Maori Spirituality",
        description: "Traditional Maori beliefs and practices connected to nature, ancestors, and spiritual forces.",
        sacredPlaces: ["Sacred Mountains", "Marae (Meeting Grounds)", "Traditional Sites", "Cultural Centers"]
      },
      {
        name: "Buddhism",
        description: "Growing presence with temples and meditation centers, particularly in major cities.",
        sacredPlaces: ["Buddhist Temples", "Meditation Centers", "Zen Gardens", "Cultural Centers"]
      },
      {
        name: "Hinduism",
        description: "Practiced by the Indian community, with temples and cultural centers throughout the country.",
        sacredPlaces: ["Hindu Temples", "Cultural Centers", "Community Halls", "Religious Sites"]
      }
    ],
    places: [
      {
        name: "Milford Sound",
        city: "Fiordland",
        description: "A stunning fjord in Fiordland National Park, known for its dramatic cliffs, waterfalls, and wildlife.",
        image: "https://images.pexels.com/photos/32830524/pexels-photo-32830524.jpeg"
      },
      {
        name: "Tongariro National Park",
        city: "Central North Island",
        description: "A UNESCO World Heritage site featuring active volcanoes, emerald lakes, and the famous Tongariro Alpine Crossing.",
        image: "https://images.pexels.com/photos/4053562/pexels-photo-4053562.jpeg"
      },
      {
        name: "Bay of Islands",
        city: "Northland",
        description: "A subtropical paradise with 144 islands, perfect for sailing, fishing, and dolphin watching.",
        image: "https://images.pexels.com/photos/5342976/pexels-photo-5342976.jpeg"
      },
      {
        name: "Franz Josef Glacier",
        city: "Westland",
        description: "A spectacular glacier that descends from the Southern Alps almost to sea level, offering guided walks and helicopter tours.",
        image: "https://images.pexels.com/photos/28908766/pexels-photo-28908766.jpeg"
      },
      {
        name: "Rotorua",
        city: "Bay of Plenty",
        description: "Known for its geothermal activity, Maori culture, and therapeutic hot springs.",
        image: "https://images.pexels.com/photos/6071597/pexels-photo-6071597.jpeg"
      }
    ]
  }
}; 