const services = [
  {
    icon: "✈",
    title: "Tour Packages",
    description:
      "Explore destinations across India with thoughtfully planned tour packages.",
  },
  {
    icon: "🏨",
    title: "Hotel & Resort Booking",
    description:
      "Find comfortable hotels and resorts suited to your destination and budget.",
  },
  {
    icon: "🚐",
    title: "Vehicle Services",
    description:
      "Choose from a range of vehicles for comfortable and convenient travel.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Packages",
    description:
      "Enjoy memorable family holidays planned around your preferences.",
  },
  {
    icon: "🎓",
    title: "School & College Trips",
    description:
      "Organized travel packages designed for school and college groups.",
  },
  {
    icon: "🗺",
    title: "Customized Trips",
    description:
      "Tell us where you want to go and we'll help plan the journey around you.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-container">

        <div className="services-heading">

          <p className="section-label">
            WHAT WE OFFER
          </p>

          <h2>
            Travel made simple.
            <br />
            <span>Your way.</span>
          </h2>

          <p>
            From transportation and accommodation to complete
            tour planning, we take care of the details so you
            can focus on enjoying the journey.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow">
                →
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;