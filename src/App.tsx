import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Code, Lightbulb, Award, Terminal } from 'lucide-react';
import Home from './pages/Home';
import Seminars from './pages/Seminars';
import Innovation from './pages/Innovation';
import Hackathons from './pages/Hackathons';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <Code className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Portfolio</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600">
                  Home
                </Link>
                <Link to="/seminars" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600">
                  Seminaries
                </Link>
                <Link to="/innovation" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600">
                  Innovatieroutes
                </Link>
                <Link to="/hackathons" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600">
                  Hackathons
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/seminars"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Seminaries
              </Link>
              <Link
                to="/innovation"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Innovatieroutes
              </Link>
              <Link
                to="/hackathons"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Hackathons
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/hackathons" element={<Hackathons />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;