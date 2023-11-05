import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from "../assets/Home.svg"

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="ul-navbar">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeLogo} alt="" />
            </Link>
          </li>
          <li>
            {/* <Link to="/about"> */}
            <Link to="/page1">
              <i className="fas fa-info-circle"></i> Page 1
            </Link>
          </li>
          <li>
            {/* <Link to="/portfolio"> */}
            <Link to="/page2">
              <i className="fas fa-portfolio"></i> Page 2
            </Link>
          </li>
          <li>
            {/* <Link to="/portfolio"> */}
            <Link to="/about">
              <i className="fas fa-portfolio"></i> About
            </Link>
          </li>
          <li>
            {/* <Link to="/contact"> */}
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
