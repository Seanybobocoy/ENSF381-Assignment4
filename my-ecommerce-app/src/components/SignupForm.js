// SignupForm.js
import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Simulate signup logic (replace with your actual signup logic)
    alert('Signup successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="signup-username">Username:</label>
      <input
        type="text"
        id="signup-username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="signup-password">Password:</label>
      <input
        type="password"
        id="signup-password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Signup</button>
      <button onClick={switchToLogin}>Switch to Login</button>
    </form>
  );
};

export default SignupForm;
