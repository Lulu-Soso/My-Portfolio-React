import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";

const SideBar = () => {
  const location = useLocation();

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Réinitialise la section active à "section1" lors du changement de route
  useEffect(() => {
    // Remonte la page au sommet des sections
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


  return (
    <nav className="left-navigation">
      <Profile />
      {location.pathname === "/" && (
        <ul>
          <li>
            <button onClick={() => scrollToSection("section1")}>
              Section 1
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section2")}>
              Section 2
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section3")}>
              Section 3
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section4")}>
              Section 4
            </button>
          </li>
        </ul>
      )}
       {location.pathname === '/page1' && (
        <ul>
          <li>
            <button onClick={() => scrollToSection('page1-section1')}>Page1 Section 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('page1-section2')}>Page1 Section 2</button>
          </li>
        </ul>
      )}
      {location.pathname === '/page2' && (
        <ul>
          <li>
            <button onClick={() => scrollToSection('page2-section1')}>Page2 Section 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('page2-section2')}>Page2 Section 2</button>
          </li>
        </ul>
      )}
      {location.pathname === '/about' && (
        <ul>
          <li>
            <button onClick={() => scrollToSection('about-section1')}>About Section 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about-section2')}>About Section 2</button>
          </li>
        </ul>
      )}
      {location.pathname === '/contact' && (
        <ul>
          <li>
            <button onClick={() => scrollToSection('contact-section1')}>Contact Section 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact-section2')}>Contact Section 2</button>
          </li>
        </ul>
      )}
      {location.pathname !== '/' && location.pathname !== '/page1' && location.pathname !== '/page2' && location.pathname !== '/about' && location.pathname !== '/contact' && (
        // Aucune section à afficher pour d'autres routes
        null
      )}
    </nav>
  );
};

export default SideBar;
