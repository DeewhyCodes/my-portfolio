import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="back-to-top-icon" />
    </button>
  );
};

export default BackToTopButton;
