import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Suverna Trip Planners" />

          <span className="logo-name">
            Suvarna Tours & Packages
          </span>
        </a>


        {/* Desktop Navigation */}
        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>

          <a href="#contact" className="nav-cta">
            Plan Your Trip
          </a>

        </div>


        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#destinations" onClick={closeMenu}>
          Destinations
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Plan Your Trip →
        </a>

      </div>

    </nav>
  );
}

export default Navbar;