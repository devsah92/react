import React from 'react';
import './HeroSection.css';
import { FaStar } from 'react-icons/fa';

import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaSnapchat,
  FaDiscord,
  FaPinterest,
  FaReddit,
  FaTumblr,
  FaVimeo,
  FaTwitch,
  FaSpotify
} from 'react-icons/fa';



import heroImage from '../assets/images/hero.webp';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';
import icon4 from '../assets/images/icon4.svg';
import TestimonialSection from './TestimonialSection'; // or the correct path

import RealStoriesSection from './RealStoriesSection'; // Add this import
import FAQSection from './FAQSection'; // Add this import
import AboutSection from './AboutSection'; // Add this import

const FeatureCard = ({ src, alt, title, desc }) => (
  <div className="col-12 col-md-4">
    <div className="p-4 bg-white rounded shadow-sm h-100 d-flex flex-column align-items-center text-center">
      <img src={src} alt={alt} className="mb-3 card-img" style={{ width: '48px', height: '48px' }} />
      <h5 className="fw-semibold">{title}</h5>
      <p className="small text-muted">{desc}</p>
    </div>
  </div>
);

const HeroSection = () => {
  const features = [
    { src: icon1, alt: 'Money Back Guarantee', title: '30 Day Money Back Guarantee', desc: 'Get matched within 30 days, or we\'ll refund your money—guaranteed!' },
    { src: icon2, alt: 'Verified Profiles', title: 'Blue Tick to find your Green Flag', desc: 'Did you know our blue-tick profiles get 40% more connection requests than others?' },
    { src: icon3, alt: 'AI Matchmaking', title: 'Matchmaking Powered by AI', desc: 'Cutting-edge technology with two decades of matchmaking expertise to help you find "the one".' },
  ];

  return (
    <>
      <div className="hero-section d-flex flex-column justify-content-center text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Find your forever</h1>
          <p className="lead mb-4">Discover a world beyond matrimony</p>
          <button className="btn btn-primary btn-lg px-5 rounded-pill" aria-label="Find your match">
            Find Your Match
          </button>
        </div>
      </div>

      <div className="stats-strip text-white py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="d-flex align-items-center gap-2 text-center text-md-start">
            <span>#1 Matchmaking Service</span>
            <div className="vr mx-3 d-none d-md-block"></div>
            <div className="d-flex star-rating" aria-label="5-star rating">
              <FaStar aria-hidden="true" />
              <FaStar aria-hidden="true" />
              <FaStar aria-hidden="true" />
              <FaStar aria-hidden="true" />
              <FaStar aria-hidden="true" />
            </div>
            <span>Ratings on Playstore by 2.4 lakh users</span>
          </div>
          <div className="vr mx-3 d-none d-md-block"></div>
          <div>80 Lakh Success Stories</div>
        </div>
      </div>

      <section className="py-5 bg-light mt-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">The matrimony Experience</h2>
          <p className="text-muted mb-5">
            Connecting millions of people through trusted matchmaking for lasting relationships.
          </p>
          <div className="row g-4 justify-content-center">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="mt-5 p-4 bg-purple-100 rounded shadow-sm d-flex align-items-center justify-content-between">
            <div>
              <img src={icon4} alt="VIP matrimony" className="mb-2" style={{ width: '48px', height: '48px' }} />
              <h5 className="fw-semibold text-dark">VIP matrimony</h5>
              <p className="small text-muted">No.1 Matchmaking Service for Elites</p>
            </div>
            <p className="mb-0 text-dark">
              Experience the world of elite personalised matchmaking by matrimony.com
            </p>
            <button className="btn btn-primary btn-lg px-4 rounded-pill" aria-label="Free Consultation">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

       <TestimonialSection /> {/* Integrate the new TestimonialSection */}
       <RealStoriesSection /> {/* New 4th Section */}
       <FAQSection /> {/* New 5th Section */}
       
    </>
  );
};

export default HeroSection;