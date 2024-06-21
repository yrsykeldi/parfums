import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/Slider.css';
import '../styles/arrows.css'

const testimonials = [
  {
    text: "In love with these floral perfumes! The scents are balanced, not overpowering, and evoke a sense of serenity. I appreciate their commitment to sustainability too.",
    name: "Samantha R.",
    location: "MIAMI, FL",
    image: 'https://tengrinews.kz/userdata/news/2022/news_479513/thumb_b/photo_408771.jpeg',
    rating: 5
  },
  {
    text: "A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!",
    name: "Natalie F.",
    location: "ATLANTA, GA",
    image: "https://kartinki.pics/uploads/posts/2022-02/thumbs/1645097115_4-kartinkin-net-p-kartinki-chelovek-7.jpg",
    rating: 5
  },
  {
    text: "Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature's finest flowers fresh everyday.",
    name: "Jessica C.",
    location: "TAMPA, FL",
    image: "https://www.5thartists.com/wp-content/uploads/2021/06/Jamal_Brito5th018.jpg",
    rating: 5
  }
];


const Carousel = ({theme}) => {
  const isInDetailPage = window.location.pathname === '/detail'
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };



  const isDarkTheme = theme === "dark";

  const containerTextStyle = {
      color: isDarkTheme ? "white" : "black"
  };

  return (
    <div className="carousel-container">
      <h2 className={`carousel-container ${theme ? 'text-dark' : ''}`} style={containerTextStyle} >Everyone is <em>enchanted</em> by us.</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="stars">
              {'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}
            </div>
            <p>"{testimonial.text}"</p>
            <div className="profile">
              <img style={{ objectFit: 'cover' }} src={testimonial.image} alt={testimonial.name} />
              <div className="profile-info">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>
  
      </style>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'color' }}
      onClick={onClick}
    >
      <span className="arrow">&#x2192;</span>
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'color' }}
      onClick={onClick}
    >
      <span className="arrow">&#x2190;</span>
    </div>
  );
}

export default Carousel;




