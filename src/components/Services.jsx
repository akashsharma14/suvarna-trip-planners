import Reveal from "./Reveal";

const services = [
  {
    id: "tour-packages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
      </svg>
    ),
    title: "Tour Packages",
    tag: "All India",
    description:
      "Curated travel itineraries across India designed to provide immersive, unforgettable cultural and leisure experiences.",
  },
  {
    id: "hotel-booking",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M9 3h6v4H9z"/>
      </svg>
    ),
    title: "Hotel & Resort Booking",
    tag: "Verified Stays",
    description:
      "Handpicked luxury resorts, heritage stays, and budget-friendly boutique hotels tailored to your comfort and location preferences.",
  },
  {
    id: "vehicle-services",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    title: "Vehicle Services",
    tag: "Safe & Sanitized",
    description:
      "Reliable AC sedans, spacious SUVs, Tempo Travellers, and luxury coaches driven by experienced and courteous chauffeurs.",
  },
  {
    id: "family-packages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Family Packages",
    tag: "Relaxing & Safe",
    description:
      "Stress-free holidays with kid-friendly activities, senior-friendly pacing, and peaceful stays crafted for multi-generational joy.",
  },
  {
    id: "college-trips",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    title: "School & College Trips",
    tag: "Group Fun",
    description:
      "High-energy educational and adventure excursions with complete group safety, well-planned coordination, and competitive rates.",
  },
  {
    id: "customized-trips",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    title: "Customized Trips",
    tag: "Bespoke Plans",
    description:
      "Tell us your dream destinations, dates, and budget. We'll design a completely customized itinerary made exclusively around you.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <Reveal>
        <div className="services-container">
          <div className="services-heading">
            <div className="section-tag">
              <span className="tag-dot"></span>
              <span>WHAT WE OFFER</span>
            </div>

            <h2>
              Travel made simple.
              <span className="serif-highlight">Your way.</span>
            </h2>

            <p>
              From comfortable transportation and luxury accommodation to complete end-to-end tour 
              planning, we manage every detail so you can immerse yourself in the journey.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-card-top">
                  <div className="service-icon-box">
                    {service.icon}
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Services;