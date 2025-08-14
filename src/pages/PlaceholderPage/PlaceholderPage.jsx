import React from 'react';
import styles from './PlaceholderPage.module.css';
import pageBackground from '../../assets/images/pidurangala.jpeg';

function PlaceholderPage({ title, message }) {
  return (
    <div className={styles.placeholderPage} style={{ backgroundImage: `url(${pageBackground})` }}>
      <div className={styles.messageBox}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default PlaceholderPage;