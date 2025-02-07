import React from 'react';
import './Shipping.css';



const originalShippingData = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your products delivered within 24-48 hours",
    image: "/images/fast-delivery.svg",
  },
  {
    id: 2,
    title: "Secure Shipping",
    description: "Your packages are handled with utmost care and security",
    image: "/images/secure-shipping.svg",
  },
  {
    id: 3,
    title: "Global Reach",
    description: "We deliver to locations worldwide",
    image: "/images/global-shipping.svg",
  }
];

const additionalShippingData = [
  {
    id: 1,
    image: "/images/image (1).png",
    title: "Trusted Delivery partners",
    description: "DELHIVERY, BLUE DART, EKART"
  },
  {
    id: 2,
    image: "/images/image (2).png",
    title: "Road, Rail & Air Freight",
    description: "capabilities for reducing delivery TATs"
  },
  {
    id: 3,
    image: "/images/image (5).png",
    title: "Best in class delivery %",
    description: "with 95% orders delivered in <5 days"
  },
  {
    id: 4,
    image: "/images/image (6).png",
    title: "Own supply chain",
    description: "with 5 lac + sq. ft warehouse space"
  },
  {
    id: 5,
    image: "/images/image (7).png",
    title: "Pan India COD Remittance",
    description: "with delivery with across 27,000+ pincodes"
  }
];

const Shipping = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <section className="shipping-section original-shipping" style={{ marginBottom: '0', paddingBottom: '0' }}>
        <div className="shipping-container">
          <h2 className="shipping-title">Shipping</h2>
          <div className="shipping-cards">
            {originalShippingData.map((item) => (
              <div key={item.id} className="shipping-card">
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shipping-section additional-shipping" style={{ marginTop: '-10px', paddingTop: '0' }}>
        <div className="shipping-container">
          <div className="shipping-content-wrapper">
            <div className="shipping-cards">
              {additionalShippingData.map((item) => (
                <div key={item.id} className="shipping-card" tabIndex="-1">
                  <img src={item.image} alt={item.title} className="shipping-image" draggable="false" />
                </div>
              ))}
            </div>
            <div className="side-image-container">
              <img src="/images/left.png" alt="Side decoration" className="side-image" draggable="false" />
            </div>
          </div>
          <div className="bottom-tiles">
            <div className="right-image-container">
              <img src="/images/right.png" alt="Right decoration" className="right-image" draggable="false" />
            </div>
            <div className="bottom-tiles-grid">
              <div className="tile-card">
                <img src="/a.png" alt="Tile A" className="tile-image" draggable="false" />
              </div>
              <div className="tile-card">
                <img src="/b.png" alt="Tile B" className="tile-image" draggable="false" />
              </div>
              <div className="tile-card">
                <img src="/c.png" alt="Tile C" className="tile-image" draggable="false" />
              </div>
              <div className="tile-card">
                <img src="/d.png" alt="Tile D" className="tile-image" draggable="false" />
              </div>
              <div className="tile-card">
                <img src="/e.png" alt="Tile E" className="tile-image" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
