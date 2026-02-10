import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='product-container'>
  <Link to={'/addproduct'}>    <button>Add Product</button> </Link>
    </div>
  )
}

export default Products