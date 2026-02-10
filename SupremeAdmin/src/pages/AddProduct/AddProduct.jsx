import React, { useEffect, useState } from 'react';
import './style.css';
import { app } from '../../firebase';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { X } from 'lucide-react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [finish, setFinish] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [imageInput, setImageInput] = useState('');
  const [sizeInput, setSizeInput] = useState('');
  const [finishInput, setFinishInput] = useState('');
  const [material, setMaterial] = useState('');
  const db = getFirestore(app);


  const get_Categories = async () => {
    const collectionRef = collection(db, 'categories');
    const result = await getDocs(collectionRef);
    const arr = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCategory(arr);
  };

  useEffect(() => {
    get_Categories();
  }, []);

  const handleImageInput = (e) => {
    if (e.key === 'Enter' && imageInput.trim()) {
      setImages([...images, imageInput.trim()]);
      setImageInput('');
    }
  };


  const handleSizeInput = (e) => {
    if (e.key === 'Enter' && sizeInput.trim()) {
      setSizes([...sizes, sizeInput.trim()]);
      setSizeInput('');
    }
  };

  const handleFinishInput = (e) => {
    if (e.key === 'Enter' && finishInput.trim()) {
      setFinish([...finish, finishInput.trim()]);
      setFinishInput('');
    }
  };


  const handleMaterialInput = (e) => {
    if (e.key === 'Enter' && material.trim()) {
      setMaterials([...materials, material.trim()]);
      setMaterial('');
    }
  };


  const removeMaterial = (index) => {
    const newMaterials = materials.filter((_, i) => i !== index);
    setMaterials(newMaterials);
  };


  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };


  const removeSize = (index) => {
    const newSizes = sizes.filter((_, i) => i !== index);
    setSizes(newSizes);
  };


  const removeFinish = (index) => {
    const newFinish = finish.filter((_, i) => i !== index);
    setFinish(newFinish);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };


  const handleAddProduct = async () => {
    if (!selectedCategory) {
      alert('Please select a category');
      return;
    }

    const productData = {
      name,
      description,
      images,
      sizes,
      finish,
      materials,
    };

    try {
      
      const productsRef = collection(db, `categories/${selectedCategory}/products`);
      await addDoc(productsRef, productData);
      alert('Product added successfully!');
      // Reset form
      setName('');
      setDescription('');
      setImages([]);
      setSizes([]);
      setFinish([]);
      setMaterials([]);
    } catch (error) {
      console.error('Error adding product: ', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className='add-product-container'>
      <div className="add-product-content">
        <div className="category-bar">
          {category.map((cat) => (
            <span
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              style={{ fontWeight: selectedCategory === cat.id ? 'bold' : 'normal' }}
            >
              {cat.name}
            </span>
          ))}
        </div>

        <div className="add-product-data">
          <div className="add-product-box">
            <span>Name</span>
            <input
              type="text"
              placeholder='Name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="add-product-box">
            <span>Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="add-product-box">
            <span>Images</span>
            <input
              type="text"
              placeholder='Image url...'
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              onKeyUp={handleImageInput}
            />
            <div className="add-product-images">
              {images.map((image, index) => (
                <div className="add-product-image" key={index}>
                  <img src={image} alt={`Image ${index}`} />
                  <div onClick={() => removeImage(index)}><X color='rgba(63, 35, 5, 1)' /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="add-product-box">
            <span>Finish</span>
            <input
              type="text"
              placeholder='Finish...'
              value={finishInput}
              onChange={(e) => setFinishInput(e.target.value)}
              onKeyUp={handleFinishInput}
            />
            <div className="finishes">
              {finish.map((finish, index) => (
                <div className="finish" key={index}>
                  <span>{finish}</span>
                  <div onClick={() => removeFinish(index)}><X color='white' /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="add-product-box">
            <span>Sizes</span>
            <input
              type="text"
              placeholder='Size...'
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
              onKeyUp={handleSizeInput}
            />
            <div className="finishes">
              {sizes.map((size, index) => (
                <div className="finish" key={index}>
                  <span>{size}</span>
                  <div onClick={() => removeSize(index)}><X color='white' /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="add-product-box">
            <span>Material</span>
            <input
              type="text"
              placeholder='Material...'
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              onKeyUp={handleMaterialInput}
            />
            <div className="finishes">
              {materials.map((material, index) => (
                <div className="finish" key={index}>
                  <span>{material}</span>
                  <div onClick={() => removeMaterial(index)}><X color='white' /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;