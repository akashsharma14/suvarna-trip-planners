import Reveal from "./Reveal";

const destinations = [
  {
    name: "Kerala",
    image: "/images/destinations/kerala.jpg",
  },
  {
    name: "Goa",
    image: "/images/destinations/goa2.jpg",
  },
  {
    name: "Kashmir",
    image: "/images/destinations/kashmir2.jpg",
  },
  {
    name: "Rajasthan",
    image: "/images/destinations/rajasthan2.jpg",
  },
];

function Destinations() {
  return (
    <section className="destinations" id="destinations">

      <Reveal>

        <div className="destinations-container">

          <div className="destinations-heading">

            <p className="section-label">
              DESTINATIONS
            </p>

            <h2>
              You choose the
              <span> destination.</span>
            </h2>

            <p>
              From relaxing getaways to unforgettable adventures,
              we help you plan trips across India based on where
              you want to go and how you want to travel.
            </p>

          </div>


          <div className="destinations-grid">

            {destinations.map((destination) => (
              <div
                className="destination-card"
                key={destination.name}
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                />

                <div className="destination-overlay"></div>

                <h3>{destination.name}</h3>

              </div>
            ))}

          </div>


          <div className="destination-bottom">

            <p>
              Have another destination in mind?
            </p>

            <a href="#contact">
              Tell us where you want to go →
            </a>

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default Destinations;