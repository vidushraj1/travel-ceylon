import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import EnvelopeIcon from '../../../assets/icons/envelope.svg?react';
import FacebookIcon from '../../../assets/icons/facebook.svg?react';
import InstagramIcon from '../../../assets/icons/instagram.svg?react';
import YoutubeIcon from '../../../assets/icons/youtube.svg?react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.branding}>TRAVEL CEYLON</h3>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/content">Content</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
            <h4 className={styles.heading}>Page Editors</h4>
            <ul className={styles.linkList}>
                <li><Link to="/about/sanuki">Sanuki Karunatilake</Link></li>
                <li><Link to="/about/vidushraj">Vidushraj Selvaraj</Link></li>
                <li><Link to="/about/devarn">Devarn Paraneetharan</Link></li>
                <li><Link to="/about/nethruwan">Nethruwan Dhansankha</Link></li>
            </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact Us</h4>
          <div className={styles.socialIcons}>
            <a href="mailto:info@travelceylon.com" aria-label="Email"><EnvelopeIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;