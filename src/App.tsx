import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Seminars from './pages/Seminars';
import Innovation from './pages/Innovation';
import Hackathons from './pages/Hackathons';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;