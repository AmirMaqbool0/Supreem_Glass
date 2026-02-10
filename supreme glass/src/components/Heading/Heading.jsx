import React from 'react';
import './style.css';

const Heading = ({ title }) => {
  return (
    <div className="heading-container">
      <span>{title}</span>
    </div>
  );
};

export default Heading;
