import Reveal from "./Reveal";

const galleryImages = [
  {
    image: "/images/gallery/gallery3.jpg",
    title: "Unforgettable journeys",
    tag: "Group Escapes",
  },
  {
    image: "/images/gallery/gallery5.jpg",
    title: "Travel with your people",
    tag: "Shared Joy",
  },
  {
    image: "/images/gallery/gallery2.jpg",
    title: "Discover India",
    tag: "Scenic Trails",
  },
  {
    image: "/images/gallery/gallery6.jpg",
    title: "Memories that last",
    tag: "Expeditions",
  },
  {
    image: "/images/gallery/gallery4.jpg",
    title: "Your journey, your way",
    tag: "Custom Tours",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <Reveal>
        <div className="gallery-container">
          <div className="gallery-heading">
            <div className="section-tag">
              <span className="tag-dot"></span>
              <span>OUR TRAVEL STORIES</span>
            </div>

            <h2>
              Moments worth
              <span className="serif-highlight">remembering.</span>
            </h2>

            <p>
              Every journey creates an indelible story. Take a glimpse at the candid smiles, 
              breathtaking vistas, and lifelong memories created along the way.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={item.image}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <div className="gallery-glass-pill">
                    <span className="gallery-pill-tag">{item.tag}</span>
                    <span className="gallery-pill-title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Gallery;