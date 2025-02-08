import React from 'react';
import './Capabilities.css';

const capabilitiesData = [
  {
    id: 1,
    icon: "M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.001 14H4z M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z",
    title: "Bulk Processing of Orders"
  },
  {
    id: 2,
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-2-9H7v2h10V10zm0 4H7v2h10v-2z",
    title: "Customized Labeling"
  },
  {
    id: 3,
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
    title: "EDI Compliance"
  },
  {
    id: 4,
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    title: "Account Management"
  },
  {
    id: 5,
    icon: "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z",
    title: "Multi-retailer Support"
  },
  {
    id: 6,
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z",
    title: "Quality Control"
  },
  {
    id: 7,
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z",
    title: "Repackaging"
  },
  {
    id: 8,
    icon: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z",
    title: "Fragile Item Storage"
  },
  {
    id: 9,
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7h-6v10h6z",
    title: "Loose Products"
  },
  {
    id: 10,
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
    title: "Combo Creation"
  },
  {
    id: 11,
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
    title: "Boxed Units"
  },
  {
    id: 12,
    icon: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z",
    title: "Poly Bagged Units"
  }
];

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <div className="capabilities-container">
        <h2 className="capabilities-title">Dropship India Capabilities</h2>
        <div className="capabilities-grid">
          {capabilitiesData.map((item) => (
            <div key={item.id} className="capability-card">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className="capability-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
