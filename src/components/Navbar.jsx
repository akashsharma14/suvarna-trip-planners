import logo from "../assets/logo.png";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

<div className="logo">
  <a href="#home">
    <img src={logo} alt="Suvarna Trip Planners" />
  </a>

  <a href="#home" className="logo-name">
    Suvarna Tours & Packages
  </a>
</div>
        

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