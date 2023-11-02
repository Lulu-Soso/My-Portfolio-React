import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="ul-navbar">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Accueil
            </Link>
          </li>
          <li>
            {/* <Link to="/about"> */}
            <Link to="/Page1">
              <i className="fas fa-info-circle"></i> Page 1
            </Link>
          </li>
          <li>
            {/* <Link to="/portfolio"> */}
            <Link to="/Page2">
              <i className="fas fa-portfolio"></i> Page 2
            </Link>
          </li>
          <li>
            {/* <Link to="/contact"> */}
            <Link to="/Contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;