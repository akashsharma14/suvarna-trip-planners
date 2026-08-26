import { useEffect, useState } from "react";

const images = [
  "/hero4.jpg",
  "/hero8.jpg",
  "/hero7.jpg",
  "/hero1.jpg",


];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      <div className="hero-background">
        {images.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${
              index === currentImage ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-label">
          SUVaRNA TRIP PLANNERS
        </p>

        <h1>
          Your Journey.
          <br />
          Your Way.
        </h1>

        <p className="hero-description">
          Discover unforgettable journeys across India,
          thoughtfully planned around you.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="primary-button">
            Plan Your Trip
          </a>

          <a href="#destinations" className="secondary-button">
            Explore Destinations
          </a>

        </div>

      </div>

      <div className="hero-location">
        📍 Haleyangadi, Karnataka
      </div>

    </section>
  );
}

export default Hero;