import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaHome, FaInfoCircle, FaMoon, FaSun, FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css';

function NavBar({darkMode, toggleDarkMode}) {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <h2 className="logo">🛒 Shopping List</h2>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className= {`links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
          <FaHome /> Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <FaInfoCircle /> About
        </Link>
      </div>

      <button onClick={toggleDarkMode} className="toggle-btn">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default NavBar;