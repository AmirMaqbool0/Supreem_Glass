import React, { useState } from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import { AlignRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <div className='header-container'>
      <div className="header-logo">
        <img src={Logo} alt="" />
        <span>supreme-glass-uae</span>
      </div>
      <div className="link-meida-querry">
        <div className={`header-links ${sidebar ? 'sidebar-active' : ''}`}>
          <Link to='/' style={{ textDecoration: 'none' }} onClick={closeSidebar}>
            <span>Home</span>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }} onClick={closeSidebar}>
            <span>Products</span>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }} onClick={closeSidebar}>
            <span>About Us</span>
          </Link>
          <Link to='/gallary' style={{ textDecoration: 'none' }} onClick={closeSidebar}>
            <span>Gallery</span>
          </Link>
          <Link to='/contectus' style={{ textDecoration: 'none' }} onClick={closeSidebar}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <div className="allign" onClick={toggleSidebar}>
        <AlignRight />
      </div>
    </div>
  );
};

export default Header;
