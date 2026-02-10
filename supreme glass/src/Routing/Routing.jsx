import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Product from '../pages/Product/Product'
import Gallary from '../pages/Gallary/Gallary'
import About from '../pages/About/About'
import ProductDetailpage from '../pages/ProductDetailPage/ProductDetailpage'
import ContectUs from '../pages/ContectUs/ContectUs'
import Blog from '../pages/Blog/Blog'
import ServicesDetail from '../pages/ServicesDetail/ServicesDetail'
import BlogDetail from '../pages/BlogDetail/BlogDetail'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'




const Routing = () => {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/about' element={<About />} />
          <Route path='/servicesdetail' element={<ServicesDetail />} />
          <Route path='/productdetail/:category/:id' element={<ProductDetailpage />} />
          <Route path='/contectus' element={<ContectUs />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Routing