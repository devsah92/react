import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Search() {
  const [filters, setFilters] = useState({
    gender: '',
    caste: '',
    religion: '',
    city: '',
  });

  const [profiles, setProfiles] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await api.get(`/users?${params}`);
      setProfiles(res.data);
    } catch (err) {
      console.error('Error fetching profiles:', err);
    }
  };

  useEffect(() => {
    handleSearch(); // Load profiles on initial page load
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Profiles</h2>

      {/* Filter Form */}
      <div style={{ marginBottom: '1rem' }}>
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="caste" placeholder="Caste" onChange={handleChange} />
        <input name="religion" placeholder="Religion" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Results */}
      <div>
        {profiles.length === 0 ? (
          <p>No profiles found.</p>
        ) : (
          <ul>
            {profiles.map((profile) => (
              <li key={profile.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <strong>{profile.name}</strong><br />
                Gender: {profile.gender} <br />
                Caste: {profile.caste} <br />
                Religion: {profile.religion} <br />
                City: {profile.city} <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
