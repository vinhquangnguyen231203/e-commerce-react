// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scroll_to_top.scss'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible? 'visible': ''}`}>
      {isVisible && 
        <div onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      }
    </div>
  );
};

export default ScrollToTop;
