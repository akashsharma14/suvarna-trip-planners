import { useEffect, useState } from "react";



const heroImages = [
  "/images/hero/hero4.jpg",
  "/images/hero/hero8.jpg",
  "/images/hero/hero7.jpg",
  "/images/hero/hero1.jpg",


];
function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((current) =>
      (current + 1) % heroImages.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="hero" id="home">

      {/* Background images */}
      <div className="hero-background">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
className={`hero-image ${
  index === currentImage ? "active" : ""
}`}          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <p className="hero-label">
          suvarna TRIP PLANNERS
        </p>

        <h1>
          Your journey.
          <br />
          <span>Your way.</span>
        </h1>

        <p className="hero-description">
          Explore India with thoughtfully planned trips,
          comfortable stays and travel experiences made
          around you.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="hero-button primary">
            Plan Your Trip
            <span>↗</span>
          </a>

          <a href="#destinations" className="hero-button secondary">
            Explore Destinations
          </a>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span>Scroll to explore</span>
        <span>↓</span>
      </a>

    </section>
  );
}

export default Hero;