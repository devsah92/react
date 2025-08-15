// components/AppPromo.jsx
import React from 'react';

const AppPromo = () => (
  <div className="bg-dark text-white py-5 text-center">
    <div className="container">
      <h4>Download Our App</h4>
      <p>Get the best experience on your mobile</p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-light">Google Play</button>
        <button className="btn btn-light">App Store</button>
      </div>
    </div>
  </div>
);

export default AppPromo;