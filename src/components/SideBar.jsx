import React, { useState } from 'react';
import Profile from './Profile';

const SideBar = () => {
    const [activeSection, setActiveSection] = useState('section1');

  const scrollToSection = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="left-navigation">
        <Profile />
      <ul>
        <li>
          <button onClick={() => scrollToSection('section1')}>Section 1</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('section2')}>Section 2</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('section3')}>Section 3</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('section4')}>Section 4</button>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
