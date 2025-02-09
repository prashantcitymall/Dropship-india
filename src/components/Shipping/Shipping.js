import React from 'react';
import './Shipping.css';
import Capabilities from '../Capabilities/Capabilities';

const Shipping = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Adding Capabilities section */}
      <div className="capabilities-wrapper">
        <Capabilities />
      </div>
    </div>
  );
};

export default Shipping;
