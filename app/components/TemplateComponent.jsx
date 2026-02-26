'use client';
import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// 💈 TEMPLATE 02 — MODERN
// Clean, minimal, black & white with sharp geometry
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SHOP_NAME: "Precision Cuts",
  SHOP_TAGLINE: "Sharp Looks. Clean Lines.",
  SHOP_ADDRESS: "4820 Westheimer Rd",
  SHOP_CITY: "Houston",
  SHOP_STATE: "TX",
  SHOP_ZIP: "77027",
  SHOP_PHONE: "(713) 555-0298",
  SHOP_RATING: "4.9",
  SHOP_REVIEW_COUNT: "203",
  SHOP_GOOGLE_MAPS_URL: "https://maps.google.com",
  SHOP_HOURS: {
    Monday: "10:00 AM – 7:00 PM",
    Tuesday: "10:00 AM – 7:00 PM",
    Wednesday: "10:00 AM – 7:00 PM",
    Thursday: "10:00 AM – 8:00 PM",
    Friday: "10:00 AM – 8:00 PM",
    Saturday: "9:00 AM – 6:00 PM",
    Sunday: "Closed",
  },
  SHOP_SERVICES: [
    { name: "Precision Cut", price: "$30", duration: "30 min" },
    { name: "Beard Sculpt", price: "$20", duration: "20 min" },
    { name: "Cut + Beard", price: "$45", duration: "45 min" },
    { name: "Skin Fade", price: "$35", duration: "35 min" },
    { name: "Junior Cut", price: "$20", duration: "20 min" },
    { name: "Head Shave", price: "$25", duration: "25 min" },
  ],
  SHOP_TOP_REVIEWS: [
    { author: "Chris M.", rating: 5, text: "Cleanest cuts in Houston. Period. These guys are artists.", time: "1 week ago" },
    { author: "Andre L.", rating: 5, text: "Modern shop, no wait, perfect fade every time. My new spot.", time: "2 weeks ago" },
    { author: "Tyler K.", rating: 5, text: "Walked in without an appointment and still got the best haircut of my life.", time: "3 weeks ago" },
  ],
};

