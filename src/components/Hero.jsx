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
      setCurrentImage((current) => (current + 1) % heroImages.length);
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
            alt="Scenic Indian destinations"
            className={`hero-image ${index === currentImage ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Modern Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span>SUVARNA TRIP PLANNERS & TOURS</span>
        </div>

        <h1>
          Your journey.
          <br />
          <span className="hero-serif-accent">Your way.</span>
        </h1>

        <p className="hero-description">
          Experience the incredible diversity of India with thoughtfully tailored tour packages,
          handpicked premium stays, and seamless travel arranged around you.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            <span>Plan Your Trip</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <a href="#destinations" className="btn-secondary">
            <span>Explore Destinations</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </a>
        </div>

        {/* Hero Slider Dots */}
        <div className="hero-dots">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentImage ? "active" : ""}`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll" aria-label="Scroll to explore">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-indicator-wheel">
          <div className="scroll-wheel-dot"></div>
        </div>
      </a>
    </section>
  );
}

export default Hero;
