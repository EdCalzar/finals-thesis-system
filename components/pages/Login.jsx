import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './Login.css';
import finalLogo from '../../assets/final_logo.png';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill out both username and password.');
      return;
    }
    setError('');
    // Simulate successful login, then redirect to Home
    navigate('/home'); // Change this to redirect to the Home component
  };

  return (
    <div className="login-wrapper">
      <div className="left-section">
        <h1>
          Your Voice.<br />
          Her Safety.
        </h1>
        <p>
          Share your <b>experiences</b> report <b>unsafe areas</b>, support each other — no one should <b>feel alone</b> in their <b>safety journey</b>.
        </p>
      </div>
      <div className="right-section">
        <div className="login-box">
          <img src={finalLogo} alt="Logo" />
          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{ color: 'red', marginBottom: '12px', fontWeight: 'bold' }}>
                {error}
              </div>
            )}
            <label><b>Username</b></label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <label><b>Password</b></label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
          </form>
          <p className='account'>
            <a href="#">Don't have an account?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
