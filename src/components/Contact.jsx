import Reveal from "./Reveal";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>

      <div className="contact-container">

        <div className="contact-content">

          <p className="section-label">
            LET'S TRAVEL
          </p>

          <h2>
            Where do you
            <span>want to go?</span>
          </h2>

          <p className="contact-description">
            Tell us your destination, your plans, or simply
            where you'd like to go. We'll help you turn the
            idea into a journey.
          </p>

          <div className="contact-buttons">

            <a
              href="https://wa.me/918970809315"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
            >
              WhatsApp Us
              <span>↗</span>
            </a>

            <a
              href="tel:+918970809315"
              className="contact-button call"
            >
              Call Us
              <span>↗</span>
            </a>

          </div>

        </div>


        <div className="contact-info">

          <div className="contact-item">
            <span>PHONE</span>

            <a href="tel:+918970809315">
              8970809315
            </a>
          </div>


          <div className="contact-item">
            <span>EMAIL</span>

            <a href="mailto:sagarsuvarna777@gmail.com">
              sagarsuvarna777@gmail.com
            </a>
          </div>


          <div className="contact-item">
            <span>LOCATION</span>

            <p>
              Haleyangadi, Karnataka
            </p>
          </div>

        </div>

      </div>
    </Reveal>
    </section>
  );
}

export default Contact;