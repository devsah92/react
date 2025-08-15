
import React from 'react';
import './TestimonialSection.css';
import testimonialImage from '../assets/images/ravisanker.png'; // Replace with the actual image path

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <p className="quote">
              "At matrimony.com, it is our life's mission to use technology for good and bring back deep and meaningful relationships."
            </p>
            <p className="attribution">- Shri Shri Ravishankar, Spritual leader</p>
          </div>
          <div className="testimonial-image">
            <img src={testimonialImage} alt="Anupam Mittal, Founder & CEO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
