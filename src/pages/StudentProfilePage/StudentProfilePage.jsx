import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { students } from '../../data/studentData';
import styles from './StudentProfilePage.module.css';

function StudentProfilePage() {
  const { studentName } = useParams();
  const student = students[studentName];

  if (!student) {
    return (
      <div className={styles.notFound}>
        <h2>Student Not Found</h2>
        <Link to="/about">Back to About Us</Link>
      </div>
    );
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileCard}>
        <div className={styles.imageContainer}>
          <img src={student.image} alt={`Profile of ${student.name}`} />
        </div>
        <div className={styles.detailsContainer}>
          <h1>{student.name}</h1>
          <p className={styles.course}>{student.course}</p>
          <hr />
          <p className={styles.bio}>{student.bio}</p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}><strong>School:</strong> {student.school}</div>
            <div className={styles.infoItem}><strong>Age:</strong> {student.age}</div>
            <div className={styles.infoItem}>
                <strong>Phone:</strong> <a href={`tel:${student.phone}`} className={styles.contactLink}>{student.phone}</a>
            </div>

            <div className={styles.infoItem}><strong>Hobbies:</strong> {student.hobbies}</div>
          </div>

          <h3>Tasks Completed</h3>
          <ul className={styles.taskList}>
            {student.role.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          <div className={styles.contact}>
            <a href={`mailto:${student.email}`} className='primary-button'>Email Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;