import React, { useEffect, useRef } from 'react';
import './style.css'; // Make sure your CSS is imported

const Carousel = () => {
  // Refs for key DOM elements
  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  // On mount, move the first thumbnail item to the end as in the original code.
  useEffect(() => {
    const thumbnail = thumbnailRef.current;
    const thumbnailItems = thumbnail.querySelectorAll('.item');
    if (thumbnailItems.length > 0) {
      thumbnail.appendChild(thumbnailItems[0]);
    }
  }, []);

  // Function to move the slider in the specified direction
  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
    }

    // Remove the class after the animation completes (using the once option)
    slider.addEventListener(
      'animationend',
      () => {
        if (direction === 'next') {
          slider.classList.remove('next');
        } else {
          slider.classList.remove('prev');
        }
      },
      { once: true }
    );
  };

  return (
    <div className="slider" ref={sliderRef}>
      <div className="list" ref={sliderListRef}>
        <div className="item">
          <img src="https://images.ctfassets.net/hrltx12pl8hq/1D85eAdM0IhXrEYsoOt7Ut/107424ea3e7e10ab3203446dae175cf7/3_jungle_animals.webp" alt="" />
          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            {/* <div className="type">FLOWER</div> */}
            {/* <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div> */}
            {/* <div className="button">
              <button>SEE MORE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/id/1399292810/photo/group-of-wildlife-animals-in-the-jungle-together.jpg?s=612x612&w=0&k=20&c=NXVzp7awiZhUf-OjcSmaDTcWz3h_XyGcozlTFD883eg=" alt="" />
          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            {/* <div className="type">NATURE</div> */}
            {/* <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div> */}
            {/* <div className="button">
              <button>SEE MORE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb0u7VARzmUqKH8hajwHwFrkM8_7kPy9P4A&s" alt="" />
          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            {/* <div className="type">PLANT</div> */}
            {/* <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div> */}
            {/* <div className="button">
              <button>SEE MORE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            {/* <div className="type">NATURE</div> */}
            {/* <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div> */}
            {/* <div className="button">
              <button>SEE MORE</button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/1D85eAdM0IhXrEYsoOt7Ut/107424ea3e7e10ab3203446dae175cf7/3_jungle_animals.webp" alt="" />

        </div>
        <div className="item">
        <img src="https://media.istockphoto.com/id/1399292810/photo/group-of-wildlife-animals-in-the-jungle-together.jpg?s=612x612&w=0&k=20&c=NXVzp7awiZhUf-OjcSmaDTcWz3h_XyGcozlTFD883eg=" alt="" />
        </div>
        <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb0u7VARzmUqKH8hajwHwFrkM8_7kPy9P4A&s" alt="" />
        </div>
        <div className="item">
        <img src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}>
          &lt;
        </button>
        <button className="next" onClick={() => moveSlider('next')}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
