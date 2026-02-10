import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const BlogCard = ({data}) => {
  console.log(data)
  return (
  <Link to={`/blogs/${data.id}`} style={{textDecoration:'none'}}>
    <div className='blog-card'> 
    <img src={data.imageUrl} alt="" />
    <div className="blog-card-text">
        <span >{data.title}</span>
        <p>{data.content}</p>
    </div>
    </div>
    </Link> 
  )
}

export default BlogCard