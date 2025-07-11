import korea from '../assets/korea.jpg';
import china from '../assets/china.jpg';
import japan from '../assets/japan.jpg';
import russia from '../assets/russia.jpg';
import newzealand from '../assets/newzealand.jpg';

export const extendedCountryData = {
  southKorea: {
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
        name: "Bibimbap",
        description: "A colorful rice bowl topped with various vegetables, meat, and a fried egg, served with gochujang (red chili paste).",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg"
      },
      {
        name: "Kimchi",
        description: "Fermented vegetables, usually napa cabbage or radish, seasoned with chili powder, garlic, and other spices. A staple side dish.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Yeolmukimchi_3.jpg"
      },
      {
        name: "Bulgogi",
        description: "Thinly sliced marinated beef grilled to perfection. The marinade typically includes soy sauce, sugar, sesame oil, and garlic.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bulgogi_%28Korean_bbq_beef%29.jpg"
      },
      {
        name: "Japchae",
        description: "Stir-fried glass noodles with vegetables and meat, seasoned with soy sauce and sesame oil. A popular party dish.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Japchae.jpg"
      },
      {
        name: "Tteokbokki",
        description: "Spicy rice cakes and fish cakes in a sweet and spicy sauce made with gochujang. A popular street food.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tteokbokki.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Gyeongbokgung-GeunJeongJeon.jpg"
      },
      {
        name: "Jeju Island",
        city: "Jeju",
        description: "A volcanic island known for its natural beauty, including Hallasan Mountain, waterfalls, and unique cultural heritage.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jeju_Island_Seongsan_Ilchulbong.jpg"
      },
      {
        name: "Bulguksa Temple",
        city: "Gyeongju",
        description: "A UNESCO World Heritage site featuring stunning Buddhist architecture and beautiful gardens.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bulguksa_Temple.jpg"
      },
      {
        name: "Namsan Seoul Tower",
        city: "Seoul",
        description: "An iconic tower offering panoramic views of Seoul and a popular spot for couples and tourists.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/N_Seoul_Tower.jpg"
      },
      {
        name: "Busan Gamcheon Culture Village",
        city: "Busan",
        description: "A colorful hillside village known for its street art, murals, and vibrant cultural atmosphere.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Gamcheon_Culture_Village.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Peking_duck.jpg"
      },
      {
        name: "Dim Sum",
        description: "A variety of small dishes served in bamboo steamers, including dumplings, buns, and other bite-sized delicacies.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Dim_sum_at_tim_ho_wan.jpg"
      },
      {
        name: "Kung Pao Chicken",
        description: "A spicy stir-fried dish with chicken, peanuts, vegetables, and chili peppers in a savory sauce.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kung_Pao_Chicken.jpg"
      },
      {
        name: "Hot Pot",
        description: "A communal dining experience where diners cook raw ingredients in a simmering pot of soup at the table.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Chinese_hot_pot.jpg"
      },
      {
        name: "Xiaolongbao",
        description: "Soup dumplings filled with pork and a rich broth, served with vinegar and ginger.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Xiaolongbao.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Great_Wall_of_China.jpg"
      },
      {
        name: "Forbidden City",
        city: "Beijing",
        description: "A vast imperial palace complex that served as the home of Chinese emperors for nearly 500 years.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Forbidden_City.jpg"
      },
      {
        name: "Terracotta Army",
        city: "Xi'an",
        description: "An archaeological site featuring thousands of life-sized terracotta soldiers guarding the tomb of Emperor Qin Shi Huang.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Terracotta_Army.jpg"
      },
      {
        name: "Li River",
        city: "Guilin",
        description: "Famous for its karst mountain scenery and the iconic view of fishermen on bamboo rafts.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Li_River.jpg"
      },
      {
        name: "Shanghai Bund",
        city: "Shanghai",
        description: "A waterfront area featuring colonial-era buildings and modern skyscrapers, showcasing Shanghai's history and development.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Shanghai_Bund.jpg"
      }
    ]
  }
}; 