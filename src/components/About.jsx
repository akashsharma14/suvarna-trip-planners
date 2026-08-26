function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img
            src="/about.png"
            alt="Travel experience"
          />
        </div>

        <div className="about-content">

          <p className="section-label">
            ABOUT SUVARNA TOURS & PACKAGES
          </p>

          <h2>
            Travel should feel
            <span> personal.</span>
          </h2>

          <p className="about-text">
            At Suvarna Trip Planners, we believe every journey
            should be planned around the people taking it.
            From family holidays and college trips to
            customized adventures across India, we help turn
            your travel plans into memorable experiences.
          </p>

          <p className="about-text">
            Based in Haleyangadi, Karnataka, we bring together
            tour planning, comfortable stays and reliable
            transportation to make your journey simpler from
            start to finish.
          </p>

          <a href="#contact" className="text-button">
            Let's Plan Your Journey →
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;