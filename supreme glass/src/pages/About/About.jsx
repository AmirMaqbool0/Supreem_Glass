import React, { useState } from 'react'
import './style.css'
import Banner from '../../components/Banner/Banner'
import Heading from '../../components/Heading/Heading'
import User from '../../assets/card.png'
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        field: "Software Engineer",
        image: User,
        text: "Great service with dedicated advisors who support every step.",
    },
    {
        id: 2,
        name: "John Smith",
        field: "Project Manager",
        image: User,
        text: "The team provided excellent support throughout.",
    },
    {
        id: 3,
        name: "Alice Brown",
        field: "UX Designer",
        image: User,
        text: "Highly recommended for professional and timely advice.",
    },
];
const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className='about-container'>
            <Banner title={'About us'} />
            <div className="about-content">
                <div className="about-main">
                    <div className="about-main-left">
                        <span>Glass & Aluminium
                            Solution Provider UAE</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="about-main-right">

                    </div>
                </div>
                <div className="about-feature">
                    <Heading  title={'Our Features'}/>
                    <div className="about-feature-cards">
                        {
                            Array(6).fill().map((_,i)=>(
                                <div className="about-feature-card">
                                <img src="" alt="" />
                                <div className="about-feature-card-text">
                                    <span>Hinges</span>
                                    <p>Description</p>
                                </div>
                              </div>
                            ))
                        }
                    
                    </div>
                </div>
               
                <div className="our-testinomial">
                    <Heading title={'Our Testimonials'} />
                    <div className="our-review-container">


                    <div className="testinomial-carousel">
                        <button className="nav-button left" onClick={handlePrev}>
                            <ArrowLeft size={25} />
                        </button>
                        <div className="carousel-wrapper">
                            <div
                                className="carousel-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div className="carousel-item" key={testimonial.id}>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="profile-image"
                                        />
                                        <div className="testimonial-content">
                                            <h3 className="name">{testimonial.name}</h3>
                                            <p className="field">{testimonial.field}</p>
                                            <p className="text">{testimonial.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="nav-button right" onClick={handleNext}>
                            <ArrowRight size={25} />
                        </button>
                    </div>

                    </div>



                </div>


                
            </div>
        </div>
    )
}

export default About