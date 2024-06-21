import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/SliderDatailsePage.css'

const testimonials = [
    {
        image: 'https://i.pinimg.com/564x/6f/49/d0/6f49d06785340fbad031ac155ca2d4b9.jpg',
        rating: 5
    },
    {
        image: 'https://i.pinimg.com/564x/6f/49/d0/6f49d06785340fbad031ac155ca2d4b9.jpg',
         rating: 5
    },
    {
        image: 'https://i.pinimg.com/564x/6f/49/d0/6f49d06785340fbad031ac155ca2d4b9.jpg',
        rating: 5
    }
  ];
  
  const SliderDatailsePaga = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: null,
      prevArrow: null,
    };

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <img style={{ objectFit: 'cover' }} src={testimonial.image} alt={testimonial.name} className="slider-detaile-page"/>
          ))}
        </Slider>
      </div>
    );
  };
export default SliderDatailsePaga;