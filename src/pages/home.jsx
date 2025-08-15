import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImg from "../public/images/hero.webp"; // place your webp image here

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            ShaadiClone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="text-white text-center text-lg-start"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                Find Your Perfect Match
              </h1>
              <p className="lead">
                India’s most trusted matrimony and matchmaking service
              </p>
              <a href="/register" className="btn btn-primary btn-lg mt-3">
                Find Your Match
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Verified Profiles"
                className="mb-3 rounded-circle"
              />
              <h5>100% Verified Profiles</h5>
              <p>We ensure all members are genuine and authentic.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Safe & Secure"
                className="mb-3 rounded-circle"
              />
              <h5>Safe & Secure</h5>
              <p>Your privacy is our top priority.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Advanced Filters"
                className="mb-3 rounded-circle"
              />
              <h5>Advanced Filters</h5>
              <p>Find the right match faster with smart filters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain unchanged */}
      {/* Recently Joined Section */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Recently Joined</h2>
          <div className="row">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="col-md-3" key={index}>
                <img
                  src="https://via.placeholder.com/200"
                  alt="Profile"
                  className="rounded-circle mb-3 img-fluid"
                />
                <h5>User {index + 1}</h5>
                <p>Age: 28 | City: Mumbai</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <h5>1. Register</h5>
              <p>Create your free profile with basic details.</p>
            </div>
            <div className="col-md-4">
              <h5>2. Browse</h5>
              <p>Search and connect with potential matches.</p>
            </div>
            <div className="col-md-4">
              <h5>3. Connect</h5>
              <p>Start chatting and take the next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="mb-4">About Us</h2>
          <p className="lead">
            Matrimonial India is a platform dedicated to helping people find genuine life partners. Our mission is to build meaningful connections through a secure and trusted environment.
          </p>
          <p>
            With thousands of success stories, robust verification processes, and advanced matchmaking algorithms, we are committed to delivering the best experience for every user.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Success Stories</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                "We met through this site and are happily married now! Highly
                recommended."
              </blockquote>
              <footer className="blockquote-footer">Rohit & Priya</footer>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                "A perfect experience. Found my soulmate."
              </blockquote>
              <footer className="blockquote-footer">Anjali & Sameer</footer>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-primary text-white">
        <div className="container">
          <h3>Start Your Search Today</h3>
          <p>Join millions who found their match with us</p>
          <a href="/register" className="btn btn-light btn-lg">
            Create Your Profile
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Matrimonial Site. All rights reserved.</p>
          <p>
            <a href="/privacy" className="text-white mx-2">
              Privacy Policy
            </a>
            |
            <a href="/terms" className="text-white mx-2">
              Terms of Service
            </a>
            |
            <a href="/contact" className="text-white mx-2">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
