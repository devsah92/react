/*  import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand fw-bold" to="/">Matrimonial India</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

 export default Navbar; */

 
// components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Matrimony</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
