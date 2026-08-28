import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    title: "Trips Made Exclusively For You",
    description:
      "Every journey is custom-curated around your ideal destination, budget, group size, and personal preferences.",
  },
  {
    number: "02",
    title: "Complete End-to-End Support",
    description:
      "From verified accommodations and reliable chauffeur-driven transportation to trip management, we handle every detail.",
  },
  {
    number: "03",
    title: "Travel Packages For Every Group",
    description:
      "Family holidays, school trips, college tours, corporate retreats or couple getaways — we create packages to suit your exact vibe.",
  },
  {
    number: "04",
    title: "Unmatched Reach Across India",
    description:
      "Have a dream destination in mind? Just tell us where you want to go and we'll craft the perfect journey for you.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="why-us">
      <Reveal>
        <div className="why-container">
          <div className="why-intro">
            <div className="section-tag">
              <span className="tag-dot"></span>
              <span>WHY SUVARNA</span>
            </div>

            <h2>
              Your journey.
              <span className="serif-highlight">Our care.</span>
            </h2>

            <p>
              We believe travel should be thrilling, memorable, and completely stress-free. 
              While you focus on making memories, our dedicated team takes care of all the planning and logistics.
            </p>

            <div className="why-stats-grid">
              <div className="why-stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Customizable</span>
              </div>
              <div className="why-stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">On-Trip Support</span>
              </div>
            </div>
          </div>

          <div className="reasons">
            {reasons.map((reason) => (
              <div className="reason-card" key={reason.number}>
                <div className="reason-number-badge">
                  <span>{reason.number}</span>
                </div>

                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>

                <div className="reason-arrow-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default WhyChooseUs;