import React from 'react'
import './style.css'
import ProductLogo from '../../assets/product.png'
import { Link } from 'react-router-dom'

const PopularCard = () => {
  return (
  <Link to='/products' ><div className='popular-card-container'>
        <img src={ProductLogo} alt="" />
        <div className="card-hover">
            <span>Spigot</span>
        </div>
    </div>
    </Link> 

  )
}

export default PopularCard