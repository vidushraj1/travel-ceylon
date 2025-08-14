import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.css';
import upArrow from '../../../assets/images/image1.png';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <img src={upArrow} alt="Back to top" />
    </button>
  );
}

export default BackToTopButton;