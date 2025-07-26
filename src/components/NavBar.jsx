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
          <ul className= {`links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaInfoCircle /> About</Link></li>
            </ul>      

            <div className="logo">🛒 SwiftBasket</div>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

      <button onClick={toggleDarkMode} className="toggle-btn">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default NavBar;