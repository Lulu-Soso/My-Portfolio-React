import React from 'react'

const Menu = ({ scrollToSection }) => {
  return (
    <div>
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
    </div>
  )
}

export default Menu