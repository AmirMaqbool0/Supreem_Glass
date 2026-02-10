
import React, {useState}from 'react'
import './style.css'

import User from '../../assets/image1.png';
import User2 from '../../assets/image2.png';
import User3 from '../../assets/image3.png';
import User4 from '../../assets/image4.png';
import User5 from '../../assets/image5.png';
import User6 from '../../assets/image6.png';
import User7 from '../../assets/image7.png';
import User8 from '../../assets/image8.png';
import User9 from '../../assets/image9.png'
import User10 from '../../assets/image9.png'
import User11 from '../../assets/image9.png'
import User12 from '../../assets/image9.png'
import User13 from '../../assets/image9.png'
import User14 from '../../assets/image9.png'
import Banner from '../../components/Banner/Banner';

const images = [
    { src: User, gridArea: 'span 2 / span 2' },
    { src: User2, gridArea: 'span 1 / span 1' },
    { src: User3, gridArea: 'span 1 / span 2' },
    { src: User4, gridArea: 'span 2 / span 1' },
    { src: User5, gridArea: 'span 1 / span 1' },
    { src: User6, gridArea: 'span 1 / span 1' },
    { src: User7, gridArea: 'span 2 / span 2' },
    { src: User8, gridArea: 'span 1 / span 1' },
    { src: User9, gridArea: 'span 1 / span 2' },
    { src: User10, gridArea: 'span 1 / span 1' },
    { src: User11, gridArea: 'span 1 / span 1' },
    { src: User12, gridArea: 'span 2 / span 1' },
    { src: User13, gridArea: 'span 2 / span 1' },
    { src: User14, gridArea: 'span 2 / span 1' },
  ];

const Gallary = () => {

      const [selectedImage, setSelectedImage] = useState(null);      
  return (
    <div className="gallry-page-main-container">
        <Banner title={'Gallary'}/>
        <div className="gallary-box-main-container">

     
        <div className="heading-box-gallry">
            <span>Our Gallery</span>

        </div>


        <div className="ourGallary-main-container-images">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-image"
              style={{ gridArea: image.gridArea }}
              onClick={() => setSelectedImage(image.src)} // Open full-screen image on click
            >
              <img src={image.src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Fullscreen Preview" className="modal-image" />
        </div>
      )}
        
        </div>


    
  )
}

export default Gallary
