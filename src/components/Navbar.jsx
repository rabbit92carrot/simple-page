import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">NeoDr</span>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/company">Company</Link>
          </li>
          <li className="navbar-item">
            <Link to="/pr">PR</Link>
          </li>
          <li className="navbar-item">
            <Link to="/inquiry">Inquiry</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="btn-contact" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
