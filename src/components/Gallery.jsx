import Reveal from "./Reveal";

const galleryImages = [
  {
    image: "/images/gallery/gallery3.jpg",
    title: "Unforgettable journeys",
  },
  {
    image: "/images/gallery/gallery5.jpg",
    title: "Travel with your people",
  },
  {
    image: "/images/gallery/gallery2.jpg",
    title: "Discover India",
  },
  {
    image: "/images/gallery/gallery6.jpg",
    title: "Memories that last",
  },
  {
   image: "/images/gallery/gallery4.jpg",
    title: "Your journey, your way",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <Reveal>
      <div className="gallery-container">

     

        <div className="gallery-heading">

          <p className="section-label">
            OUR JOURNEYS
          </p>

          <h2>
            Moments worth
            <span> remembering.</span>
          </h2>

          <p>
            Every journey creates a story. Take a glimpse at
            the experiences and memories created along the way.
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
              />

              <div className="gallery-overlay">
                <span>{item.title}</span>
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