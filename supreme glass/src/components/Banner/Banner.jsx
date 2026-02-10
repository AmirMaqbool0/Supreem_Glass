import React from 'react';
import './style.css';
import LogoBanner from '../../assets/banner2.png';

const Banner = ({title}) => {

  return (
    <div className="Banner-main-container">
      <div className="background-image">
        <img src={LogoBanner} alt="Banner" />
      </div>
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;