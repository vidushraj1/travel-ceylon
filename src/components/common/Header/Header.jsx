import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';

import HamburgerIcon from '../../../assets/icons/hamburger.svg?react';
import CloseIcon from '../../../assets/icons/close.svg?react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.branding} onClick={closeMobileMenu}>
            <img src={logo} alt="Travel Ceylon Logo" />
            <h1>TRAVEL CEYLON</h1>
          </Link>
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>About</NavLink></li>
              <li><NavLink to="/quiz" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>Quiz</NavLink></li>
              <li><NavLink to="/content" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>Content</NavLink></li>
              <li><NavLink to="/store" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>Store</NavLink></li>
              <li><NavLink to="/feedback" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMobileMenu}>Feedback</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;