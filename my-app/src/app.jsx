// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import Featured from './components/Featured';
import AppPromo from './components/Apppromo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Featured />
      <AppPromo />
      <Footer />
    </div>
  );
}
export default App;