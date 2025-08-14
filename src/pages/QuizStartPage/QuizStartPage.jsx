import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizStartPage.module.css';
import pageBackground from '../../assets/images/pidurangala.jpeg';

function QuizStartPage() {
  return (
    <div className={styles.startPage} style={{ backgroundImage: `url(${pageBackground})` }}>
      <div className={styles.introBox}>
        <h1>Sri Lanka Quiz</h1>
        <p>This quiz contains 10 questions.</p>
        <p>You have <strong>2 minutes</strong> to answer them.</p>
        <p>Each correct answer carries <strong>2 points</strong>.</p>
        <p>Are you ready?</p>
        <Link to="/quiz/play" className={`primary-button ${styles.startButton}`}>
          Start The Quiz
        </Link>
      </div>
    </div>
  );
}

export default QuizStartPage;