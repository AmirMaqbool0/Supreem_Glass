import React, { useState } from 'react'
import './style.css'
import { app } from '../../firebase'
import { getFirestore,addDoc,collection } from 'firebase/firestore'
const AddCategoery = () => {
  const [image,setImage] = useState('')
  const [name,setName] = useState('')
  const db = getFirestore(app)
  const data = {
    name,
    image
  }
  const AddCategory = async () =>{
    try{
      const collectionRef = collection(db,'categories')
      await addDoc(collectionRef,data)
      setName('')
      setImage('')
    }
    catch(err){
      console.log(err)
    }


  }
  return (
    <div className='add-category-container'>
      <div className="add-category-content">
         <span>Add Category</span>
         <input type="text" placeholder='category name' 
         value={name} onChange={(e)=>setName(e.target.value)}
         />
         <input type="text" placeholder='category image' 
          value={image} onChange={(e)=>setImage(e.target.value)}
         />
         <button onClick={AddCategory}>Add Category</button>
      </div>
    </div>
  )
}

export default AddCategoery