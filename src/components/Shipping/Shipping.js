import React from 'react';
import './Shipping.css';
import Capabilities from '../Capabilities/Capabilities';

const partnerLogos = [
  { id: 1, src: "/images/ekart.png", alt: "Ekart" },
  { id: 2, src: "/images/blue.png", alt: "Blue Dart" },
  { id: 3, src: "/images/del.png", alt: "Delhivery" },
  { id: 4, src: "/images/express.png", alt: "Express" },
  { id: 5, src: "/images/shadow.png", alt: "Shadowfax" },
];

const Shipping = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Adding Capabilities section */}
      <div className="capabilities-wrapper">
        <Capabilities />
      </div>

      <section className="partners-section">
        <h2 className="partners-title">Our Delivery Partners</h2>
        <div className="partners-carousel">
          <div className="partners-track">
            {/* First set of cards */}
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="partner-card">
                <img src={logo.src} alt={logo.alt} draggable="false" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((logo) => (
              <div key={`${logo.id}-dup`} className="partner-card">
                <img src={logo.src} alt={logo.alt} draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
