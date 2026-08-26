function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            Suverna
          </a>

          <p>
            Travel made simple.
            <br />
            Memories made unforgettable.
          </p>

        </div>


        {/* Navigation */}
        <div className="footer-links">

          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Contact */}
        <div className="footer-contact">

          <h4>Get in touch</h4>

          <a href="tel:+918970809315">
            8970809315
          </a>

          <a href="mailto:sagarsuvarna@gmail.com">
            sagarsuvarna@gmail.com
          </a>

          <p>
            Haleyangadi, Karnataka
          </p>

        </div>


        {/* Social */}
        <div className="footer-social">

          <h4>Follow us</h4>

          <a
            href="https://www.instagram.com/suvarna_tours_packages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Suverna Trip Planners.
          All rights reserved.
        </p>

        <p>
          Travel. Explore. Experience.
        </p>

      </div>

    </footer>
  );
}

export default Footer;