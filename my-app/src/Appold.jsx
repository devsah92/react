import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-dark text-white text-center py-3">
          &copy; 2025 Matrimonial India
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
