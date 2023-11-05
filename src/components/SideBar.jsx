import React, { useEffect, useState, useCallback } from "react";
import CubeOrange from "../assets/cube orange.svg"
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [initialSectionsActive, setInitialSectionsActive] = useState(true);

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    const section1Top = document.getElementById("section1")?.offsetTop;
    const section2Top = document.getElementById("section2")?.offsetTop;
    const section3Top = document.getElementById("section3")?.offsetTop;
    const section4Top = document.getElementById("section4")?.offsetTop;

    const offset = 10;

    if (initialSectionsActive && scrollPosition >= (section1Top - offset || 0)) {
      // Désactivez les premières sections au scroll
      setInitialSectionsActive(false);
    }

    if (location.pathname === '/') {
      if (scrollPosition >= section1Top - offset && scrollPosition < section2Top - offset) {
        setActiveSection("section1");
      } else if (scrollPosition >= section2Top - offset && scrollPosition < section3Top - offset) {
        setActiveSection("section2");
      } else if (scrollPosition >= section3Top - offset && scrollPosition < section4Top - offset) {
        setActiveSection("section3");
      } else if (scrollPosition >= section4Top - offset) {
        setActiveSection("section4");
      } else {
        setActiveSection(null);
      }
    } else if (location.pathname === '/page1') {
      const page1Section1Top = document.getElementById("page1-section1")?.offsetTop;
      const page1Section2Top = document.getElementById("page1-section2")?.offsetTop;

      if (scrollPosition >= page1Section1Top - offset && scrollPosition < page1Section2Top - offset) {
        setActiveSection("page1-section1");
      } else if (scrollPosition >= page1Section2Top - offset) {
        setActiveSection("page1-section2");
      } else {
        setActiveSection(null);
      }
    } else {
      setActiveSection(null);
    }
  }, [location.pathname, initialSectionsActive]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Réinitialise la section active lors du changement de route
    setActiveSection(null);
    // Remonte la page au sommet des sections
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Réactive les premières sections
    setInitialSectionsActive(true);
  }, [location.pathname]);


  return (
    <nav className="sidebar">
    <div className="cube">
      <img src={CubeOrange} alt="" />
    </div>
      {location.pathname === "/" && (
        <ul>
          <li>
            <button
              onClick={() => scrollToSection("section1")}
              className={(activeSection === "section1" || initialSectionsActive) ? "active" : ""}
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section2")}
              className={activeSection === "section2" ? "active" : ""}
            >
              Réalisations E-commerce
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section3")}
              className={activeSection === "section3" ? "active" : ""}
            >
              Design et créativité
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("section4")}
              className={activeSection === "section4" ? "active" : ""}
            >
              Découvrir
            </button>
          </li>
        </ul>
      )}
      {location.pathname === "/page1" && (
        <ul>
          <li>
            <button
              onClick={() => scrollToSection("page1-section1")}
              className={(activeSection === "page1-section1" || initialSectionsActive) ? "active" : ""}
            >
              Page1 Section 1
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("page1-section2")}
              className={activeSection === "page1-section2" ? "active" : ""}
            >
              Page1 Section 2
            </button>
          </li>
        </ul>
      )}
      {location.pathname === "/page2" && (
        <ul>
          <li>
            <button onClick={() => scrollToSection("page2-section1")}>
              Page2 Section 1
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("page2-section2")}>
              Page2 Section 2
            </button>
          </li>
        </ul>
      )}
      {location.pathname === "/about" && (
        <ul>
          <li>
            <button onClick={() => scrollToSection("about-section1")}>
              About Section 1
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about-section2")}>
              About Section 2
            </button>
          </li>
        </ul>
      )}
      {location.pathname === "/contact" && (
        <ul>
          <li>
            <button onClick={() => scrollToSection("contact-section1")}>
              Contact Section 1
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact-section2")}>
              Contact Section 2
            </button>
          </li>
        </ul>
      )}
      {location.pathname !== "/" &&
        location.pathname !== "/page1" &&
        location.pathname !== "/page2" &&
        location.pathname !== "/about" &&
        location.pathname !== "/contact" &&
        // Aucune section à afficher pour d'autres routes
        null}
    </nav>
  );
};

export default SideBar;
