import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Categories from '../pages/Categories/Categories'
import Header from '../components/Header/Header'
import Products from '../pages/Products/Products'
import AddProduct from '../pages/AddProduct/AddProduct'
import AddCategoery from '../pages/AddCategoery/AddCategoery'
import AddBlog from '../pages/AddBlog/AddBlog'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <div style={{display:'flex'}}>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Products/>} />
                        <Route path='/categories' element={<Categories/>} />
                        <Route path='/addproduct' element={<AddProduct/>} />
                        <Route path='/addcategory' element={<AddCategoery/>} />
                        <Route path='/addblog' element={<AddBlog/>} />
                    </Routes>
                
                </div>

            </BrowserRouter>
        </div>
    )
}

export default Routing