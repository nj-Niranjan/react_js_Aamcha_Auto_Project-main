import React, { useState } from 'react';
import "../App.css";
import image from "/images/testi.jpg"; 

const Testimonials = () => {
  const testimonialsData = [
    { quote: "The best ride service I've ever used!", name: "Aman Singh." },
    { quote: "Reliable and friendly drivers, highly recommend!", name: "Gautam Kumar." },
    { quote: "A fantastic experience from start to finish.", name: "Anshu Kumari." },
    { quote: "Affordable rates and great customer service!", name: "Md. Junaid." },
    { quote: "I always feel safe and comfortable during my rides.", name: "Isha Rai." },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="testimonials-section">
      <div className="testimonials-circle-trigger-container">
        <div
          className={`testimonials-circle-trigger ${isHovered ? 'expanded' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2>What Our Customers Say</h2>
          {isHovered && (
            <div className="testimonial-box-container">
              {testimonialsData.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <p>"{testimonial.quote}"</p>
                  <h4>- {testimonial.name}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div
        className="testimonials-background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </section>
  );
};

export default Testimonials;
