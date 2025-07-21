// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';
const App = () => {
  // App.js


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignInForm />} />
      </Routes>
    </Router>
  );
};

export default App;
