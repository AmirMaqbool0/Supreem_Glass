import React from 'react'
import './style.css'
import Banner from '../../components/Banner/Banner'
import FeatureCard from '../ProductDetailPage/FeatureCard'
import DetailCard from '../ProductDetailPage/DetailCard'
const ServicesDetail = () => {
  return (
    <div className='services-detail-container'>
        <Banner title={'Service Details'}/>
        <div className="services-detail-content">
            <div className="services-detail-detail">
                <div className="services-detail-text">
                    <span>A wide range of glass accessories made from stainless steel.</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="services-detail-img">
               
                </div>
            </div>
            <div className="services-detail-cards">
                    {
                        Array(3).fill().map((_,i)=>(
                            <FeatureCard />
                        ))
                    }
                  </div>
                  {
                    Array(3).fill().map((_,i)=>(
                        <DetailCard />
                    ))
                  }
        </div>
    </div>
  )
}

export default ServicesDetail