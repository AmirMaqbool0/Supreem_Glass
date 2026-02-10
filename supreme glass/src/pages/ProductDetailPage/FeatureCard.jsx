import React from 'react'
import './style.css'
import  img from '../../assets/image1.png'


const FeatureCard = () => {
  return (
    <div className="feature-card-main-container">
        <div className="image-featurecard">
            <div className="feature-img">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="image-feature-text">
            <span>Feature 1</span>
            <p>Description</p>

        </div>

    </div>
  )
}

export default FeatureCard