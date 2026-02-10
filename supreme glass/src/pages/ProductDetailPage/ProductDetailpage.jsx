import React, { useState, useEffect } from "react";
import "./style.css";
import Slider from "../../components/ProductDetailBanner/ProductDetailBanner";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, collection, doc } from "firebase/firestore";
import { app } from "../../firebase";


const ProductDetailpage = () => {
  const [product, setProduct] = useState({})


  const db = getFirestore(app)
  useEffect(() => {
    GET_PRODUCT()

  }, [])



  const { category, id } = useParams()
  const GET_PRODUCT = async () => {
    const docRef = doc(db, `categories/${category}/products/${id}`);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setProduct(docSnap.data())
    }
  }

  console.log(product)



  return (
    <div className="product-detail-page-main-container">
      <Slider />
      <div className="product-detail-page-main">
        <div className="productdetail-heading-main">
          <span>{product.name}</span>
          <p>
            {product.description}
          </p>
        </div>
        <div className="product-detail">
          <div className="product-finsih">
            <div className="product-finsh-meterial">
              <span>Finsh:</span>
            </div>

            <div className="finsh-box-main">
              {product?.finish?.map((x) => (
                <div className="finsh-box">
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>



          <div className="product-finsih">
            <div className="product-finsh-meterial">
              <span>Material:</span>
            </div>

            <div className="finsh-box-main">
              {product?.materials?.map((x) => (
                <div className="finsh-box">
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>







          <div className="product-finsih">
            <div className="product-finsh-meterial">
              <span>Sizes:</span>
            </div>

            <div className="finsh-box-main">
              {product?.sizes?.map((x) => (
                <div className="size-product-main">
                  <div className="size-cc">
                    <span>cc</span>
                  </div>
                  <div className="size-in-number">
                    <span>{x}</span>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetailpage;
