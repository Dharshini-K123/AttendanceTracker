// src/HomePage.js
import React from "react";
import "./HomePage.css";
import heroImg from "./image.png";
import { useNavigate } from 'react-router-dom';


// Import university logos from assets
import logo1 from "./assets/anna.png";
import logo2 from "./assets/cit.png";
import logo3 from "./assets/gct.png";
import logo4 from "./assets/psg.png";
import logo5 from "./assets/skcet.png";
import FeatureHighlight from "./FeatureHighlight";
import FeatureSection from "./FeatureSection";



const HomePage = () => {
  const navigate = useNavigate(); // ✅ moved inside component

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">One<span>Click</span></div>
        <div className="nav-links">
          <a href="#">Product ▾</a>
          <a href="#">Solutions ▾</a>
          <a href="#">Pricing</a>
          <a href="#">Customers</a>
          <a href="#">Features ▾</a>
          <a href="#">Resources ▾</a>
        </div>
        <div className="auth-buttons">
  <button className="login" onClick={handleLoginClick}>Login</button>
  <button className="signup" onClick={handleSignUpClick}>Sign Up</button>
</div>

      </nav>

      <main className="main-content">
        <div className="text-section">
          <p className="sub-heading">Attendance Tracking System for Teachers and Students</p>
          <h1>
            Simplify Class Management with <span className="blue">OneTap</span>
          </h1>
          <p className="description">
            OneTap is built for both teachers and students to manage attendance digitally.
            <br /><br />
            Teachers can easily create sessions, and students can check in with a single tap using their own devices.
          </p>
          <div className="role-buttons">
            <button className="teacher-btn">Login as Teacher</button>
            <button className="student-btn">Login as Student</button>
          </div>
          <p className="trust-text">✅ Trusted by 50,000+ users</p>
        </div>

        <div className="image-section">
          <img src={heroImg} alt="Classroom Illustration" />
        </div>
      </main>

      <div className="university-logos">
        <p className="logo-heading">Trusted by top universities and colleges</p>
        <div className="carousel-container">
          <div className="logos-row">
            <img src={logo1} alt="Anna University" className="university-logo" />
            <img src={logo2} alt="CIT" className="university-logo" />
            <img src={logo3} alt="GCT" className="university-logo" />
            <img src={logo4} alt="PSG" className="university-logo" />
            <img src={logo5} alt="SKCET" className="university-logo" />
          </div>
        </div>
      </div>
     
<FeatureHighlight />
<FeatureSection />
    </div>
  );
};

export default HomePage;
