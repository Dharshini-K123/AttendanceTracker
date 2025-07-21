import React, { useState } from 'react';
import './Modal.css'; // Keep your styling

const SignInForm = ({ closeModal, openLogin }) => {
  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate sign-up success
    alert('You have signed up successfully!');

    // Optionally store data locally
    const user = {
      name,
      emailAddress,
      password,
    };

    localStorage.setItem('user', JSON.stringify(user));
    closeModal(); // Close modal after sign-up
  };

  return (
    <div className="modal">
      <div className="modal-content1">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className='closeh2'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <button onClick={openLogin}>Login</button></p>
      </div>
    </div>
  );
};

export default SignInForm;
