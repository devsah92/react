import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // We'll add elegant styles here

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white elegant-navbar">
    <div className="container">
      {/* Logo */}
      <a className="navbar-brand fw-semibold fs-4 text-primary" href="#">
        Matrimony
      </a>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item px-3">
            <a className="nav-link elegant-link" href="#">About Us</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link elegant-link" href="#">Help</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link elegant-link" href="#">Login</a>
          </li>
          <li className="nav-item ps-3">
            <a
              href="#"
              className="btn btn-primary register-btn"
            >
              Register Free
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
