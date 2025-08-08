import React from 'react';

function Register() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter full name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select className="form-select">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Caste</label>
            <input type="text" className="form-control" placeholder="Caste" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Religion</label>
            <input type="text" className="form-control" placeholder="Religion" />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" placeholder="Age" />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" placeholder="City" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
