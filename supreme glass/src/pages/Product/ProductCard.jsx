import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'

const ProductCard = ({ product, category }) => {
  return (
    <Link to={`/productdetail/${category}/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="product-card" >
        <div className="product-images">
          <img src={product.images[0]} alt="" />
        </div>
        <div className="product-card-text">
          <span>{product.name}</span>
        </div>
      </div>
    </Link>


  );
};

export default ProductCard;