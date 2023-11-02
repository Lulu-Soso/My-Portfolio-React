import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Affiche le bouton lorsque l'utilisateur fait défiler la page de 100 pixels ou plus
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajoute un gestionnaire d'événements pour le défilement de la page
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Retire le gestionnaire d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fait remonter la page en haut lors du clic sur le bouton
const scrollToTop = () => {
    console.log("Bouton cliqué"); // Ajout pour le débogage
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <div
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <button>Back to Top</button>
    </div>
  );
};

export default BackToTopButton;
