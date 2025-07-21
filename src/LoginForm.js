import React, { useState } from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ closeModal, openSignUp, onLogin }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hardcoded admin login
    if (emailAddress === 'Niraja@gmail.com' && password === '123456') {
      alert('Successfully logged in as Admin!');
      navigate('/admindashboard');
    } else {
      alert('Incorrect email or password.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content1">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="closeh2">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <button onClick={openSignUp}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
