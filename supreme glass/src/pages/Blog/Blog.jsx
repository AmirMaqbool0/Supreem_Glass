import React, { useEffect, useState } from 'react'
import './style.css'
import Banner from '../../components/Banner/Banner'
import BlogCard from '../../components/BlogCard/BlogCard'
import { app } from '../../firebase'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Blog = () => {
    const [data,setData] = useState([])
    const db = getFirestore(app)
    const get_Blogs = async () =>{
        const collectionRef = collection(db,'blogs')
        const  result  = await getDocs(collectionRef)
        const arr = result.docs.map((doc)=> (
            {id:doc.id,...doc.data()}
        ))
        setData(arr)
    }
    useEffect(()=>{
       get_Blogs()
    },[])
    console.log(data)
    return (
        <div className='blog-page-container'>
            <Banner title={'Blogs'} />
            <div className="blog-page-content">
                {
                    data.map((blog, i) => (
                        <div className='blog-page-blog'>
                            <BlogCard  data={blog}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog