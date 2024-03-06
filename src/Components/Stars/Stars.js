import React from 'react';
import './Stars.scss'; // Make sure to import your CSS file for styles

const Stars = () => {
  // Assuming you want 50 stars based on the number of divs in your example
  const numberOfStars = 50;

  // Create an array with length = numberOfStars, fill it, and map over it to render the .star divs
  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <div key={index} className="star"></div>
  ));

  return <div className="stars">{stars}</div>;
};

export default Stars;
