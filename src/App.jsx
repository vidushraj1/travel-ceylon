import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import StudentProfilePage from './pages/StudentProfilePage/StudentProfilePage';
import ContentPage from './pages/ContentPage/ContentPage';
import QuizStartPage from './pages/QuizStartPage/QuizStartPage';
import QuizPage from './pages/QuizPage/QuizPage';
import PlaceholderPage from './pages/PlaceholderPage/PlaceholderPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/:studentName" element={<StudentProfilePage />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="quiz" element={<QuizStartPage />} />
          <Route 
            path="store" 
            element={<PlaceholderPage title="Store" message="Our online store is coming soon!" />} 
          />
          <Route 
            path="feedback" 
            element={<PlaceholderPage title="Feedback" message="The feedback form will be available shortly." />} 
          />
        </Route>
        
        <Route path="quiz/play" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;