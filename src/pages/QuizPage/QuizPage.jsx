import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { myQuestions } from '../../data/quizQuestions';
import styles from './QuizPage.module.css';

const TOTAL_TIME = 120;

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0 || showScore) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showScore]);

  const handleAnswerOptionClick = (selectedOption) => {
    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let finalScore = 0;
    myQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        finalScore += 2;
      }
    });
    setScore(finalScore);
    setShowScore(true);
  };

  if (timeLeft === 0 && !showScore) {
    handleSubmit();
  }
  
  const getResultClass = () => {
    if (score >= 16) return styles.resultGreen;
    if (score >= 10) return styles.resultOrange;
    return styles.resultRed;
  }

  return (
    <div className={styles.quizPage}>
      <div className={`${styles.quizBox} ${showScore ? getResultClass() : ''}`}>
        {showScore ? (
          <div className={styles.scoreSection}>
            <h2>Quiz Complete!</h2>
            <p>You scored {score} out of {myQuestions.length * 2} points.</p>
            <p>Time taken: {TOTAL_TIME - timeLeft} seconds.</p>
            <button className='primary-button' onClick={() => navigate('/quiz')}>
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className={styles.timer}>Time Left: {timeLeft}s</div>
            <div className={styles.questionSection}>
              <div className={styles.questionCount}>
                <span>Question {currentQuestion + 1}</span>/{myQuestions.length}
              </div>
              <div className={styles.questionText}>
                {myQuestions[currentQuestion].question}
              </div>
            </div>
            <div className={styles.answerSection}>
              {Object.keys(myQuestions[currentQuestion].answers).map((option) => (
                <button
                  key={option}
                  className={`${styles.answerButton} ${answers[currentQuestion] === option ? styles.selected : ''}`}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}: {myQuestions[currentQuestion].answers[option]}
                </button>
              ))}
            </div>
            <div className={styles.navigation}>
              <button
                className='primary-button'
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              {currentQuestion === myQuestions.length - 1 ? (
                <button className='primary-button' onClick={handleSubmit}>
                  Submit
                </button>
              ) : (
                <button
                  className='primary-button'
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizPage;