import React, { useState, useEffect } from "react";
import "./style.css";
import ProductCard from "./ProductCard";
import Banner from "../../components/Banner/Banner";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebase";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const db = getFirestore(app);

  // Fetch categories
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const data = collection(db, "categories");
      const querySnapshot = await getDocs(data);
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // console.log("Categories:", categories);

  // Fetch products when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      getProducts();
    }
  }, [selectedCategory]);

  const getProducts = async () => {
    try {
      const productCollection = collection(db, `categories/${selectedCategory}/products`);
      const productSnapshot = await getDocs(productCollection);
      const prodList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(prodList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // console.log("Products:", products);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="product-page-main-container">
      <Banner title="Products" />
      <div className="product-main-box">
        <div className="heading">
          <span>Our Products</span>
        </div>

        {/* Updated Category Section */}
        <div className="product-categories">
          {categories.map((category) => (
            <div key={category.id} className="category">
              <span
                onClick={() => handleCategorySelect(category.id)}
                style={{
                  fontWeight: selectedCategory === category.id ? "bold" : "normal",
                }}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* Display Products */}
        <div className="all-products-main-box-container">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} category={selectedCategory} />)
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
