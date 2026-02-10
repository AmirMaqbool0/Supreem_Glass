import React, { useEffect, useState } from 'react'
import './style.css'
import { app } from '../../firebase'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
    const [data,setData] = useState({})
    const {id} = useParams()
   const db = getFirestore(app)
   const get_blog = async () =>{
    const docRef = doc(db,'blogs',id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        setData(docSnap.data())
      }
   }
    
    useEffect(()=>{
        get_blog()
    })
    console.log(data)
  return (
    <div className='blog-detail-container'>
        <div className="blog-img">
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="blog-detail-coontent">
            <span>{data.title}</span>
            <p>{data.content}</p>
        </div>
    </div>
  )
}

export default BlogDetail