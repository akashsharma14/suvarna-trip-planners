import Reveal from "./Reveal";

function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about-container">
          {/* Image with Floating Badge */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="/about.png"
                alt="Suvarna Trip Planners travel experience"
              />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="about-floating-card">
              <div className="floating-card-icon">✨</div>
              <div className="floating-card-text">
                <strong>100% Customized</strong>
                <span>Personalized itineraries across India</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="section-tag">
              <span className="tag-dot"></span>
              <span>ABOUT SUVARNA</span>
            </div>

            <h2>
              More than a trip.
              <span className="serif-highlight">A journey to remember.</span>
            </h2>

            <p className="about-lead">
              Suvarna Trip Planners helps you discover and experience destinations across 
              India with travel plans meticulously built around your dreams.
            </p>

            <p>
              Whether you're planning a serene family holiday, a high-energy school or college trip, 
              an executive group tour, or a spontaneous weekend getaway, we take care of all the important 
              details — from comfortable transport and premium accommodations to curated local itineraries.
            </p>

            <div className="about-features-pills">
              <span className="feature-pill">🚗 Premium Fleet</span>
              <span className="feature-pill">🏨 Handpicked Stays</span>
              <span className="feature-pill">📍 Customized Routes</span>
              <span className="feature-pill">🛡️ 24/7 Assistance</span>
            </div>

            <a href="#contact" className="btn-inline">
              <span>Plan your journey</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;