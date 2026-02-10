import React, { useEffect, useState } from "react";
import "./style.css";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Heading from "../../components/Heading/Heading";
import Card from "../../assets/card.png";
import Quot from "../../components/Quot/Quot";
import PopularCard from "../../components/PopularCard/PopularCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebase";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [blog, setBlog] = useState([])


// ---------- get-cetagores-from firebase ----------------

  const db = getFirestore(app);
  console.log(selectedCategory);
  useEffect(() => {
    get_data();
  }, []);

  const get_data = async () => {
    try {
      const mydata = collection(db, "categories");
      const ab = await getDocs(mydata);
      const result = ab.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  // ----- get product data from firebase ----------

  useEffect(() => {
    get_product();
  }, [selectedCategory]);

  const get_product = async () => {
    try {
      const myproduct = collection(
        db,
        `categories/${selectedCategory}/products`
      );
      const productdata = await getDocs(myproduct);

      const prod = productdata.docs.map((doc) => ({
        id: doc.id,...doc.data(),
      }));
      setProduct(prod);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(product);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // ----- geting blog  from firebase ----------

  useEffect(()=>{

    get_blog();
  },[])

  console.log(blog)


   const get_blog=async()=>{
    const blog=collection(db, 'blogs');
    const blogdata=await getDocs(blog);
    const blg=blogdata.docs.map((doc) =>(
      {
        id:doc.id,...doc.data(),
      }
    ))
    setBlog(blg)
    
   }


   const onclickhandleid = (categoryId) => {
    setSelectedCategory(categoryId);
  };




  // ------------services-cerousal-------------------

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  

  return (
    <div className="home-container">
      <HomeBanner />

      <div className="categories-container">
        <Heading title={"Our Products"} />
        <div className="categories-cards">
          {data.map((item, i) => (
            <div key={item.id} className="categories-card">
              <img src={item.image} alt="" />
              <div className="categories-card-btns">
                <div className="categories-card-btn1">
                  <span
                    key={item.id}
                    onClick={() => handleCategorySelect(item.id)}
                    style={{
                      fontWeight:
                        selectedCategory === data.id ? "bold" : "normal",
                    }}
                  >
                    {item.name || "Product Name"}
                  </span>
                </div>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  <div className="categories-card-btn2">
                    <span>Explore More</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Quot
        des={
          "Supreme Glass – Bringing Clarity, Strength, and Innovation to Every Space. Precision-crafted for beauty, built for durability."
        }
      />
      <div className="popular-product-container">
        <Heading title={"Our Popular Products"} />
        <div className="popular-products-cards">
          {Array(6)
            .fill()
            .map((_, i) => (
              <PopularCard key={i} />
            ))}
        </div>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div className="popular-product-btn">
            <button>View More</button>
          </div>
        </Link>
      </div>

      <Quot
        des={
          "Beyond Ordinary Glass – Supreme Glass Delivers Unmatched Durability, Modern Aesthetics, and Precision Engineering for Every Vision."
        }
      />

      <div className="signature-container">
        <Heading title={"Signature Projects"} />
        <div className="signature-projects">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i} className="signature-project">
                <img src={Card} alt="" />
                <span>Project Name</span>
              </div>
            ))}
        </div>
      </div>

      <Quot
        des={
          '"From Homes to High-Rises, Supreme Glass Creates Seamless, Stylish, and Secure Environments with Premium Glass Solutions'
        }
      />

      <div className="home-services">
        <Heading title={"Services"} />
        <div className="home-services-carousel">
          {Array(6)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="home-services-card"
                style={{
                  transform: `translateX(-${currentIndex * 105}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <img src={Card} alt="" />
                <div className="home-services-card-text">
                  <span>Multiple Accessories</span>
                  <p>
                    A wide range of glass accessories made from stainless steel.
                  </p>
                  <Link to="/servicesdetail" style={{ textDecoration: "none" }}>
                    <button>See more</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="home-services-carousel-btn">
          <div className="home-left" onClick={handlePrev}>
            <ChevronLeft />
          </div>
          <div className="home-right" onClick={handleNext}>
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className="blog-container">
        <Heading title={"Our Blogs"} />
        <div className="blog-cards">
          {blog.map((item, i) => (
              <div key={i} className="home-blog-card">
                <BlogCard data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
