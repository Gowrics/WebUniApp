import React, { useState } from 'react';
import '../style.css';
import logo from '../assets/img/logo.png';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state between true and false
  };

  return (
    <header className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="site-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-switch" onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <a href="#" className="site-btn header-btn">Login</a>
            <nav className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About us</a></li>
                <li><a href="index.html">Courses</a></li>
                <li><a href="index.html">News</a></li>
                <li><a href="index.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
