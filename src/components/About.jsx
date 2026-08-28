import Reveal from "./Reveal";

function About() {
  return (
    <section className="about" id="about">

      <Reveal>
        <div className="about-container">

          {/* Image */}
          <div className="about-image">
            <img
              src="/about.png"
              alt="Suvarna Trip Planners travel experience"
            />
          </div>


          {/* Content */}
          <div className="about-content">

            <p className="section-label">
              ABOUT suvarna
            </p>

            <h2>
              More than a trip.
              <span>A journey to remember.</span>
            </h2>

            <p className="about-main-text">
              suvarna Trip Planners helps you discover and
              experience destinations across India with travel
              plans built around your needs.
            </p>

            <p>
              Whether you're planning a family holiday, a school
              or college trip, a group tour or simply looking for
              a getaway, we help arrange the important details —
              from transportation and accommodation to the
              journey itself.
            </p>

            <p>
              Tell us where you want to go. We'll help you plan
              the rest.
            </p>

            <a href="#contact" className="about-link">
              Plan your journey
              <span>↗</span>
            </a>

          </div>

        </div>
      </Reveal>

    </section>
  );
}

export default About;