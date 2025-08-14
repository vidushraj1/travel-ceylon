import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileCard.module.css';

function ProfileCard({ name, role, uowId, iitId, dob, course, imageSrc, linkTo }) {
  return (
    <Link to={linkTo} className={styles.cardLink}>
      <article className={styles.caption}>
        <img className={styles.media} src={imageSrc} alt={`Profile of ${name}`} />
        <div className={styles.overlay}>
          <h3 className={styles.overlayTitle}>{name}</h3>
          <div className={styles.overlayContent}>
            <p>
              <strong>{role}</strong><br />
              <strong>IIT ID:</strong> {iitId}<br />
              <strong>UoW ID:</strong> {uowId}<br />
              <strong>DOB:</strong> {dob}<br />
              <strong>Course:</strong> {course}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProfileCard;