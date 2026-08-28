import Reveal from "./Reveal";

const destinations = [
  {
    name: "Kerala",
    tagline: "God's Own Country",
    highlight: "Backwaters, Hills & Tea Plantations",
    image: "/images/destinations/kerala.jpg",
  },
  {
    name: "Goa",
    tagline: "Coastal Paradise",
    highlight: "Golden Beaches, Water Sports & Sunsets",
    image: "/images/destinations/goa2.jpg",
  },
  {
    name: "Kashmir",
    tagline: "Paradise on Earth",
    highlight: "Snowy Valleys, Dal Lake & Shikaras",
    image: "/images/destinations/kashmir2.jpg",
  },
  {
    name: "Rajasthan",
    tagline: "Land of Kings",
    highlight: "Majestic Forts, Palaces & Desert Safari",
    image: "/images/destinations/rajasthan2.jpg",
  },
];

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <Reveal>
        <div className="destinations-container">
          <div className="destinations-heading">
            <div className="section-tag section-tag-light">
              <span className="tag-dot"></span>
              <span>TOP DESTINATIONS</span>
            </div>

            <h2>
              You choose the
              <span className="serif-highlight"> destination.</span>
            </h2>

            <p>
              From serene coastal escapes and misty mountain retreats to royal heritage trails,
              we curate customized travel across India based on your desires.
            </p>
          </div>

          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div className="destination-card" key={destination.name}>
                <div className="destination-image-box">
                  <img
                    src={destination.image}
                    alt={`${destination.name} travel package`}
                    loading="lazy"
                  />
                  <div className="destination-overlay"></div>
                </div>

                <div className="destination-content-box">
                  <div className="destination-top-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{destination.tagline}</span>
                  </div>

                  <div className="destination-info">
                    <h3>{destination.name}</h3>
                    <p className="destination-subtext">{destination.highlight}</p>
                  </div>

                  <a href="#contact" className="destination-hover-btn">
                    <span>Plan This Trip</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="destination-bottom-banner">
            <div className="bottom-banner-text">
              <h4>Have another dream destination in mind?</h4>
              <p>We organize custom packages to Manali, Coorg, Ooty, Chikmagalur, Andaman, and beyond.</p>
            </div>
            <a href="#contact" className="btn-primary">
              <span>Tell Us Your Dream Trip</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

export default Destinations;
