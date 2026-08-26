function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          Suvarna
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://wa.me/918970809315"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plan Your Trip
        </a>

      </div>
    </header>
  );
}

export default Navbar;