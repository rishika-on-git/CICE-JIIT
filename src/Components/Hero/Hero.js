import React, { useState, useEffect } from 'react';
import './Hero.css'; // Assuming you have a CSS file named App.css for styling

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const colors = [
    '#030637',
    '#3C0753',
    '#16003B',
    '#910A67',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      setBackgroundColor(color);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      
      {/* <p>CICE</p>
      <br />
      <h3>Creativity and Innovation Cell</h3> */}
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default Hero;
