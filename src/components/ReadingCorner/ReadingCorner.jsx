import React from "react";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    id: "may",
    title: "Top Places to Visit in May in India to Beat the Heat",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
    description: "Discover India's coolest hill stations and summer escapes for May."
  },
  {
    id: "summer",
    title: "10 Best Places to Visit in Summer in India in 2025",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=60",
    description: "Plan your summer adventure with these top destinations for 2025."
  },
  {
    id: "festival",
    title: "15 Best Festival Season Destinations in India (2025)",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=60",
    description: "Experience India's vibrant festivals and cultural hotspots."
  },
  {
    id: "adventure",
    title: "Adventure Escapes: Trekking & Nature Trails",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=60",
    description: "Explore the best trekking routes and nature trails across India."
  },
  {
    id: "food",
    title: "A Foodie's Guide: Must-Try Indian Dishes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
    description: "Savor the flavors of India with these iconic dishes and street foods."
  },
  {
    id: "heritage",
    title: "Heritage Walks: Exploring India's History",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=60",
    description: "Step back in time with these must-visit historical sites and cities."
  }
];

const ReadingCorner = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Use the correct route parameter for ReadingDetail
    navigate(`/reading-corner/${id}`);
  };

  return (
    <section id="readingcorner" style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ fontWeight: "600", fontSize: "1.5rem", marginBottom: "20px" }}>Reading Corner</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>
        {cardsData.map(({ id, title, image, description }) => (
          <div
            key={id}
            onClick={() => handleCardClick(id)}
            style={{
              cursor: "pointer",
              flex: "1 1 300px",
              minWidth: "280px",
              maxWidth: "340px",
              marginBottom: "20px",
              borderBottom: "4px solid #d40000",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.2s ease",
              background: "#fff"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={image} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "10px 15px" }}>
              <p style={{ color: "#d40000", fontWeight: "600", marginBottom: "8px" }}>{title}</p>
              <p style={{ color: "#333", fontSize: "0.97rem" }}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadingCorner;
