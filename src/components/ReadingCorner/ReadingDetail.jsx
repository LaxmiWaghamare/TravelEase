import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRef, useEffect } from 'react';

const detailsData = {
  may: {
    title: "Top Places to Visit in May in India to Beat the Heat",
    intro: "May is the perfect time to escape the scorching plains and head to India's coolest hill stations. Here are some of the best destinations to enjoy pleasant weather, scenic beauty, and adventure.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/5qap5aO4i9A", // Manali & hill stations scenic video
    places: [
      { city: "Manali", info: "Cool hill station in Himachal Pradesh, famous for its snow-capped mountains, adventure sports, and vibrant cafes." },
      { city: "Darjeeling", info: "Famous for tea gardens, toy train rides, and breathtaking views of the Kanchenjunga range." },
      { city: "Shimla", info: "Popular summer retreat with colonial charm, bustling Mall Road, and nearby Kufri for snow activities." },
      { city: "Nainital", info: "Beautiful lake city in Uttarakhand, ideal for boating, shopping, and cable car rides." },
      { city: "Leh-Ladakh", info: "High-altitude desert with stunning landscapes, monasteries, and adventure biking routes." },
      { city: "Coorg", info: "Coffee plantations, lush green hills, and waterfalls make it a serene escape in Karnataka." },
      { city: "Ooty", info: "Queen of the Nilgiris, known for its botanical gardens, toy train, and cool climate." },
      { city: "Munnar", info: "Tea gardens, pleasant climate, and wildlife sanctuaries in Kerala's Western Ghats." },
      { city: "Sikkim", info: "Breathtaking mountain scenery, Buddhist monasteries, and vibrant local culture." },
      { city: "Kodaikanal", info: "Hill station with waterfalls, lakes, and scenic viewpoints in Tamil Nadu." },
    ],
    tips: [
      "Pack light woolens for hill stations.",
      "Book hotels in advance as May is peak season.",
      "Try local cuisines and street food."
    ]
  },
  summer: {
    title: "10 Best Places to Visit in Summer in India in 2025",
    intro: "Summer in India is all about finding cool retreats and adventure. These destinations offer a mix of beaches, mountains, and unique experiences for your 2025 vacation.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    video: "https://www.pexels.com/video/beautiful-landscape-in-suru-valley-ladakh-18002489/", // Suru Valley Ladakh video
    places: [
      { city: "Rishikesh", info: "Adventure capital with river rafting, yoga retreats, and the iconic Laxman Jhula." },
      { city: "Goa", info: "Beaches, vibrant nightlife, water sports, and Portuguese heritage sites." },
      { city: "Andaman Islands", info: "Exotic beaches, coral reefs, and world-class diving spots." },
      { city: "Darjeeling", info: "Pleasant summer climate, scenic views, and the Himalayan Mountaineering Institute." },
      { city: "Leh-Ladakh", info: "Adventure, unique culture, and mesmerizing landscapes." },
      { city: "Spiti Valley", info: "Remote cold desert with monasteries, trekking, and stargazing." },
      { city: "Mount Abu", info: "Only hill station in Rajasthan, known for Nakki Lake and Dilwara Temples." },
      { city: "Nainital", info: "Lake city with cool weather, boating, and shopping at Tibetan Market." },
      { city: "Mcleodganj", info: "Tibetan culture, monasteries, and pleasant weather in Himachal Pradesh." },
      { city: "Coorg", info: "Coffee plantations, waterfalls, and wildlife sanctuaries." },
    ],
    tips: [
      "Carry sunscreen and stay hydrated.",
      "Explore local markets for souvenirs.",
      "Participate in adventure activities for a memorable trip."
    ]
  },
  festival: {
    title: "15 Best Festival Season Destinations in India (2025)",
    intro: "India's festivals are a riot of color, music, and tradition. These destinations come alive during festival season, offering unique cultural experiences.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    video: "https://www.pexels.com/video/hindu-woman-dancing-7685152/", // Indian festival dance video
    places: [
      { city: "Varanasi", info: "Celebrated for Diwali and Ganga Aarti on the ghats." },
      { city: "Jaipur", info: "Known for Teej, Gangaur, and the Jaipur Literature Festival." },
      { city: "Kerala", info: "Onam celebrations with boat races and traditional feasts." },
      { city: "West Bengal", info: "Durga Puja grandeur with artistic pandals and processions." },
      { city: "Goa", info: "Carnival festival with parades, music, and dance." },
      { city: "Pushkar", info: "Camel fair and religious festivals in Rajasthan." },
      { city: "Udaipur", info: "Mewar festival and cultural events by the lakes." },
      { city: "Mumbai", info: "Ganesh Chaturthi festivities with massive idols and immersion processions." },
      { city: "Mysore", info: "Dussehra celebrations with royal processions and illuminated palaces." },
      { city: "Hyderabad", info: "Bonalu festival with traditional dances and rituals." },
      { city: "Kolkata", info: "Poila Boishakh (Bengali New Year) and Durga Puja." },
      { city: "Chennai", info: "Pongal festival with traditional games and food." },
      { city: "Ahmedabad", info: "Rann Utsav and kite festival in Gujarat." },
      { city: "Rishikesh", info: "International Yoga Festival on the banks of the Ganges." },
      { city: "Bhubaneswar", info: "Ratha Yatra festival with chariot processions." },
    ],
    tips: [
      "Check festival dates before planning your trip.",
      "Respect local customs and dress codes.",
      "Try festival-specific foods and sweets."
    ]
  },
  adventure: {
    title: "Adventure Escapes: Trekking & Nature Trails",
    intro: "India offers some of the world's most thrilling trekking routes and nature trails, from the Himalayas to the Western Ghats. Here are top picks for adventure seekers.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    video: "https://www.pexels.com/video/tall-waterfall-5738272/", // Waterfall trekking video
    places: [
      { city: "Roopkund Trek", info: "A mysterious high-altitude glacial lake trek in Uttarakhand." },
      { city: "Valley of Flowers", info: "UNESCO World Heritage trek with vibrant alpine flowers." },
      { city: "Chadar Trek", info: "Frozen river trek in Ladakh, open only in winter." },
      { city: "Kumara Parvatha", info: "Challenging trek in Karnataka's Western Ghats." },
      { city: "Sandakphu", info: "Highest peak in West Bengal, offers views of Everest and Kanchenjunga." },
      { city: "Rajmachi", info: "Popular monsoon trek near Mumbai and Pune." },
      { city: "Dzongri Trek", info: "Scenic trek in Sikkim with views of Mt. Kanchenjunga." },
      { city: "Tadiandamol", info: "Highest peak in Coorg, Karnataka, ideal for beginners." },
      { city: "Kedarkantha", info: "Winter snow trek in Uttarakhand." },
      { city: "Har Ki Dun", info: "Valley trek with ancient villages and Himalayan views." },
    ],
    tips: [
      "Check weather and trail conditions before trekking.",
      "Hire local guides for safety.",
      "Carry essentials: water, snacks, first-aid, and proper gear."
    ]
  },
  food: {
    title: "A Foodie's Guide: Must-Try Indian Dishes",
    intro: "India's culinary diversity is unmatched. From spicy street food to royal delicacies, here are must-try dishes for every food lover.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/1T2i1Qh3Yb8", // Indian street food video
    places: [
      { city: "Delhi", info: "Chaat, butter chicken, and parathas in Chandni Chowk." },
      { city: "Mumbai", info: "Vada pav, pav bhaji, and seafood at Juhu Beach." },
      { city: "Kolkata", info: "Rosogolla, fish curry, and kathi rolls." },
      { city: "Hyderabad", info: "Biryani, haleem, and kebabs." },
      { city: "Chennai", info: "Dosa, idli, and filter coffee." },
      { city: "Amritsar", info: "Amritsari kulcha and lassi." },
      { city: "Jaipur", info: "Dal baati churma and ghewar." },
      { city: "Lucknow", info: "Tunday kebab and biryani." },
      { city: "Goa", info: "Goan fish curry and bebinca." },
      { city: "Indore", info: "Poha, jalebi, and street snacks at Sarafa Bazaar." },
    ],
    tips: [
      "Try local street food but ensure hygiene.",
      "Ask locals for food recommendations.",
      "Don't miss regional sweets and desserts."
    ]
  },
  heritage: {
    title: "Heritage Walks: Exploring India's History",
    intro: "India's rich history is reflected in its monuments, forts, and ancient cities. Embark on a heritage walk to discover the stories behind these iconic sites.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/2XkV6IpV2Y0", // Indian heritage sites video
    places: [
      { city: "Delhi", info: "Red Fort, Qutub Minar, and Humayun's Tomb." },
      { city: "Agra", info: "Taj Mahal, Agra Fort, and Fatehpur Sikri." },
      { city: "Jaipur", info: "Amber Fort, City Palace, and Hawa Mahal." },
      { city: "Varanasi", info: "Oldest living city with ghats and temples." },
      { city: "Hampi", info: "Ruins of the Vijayanagara Empire, a UNESCO site." },
      { city: "Khajuraho", info: "Famous for its group of Hindu and Jain temples with intricate carvings." },
      { city: "Mysore", info: "Mysore Palace and Chamundi Hill." },
      { city: "Kolkata", info: "Victoria Memorial and colonial architecture." },
      { city: "Madurai", info: "Meenakshi Temple and ancient markets." },
      { city: "Pune", info: "Shaniwar Wada and Aga Khan Palace." },
    ],
    tips: [
      "Hire a local guide for deeper insights.",
      "Wear comfortable shoes for walking tours.",
      "Respect monument rules and photography guidelines."
    ]
  }
};

