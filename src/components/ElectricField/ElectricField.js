import React from 'react';
import './ElectricField.css';

const ElectricField = () => {
  return (
    <div className="electric-field">
      <div className="hexagon-grid">
        {[...Array(70)].map((_, index) => (
          <div key={index} className="hexagon" style={{
            '--delay': `${Math.random() * 3}s`,
            '--x': `${(index % 9) * 12 - (Math.floor(index / 9) % 2) * 6}%`,
            '--y': `${Math.floor(index / 9) * 11}%`,
            '--pulse-delay': `${Math.random() * 5}s`,
            '--rotation': `${Math.random() * 360}deg`
          }} />
        ))}
      </div>
      <div className="data-streams">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="stream" style={{
            '--delay': `${Math.random() * 4}s`,
            '--duration': `${3 + Math.random() * 2}s`,
            '--start': `${Math.random() * 100}%`,
            '--width': `${100 + Math.random() * 200}px`,
            '--angle': `${-45 + (Math.random() * 10 - 5)}deg`
          }} />
        ))}
      </div>
      <div className="connection-points">
        {[...Array(25)].map((_, index) => (
          <div key={index} className="point" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${4 + Math.random() * 3}px`,
            '--connection-delay': `${Math.random() * 4}s`,
            '--glow-intensity': `${0.8 + Math.random() * 0.4}`
          }}>
            <div className="pulse-ring" />
            <div className="connection-line" style={{
              '--angle': `${Math.random() * 360}deg`,
              '--length': `${50 + Math.random() * 100}px`
            }} />
          </div>
        ))}
      </div>
      <div className="cyber-particles">
        {[...Array(40)].map((_, index) => (
          <div key={index} className="cyber-particle" style={{
            '--delay': `${Math.random() * 5}s`,
            '--size': `${1 + Math.random() * 2}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--travel-distance': `${100 + Math.random() * 200}px`
          }} />
        ))}
      </div>
    </div>
  );
};

export default ElectricField;
