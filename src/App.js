
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <route path="/" element={
              <div className="home">
                <h1>Welcome to SwiftBasket! Thanks for stopping by.</h1>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
