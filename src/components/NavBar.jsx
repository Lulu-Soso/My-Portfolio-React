import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../assets/Home.svg";
import CardOrange from "../assets/Card-orange.svg";
import CardBeige from "../assets/Card-beige.svg";
import AboutOrange from "../assets/About-orange.svg";
import ContactOrange from "../assets/Contact-orange.svg"

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
            {/* <Link to="/portfolio"> */}
            <Link to="/about">
            <img src={AboutOrange} alt="" />
            </Link>
          </li>
          <li>
            {/* <Link to="/contact"> */}
            <Link to="/contact">
            <img src={ContactOrange} alt="" />
            </Link>
          </li>
          <li>
            {/* <Link to="/about"> */}
            <Link to="/project1">
              <img src={CardOrange} alt="" />
            </Link>
          </li>
          <li>
            {/* <Link to="/portfolio"> */}
            <Link to="/page2">
              <img src={CardBeige} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