const StarIcon = ({ filled = true }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#000" : "none"} stroke="#000" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function ModernBarbershop() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = CONFIG.SHOP_HOURS[today] || "Closed";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAFA", color: "#111", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes expandLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        .mod-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 8px;
        }
        .mod-heading {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          color: #111;
        }
        .mod-btn {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 36px;
          border: 2px solid #111;
          background: transparent;
          color: #111;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .mod-btn:hover { background: #111; color: #FAFAFA; }
        .mod-btn-filled { background: #111; color: #FAFAFA; }
        .mod-btn-filled:hover { background: #333; }
        .mod-nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #666;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s;
        }
        .mod-nav-link:hover { color: #111; }
        .mod-divider {
          height: 1px;
          background: #DDD;
          margin: 0;
          transform-origin: left;
          animation: expandLine 1s ease forwards;
        }

        @media (max-width: 768px) {
          .mod-desktop-nav { display: none !important; }
          .mod-hamburger { display: flex !important; }
        }
      `}</style>

      {/* ─── NAV ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 40px",
        background: scrolled ? "rgba(250,250,250,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #EEE" : "none",
        transition: "all 0.4s",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "22px",
          cursor: "pointer",
        }} onClick={() => scrollTo("home")}>
          {CONFIG.SHOP_NAME}
        </span>

        <div className="mod-desktop-nav" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="mod-nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="mod-btn" style={{ padding: "10px 24px" }}>Call</a>
        </div>

        <div className="mod-hamburger" style={{ display: "none", flexDirection: "column", gap: "5px", cursor: "pointer", padding: "8px" }} onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ width: "22px", height: "2px", background: "#111" }} />
          <span style={{ width: "22px", height: "2px", background: "#111" }} />
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(250,250,250,0.98)", zIndex: 1000,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "28px",
        }} onClick={() => setMenuOpen(false)}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="mod-nav-link" style={{ fontSize: "14px" }} onClick={() => scrollTo(s)}>{s}</span>
          ))}
        </div>
      )}

      {/* ─── HERO ────────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "140px 40px 80px",
        maxWidth: "900px",
      }}>
        <p className="mod-section-label" style={{ animation: "slideUp 0.6s ease forwards", opacity: 0 }}>
          {CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE}
        </p>
        <h1 className="mod-heading" style={{ animation: "slideUp 0.6s ease 0.1s forwards", opacity: 0 }}>
          {CONFIG.SHOP_NAME}.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px",
          fontWeight: 300,
          color: "#777",
          marginTop: "16px",
          maxWidth: "420px",
          lineHeight: 1.6,
          animation: "slideUp 0.6s ease 0.2s forwards", opacity: 0,
        }}>
          {CONFIG.SHOP_TAGLINE}
        </p>

        <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap", animation: "slideUp 0.6s ease 0.3s forwards", opacity: 0 }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="mod-btn mod-btn-filled">Book a Cut</a>
          <span className="mod-btn" onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Services →</span>
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          marginTop: "60px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "12px",
          color: "#999",
          letterSpacing: "1px",
          animation: "slideUp 0.6s ease 0.4s forwards", opacity: 0,
        }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(parseFloat(CONFIG.SHOP_RATING))} />)}
          </div>
          <span style={{ color: "#111" }}>{CONFIG.SHOP_RATING}</span>
          <span>/ {CONFIG.SHOP_REVIEW_COUNT} reviews on Google</span>
        </div>
      </section>

      <div className="mod-divider" />

      {/* ─── SERVICES ────────────────────────────────────── */}
      <section id="services" style={{ padding: "100px 40px", maxWidth: "800px" }}>
        <p className="mod-section-label">01</p>
        <h2 className="mod-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}>Services</h2>

        {CONFIG.SHOP_SERVICES.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredService(i)}
            onMouseLeave={() => setHoveredService(null)}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "24px 0",
              borderBottom: "1px solid #E5E5E5",
              cursor: "default",
              transition: "all 0.3s",
              transform: hoveredService === i ? "translateX(8px)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                color: "#CCC",
              }}>0{i + 1}</span>
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "22px",
              }}>{s.name}</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                color: "#BBB",
                letterSpacing: "1px",
              }}>{s.duration}</span>
            </div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "16px",
              fontWeight: 700,
            }}>{s.price}</span>
          </div>
        ))}

        <div style={{ marginTop: "40px" }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="mod-btn mod-btn-filled">Book — {CONFIG.SHOP_PHONE}</a>
        </div>
      </section>

      <div className="mod-divider" style={{ maxWidth: "calc(100% - 80px)", margin: "0 40px" }} />

      {/* ─── HOURS ────────────────────────────────────────── */}
      <section id="hours" style={{ padding: "100px 40px", maxWidth: "500px" }}>
        <p className="mod-section-label">02</p>
        <h2 className="mod-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}>Hours</h2>

        {Object.entries(CONFIG.SHOP_HOURS).map(([day, hours]) => (
          <div key={day} style={{
            display: "flex", justifyContent: "space-between",
            padding: "14px 0",
            borderBottom: "1px solid #F0F0F0",
            fontFamily: "'Space Mono', monospace",
            fontSize: "12px",
            letterSpacing: "1px",
            color: day === today ? "#111" : "#999",
            fontWeight: day === today ? 700 : 400,
          }}>
            <span>{day}</span>
            <span>{hours}</span>
          </div>
        ))}
      </section>

      <div className="mod-divider" style={{ maxWidth: "calc(100% - 80px)", margin: "0 40px" }} />

      {/* ─── REVIEWS ──────────────────────────────────────── */}
      <section id="reviews" style={{ padding: "100px 40px" }}>
        <p className="mod-section-label">03</p>
        <h2 className="mod-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}>Reviews</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "900px" }}>
          {CONFIG.SHOP_TOP_REVIEWS.map((r, i) => (
            <div key={i} style={{
              padding: "32px",
              border: "1px solid #E5E5E5",
              background: "#FFF",
              transition: "border-color 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#111"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#E5E5E5"}
            >
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#555", marginBottom: "20px" }}>
                "{r.text}"
              </p>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "1px" }}>
                <span style={{ color: "#111" }}>{r.author}</span>
                <span style={{ color: "#CCC", marginLeft: "8px" }}>· {r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mod-divider" style={{ maxWidth: "calc(100% - 80px)", margin: "0 40px" }} />

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section id="contact" style={{ padding: "100px 40px 60px", maxWidth: "600px" }}>
        <p className="mod-section-label">04</p>
        <h2 className="mod-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}>Find Us</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <p className="mod-section-label" style={{ marginBottom: "4px" }}>Address</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>{CONFIG.SHOP_ADDRESS}, {CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE} {CONFIG.SHOP_ZIP}</p>
          </div>
          <div>
            <p className="mod-section-label" style={{ marginBottom: "4px" }}>Phone</p>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} style={{ fontSize: "16px", color: "#111", textDecoration: "none" }}>{CONFIG.SHOP_PHONE}</a>
          </div>
          <div>
            <p className="mod-section-label" style={{ marginBottom: "4px" }}>Today</p>
            <p style={{ fontSize: "16px" }}>{todayHours}</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="mod-btn mod-btn-filled">Call to Book</a>
          <a href={CONFIG.SHOP_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="mod-btn">Directions →</a>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer style={{ padding: "40px", borderTop: "1px solid #E5E5E5", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "16px" }}>{CONFIG.SHOP_NAME}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#CCC", letterSpacing: "1px" }}>
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
