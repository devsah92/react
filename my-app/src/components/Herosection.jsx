// components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-section text-white d-flex align-items-center">
    <div className="container text-center">
      <h1>Find Your Perfect Match</h1>
      <p>India’s most trusted matrimonial site</p>
      <form className="row justify-content-center mt-4">
        <div className="col-md-2">
          <select className="form-select"><option>I'm looking for</option><option>Male</option><option>Female</option></select>
        </div>
        <div className="col-md-2">
          <select className="form-select"><option>Age</option><option>18-25</option><option>26-35</option><option>36+</option></select>
        </div>
        <div className="col-md-2">
          <select className="form-select"><option>Religion</option><option>Hindu</option><option>Muslim</option><option>Christian</option></select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-light w-100">Search</button>
        </div>
      </form>
    </div>
  </div>
);

export default HeroSection;