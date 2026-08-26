const reasons = [
  {
    number: "01",
    title: "Trips Made For You",
    description:
      "Every journey can be customized around your destination, budget, group and preferences.",
  },
  {
    number: "02",
    title: "Complete Travel Support",
    description:
      "From accommodation and transportation to trip planning, we help take care of the important details.",
  },
  {
    number: "03",
    title: "Travel For Every Group",
    description:
      "Family holidays, school trips, college tours or group travel — we create packages to suit your needs.",
  },
  {
    number: "04",
    title: "Travel Across India",
    description:
      "Have a destination in mind? Tell us where you want to go and we'll help plan your journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">

      <div className="why-container">

        <div className="why-intro">

          <p className="section-label">
            WHY SUVERNA
          </p>

          <h2>
            Your journey.
            <br />
            <span>Our care.</span>
          </h2>

          <p>
            We believe travel should be exciting, not stressful.
            That's why we help you plan the details while you
            focus on enjoying the journey.
          </p>

        </div>

        <div className="reasons">

          {reasons.map((reason) => (
            <div className="reason" key={reason.number}>

              <span className="reason-number">
                {reason.number}
              </span>

              <div className="reason-content">

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </div>

              <span className="reason-arrow">
                →
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;