const ReadingDetail = () => {
  const { season } = useParams();
  const data = detailsData[season];
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = 0;
      cardRef.current.style.transform = 'translateY(40px)';
      setTimeout(() => {
        cardRef.current.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
        cardRef.current.style.opacity = 1;
        cardRef.current.style.transform = 'translateY(0)';
      }, 80);
    }
  }, [season]);

  if (!data) return <div style={{ padding: "20px" }}>Invalid reading corner page.</div>;

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <Link to="/reading-corner" style={{ color: "#d40000", textDecoration: "none", fontWeight: "600" }}>
        &larr; Back to Reading Corner
      </Link>
      <div ref={cardRef} style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        marginTop: '28px',
        padding: '32px 28px',
        minHeight: '340px',
        border: '1px solid #eee',
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)'
      }}>
        <img src={data.image} alt={data.title} style={{ width: '100%', maxHeight: 320, objectFit: 'cover', borderRadius: 12, marginBottom: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }} />
        <h1 style={{ color: "#d40000", fontWeight: 700, fontSize: '2rem', marginBottom: '12px' }}>{data.title}</h1>
        {data.intro && <p style={{ margin: "0 0 18px 0", color: "#444", fontSize: "1.13rem" }}>{data.intro}</p>}
        <ul style={{ marginTop: "10px", lineHeight: "1.7", paddingLeft: '18px' }}>
          {data.places.map(({ city, info }, i) => (
            <li key={i} style={{ marginBottom: "13px", fontSize: '1.04rem' }}>
              <strong style={{ color: '#d40000' }}>{city}:</strong> {info}
            </li>
          ))}
        </ul>
        {data.tips && (
          <div style={{ marginTop: "28px", background: "#f9f9f9", padding: "15px 20px", borderRadius: "8px" }}>
            <strong style={{ color: "#d40000" }}>Tips:</strong>
            <ul style={{ margin: "10px 0 0 18px", color: "#555" }}>
              {data.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
        {data.video && (
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <h3 style={{ color: '#d40000', marginBottom: 12 }}>Watch a Demo</h3>
            {season === 'adventure' ? (
              <video
                src="https://www.pexels.com/video/tall-waterfall-5738272/download/"
                controls
                style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                poster={data.image}
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            ) : season === 'summer' ? (
              <video
                src="https://www.pexels.com/video/beautiful-landscape-in-suru-valley-ladakh-18002489/download/"
                controls
                style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                poster={data.image}
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            ) : season === 'festival' ? (
              <video
                src="https://www.pexels.com/video/hindu-woman-dancing-7685152/download/"
                controls
                style={{ width: '100%', maxWidth: 600, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                poster={data.image}
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            ) : (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                <iframe
                  src={data.video}
                  title={data.title + ' video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 12 }}
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingDetail;
