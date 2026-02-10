import React, { useState, useEffect } from 'react';
import './style.css';
import b1 from '../../assets/Homebanner/b1.png'
import b2 from '../../assets/Homebanner/b2.png'
import b3 from '../../assets/Homebanner/b3.png'
import b4 from '../../assets/Homebanner/b4.png'
const slides = [
  {
    image: b1,
    title: 'Glass & Aluminium',
    subtitle: 'Solution Provider UAE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: b2,
    title: 'Innovative Designs',
    subtitle: 'For Modern Spaces',
    text: 'We create modern glass and aluminium solutions to suit all your residential and commercial needs.'
  },
  {
    image: b3,
    title: 'Quality Assurance',
    subtitle: 'With Precision & Care',
    text: 'Our services ensure top-notch materials and expert craftsmanship for every project.'
  },
  {
    image: b4,
    title: 'Quality Assurance',
    subtitle: 'With Precision & Care',
    text: 'Our services ensure top-notch materials and expert craftsmanship for every project.'
  }
];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home-banner-container'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className='banner-content'>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
      <div className='banner-dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
