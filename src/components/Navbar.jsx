import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Suvarna Tours & Packages" />
          <div className="logo-text">
            <span className="logo-name">Suvarna Tours & Packages</span>
            <span className="logo-tagline">Trip Planners & Travel Experts</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#gallery">Gallery</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact" className="nav-cta">
            <span>Plan Your Trip</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </nav>

        {/* Hamburger Toggle */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#destinations" onClick={closeMenu}>Destinations</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#why-us" onClick={closeMenu}>Why Us</a>
        <a href="#contact" className="mobile-cta" onClick={closeMenu}>
          Plan Your Trip →
        </a>
      </div>
    </header>
  );
}

export default Navbar;