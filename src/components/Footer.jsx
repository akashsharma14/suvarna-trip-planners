function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-gold">Suvarna</span>
            <span className="footer-logo-sub">Trip Planners</span>
          </a>

          <p>
            Travel made simple. Memories made unforgettable.
            Crafting tailored journeys and authentic experiences across India.
          </p>

          <div className="footer-badge">
            <span>✨ Tours • Stays • Fleet • Support</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#gallery">Travel Gallery</a>
          <a href="#why-us">Why Choose Us</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <a href="tel:+918970809315" className="footer-contact-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 8970809315</span>
          </a>

          <a href="mailto:sagarsuvarna777@gmail.com" className="footer-contact-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>sagarsuvarna777@gmail.com</span>
          </a>

          <p className="footer-address">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Mangalore, Karnataka, India</span>
          </p>
        </div>

        {/* Social & Top Button */}
        <div className="footer-social">
          <h4>Connect</h4>
          <a
            href="https://www.instagram.com/suvarna_tours_packages/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
            <span className="social-arrow">↗</span>
          </a>

          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Suvarna Trip Planners. All rights reserved.
        </p>

        <p className="footer-motto">
          Travel. Explore. Experience India.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
