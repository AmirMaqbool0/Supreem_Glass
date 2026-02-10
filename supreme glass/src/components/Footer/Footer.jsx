import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { MapPin } from "lucide-react";
import{ Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="left-footer-container">
        <div className="footer-logo-text">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-text">
            <span>SUPREME-GLASS-UAE</span>
          </div>
        </div>
        <div className="footer-text-discription">
          <span>
            Supreme Glass specializes in high-quality glass solutions, offering
            premium products such as door handles, shower handles, patch
            fittings, patch locks, shower hinges, and more. With expert aluminum
            and glass fitting services, we ensure precision, strength, and
            elegance in every installation. Committed to innovation and
            craftsmanship, we transform spaces with durable, stylish, and
            seamless glass solutions built to last.
          </span>
        </div>
      </div>
      <div className="right-footer-container">
        <div className="footer-links">
         <span>Link</span>  
         <Link to='/'style={{ textDecoration: 'none' }} > <p>HOME</p></Link> 
         <Link to='/products' style={{ textDecoration: 'none' }}> <p>Products</p></Link>
         <Link to='/about' style={{ textDecoration: 'none' }}><p>About Us</p></Link>
         <Link to='/gallary' style={{ textDecoration: 'none' }}> <p>Gallery</p></Link>
         <Link to='/contectus' style={{ textDecoration: 'none' }}>  <p>Contact Us</p></Link>
        </div>
        <div className="get-in-touch-footer">
          <span>Get In Touch</span>
          <div className="map-address">
            <MapPin />
            <p>Near Emirates Gas Signal, Industrial Area 2, Ajman, U.A.E</p>
          </div>

          <div className="map-footer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7054189983287!2d55.4699375!3d25.3811875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f591301d76751%3A0xaa6547e91f049c5c!2sSuper%20Suprem%20Building%20Material%20Trading%20(SPS-L.L.C)!5e0!3m2!1sen!2s!4v1740229830894!5m2!1sen!2s"
              width="100%"
              height="180"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
