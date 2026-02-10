import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Edit, Trash } from 'lucide-react'
import { app } from '../../firebase'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Categories = () => {
  const [data,setData] = useState([])
  const db= getFirestore(app)

  const get_Categories = async () =>{
      const collectionRef = collection(db,'categories')
      const result = await getDocs(collectionRef)
      const arr = result.docs.map((doc)=>(
        {id:doc.id,...doc.data()}
      ))
      setData(arr)
  }
  useEffect(()=>{
  get_Categories()
},[])
  return (
    <div className='categories-conteiner'>
      <div className="categories-content">
        <div className="categories-header">
          <input type="text" placeholder='Search' />
          <Link to={'/addcategory'}> <button>Add Category</button> </Link>
        </div>
        <div className="categories">
          {
            data.map((item,i)=>(
              <div className="categories-card" key={i}>
              <img src={item.image} alt="" />
              <span>{item.name}</span>
              <div className="actions">
                <Edit color='rgba(63, 35, 5, 1)' />
                <Trash  color='red'/>
              </div>
           </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Categories