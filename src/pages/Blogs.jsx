import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  const articles = [
    {
      title: "Understanding Heart Health: Preventive Cardiology Guide",
      category: "Cardiology",
      readTime: "5 min read",
      snippet: "Discover key lifestyle habits, dietary choices, and vital screenings to keep your heart healthy and strong.",
      image: "https://image.isu.pub/190617231140-1c7e5df88cb881f10846d4bca34b6a5f/jpg/page_1.jpg",
    },
    {
      title: "Why Regular Health Checkups Matter for Every Age Group",
      category: "Preventive Care",
      readTime: "4 min read",
      snippet: "Early detection of health parameters can significantly reduce complications and ensure long-term vitality.",
      image: "https://media.istockphoto.com/id/182769498/photo/young-doctor.jpg?s=170667a&w=0&k=20&c=1zsUEdn3qiMsukr7tlobL9jijwH7PoAIAbfsVA32XkE=",
    },
    {
      title: "Building a Healthier Lifestyle: Nutrition, Sleep & Stress Management",
      category: "Wellness",
      readTime: "4 min read",
      snippet: "Small, actionable changes in everyday routines that create meaningful health transformations.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/059/240/224/small_2x/modern-hospital-building-with-ambulance-entering-at-sunset-delivering-healthcare-services-photo.jpg",
    },
  ];

  return (
    <div className="blogs-page">
      <Navbar />

      <section className="notice-hero">
        <div className="notice-hero-content">
          <div className="notice-badge">
            <BookOpen size={18} />
            <span>HEALTH INSIGHTS & ARTICLES</span>
          </div>
          <h1>Health & Wellness Insights</h1>
          <p>Expert medical knowledge, patient guidance, and health tips from our specialists.</p>
        </div>
      </section>

      <section className="notice-body-section">
        <div className="notice-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {articles.map((art, idx) => (
              <article key={idx} className="dpdp-card" style={{ padding: "0", overflow: "hidden" }}>
                <img
                  src={art.image}
                  alt={art.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>
                    <span style={{ color: "var(--primary)", fontWeight: "700" }}>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--secondary)", marginBottom: "8px" }}>
                    {art.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", lineHeight: "1.6", marginBottom: "16px" }}>
                    {art.snippet}
                  </p>
                  <Link to="/appointment" style={{ color: "var(--primary)", fontWeight: "700", fontSize: "13.5px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    Consult Specialist <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
