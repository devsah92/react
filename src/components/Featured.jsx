// components/Featured.jsx
import React from 'react';

const Featured = () => (
  <div className="container my-5">
    <h3 className="text-center mb-4">Featured Profiles</h3>
    <div className="row">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="col-md-3 mb-3">
          <div className="card">
            <img src={`https://via.placeholder.com/150`} className="card-img-top" alt="Profile" />
            <div className="card-body text-center">
              <h5 className="card-title">User {i}</h5>
              <p className="card-text">26, Hindu, Delhi</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Featured;