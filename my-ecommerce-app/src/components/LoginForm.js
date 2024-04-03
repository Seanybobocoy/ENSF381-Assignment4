// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Simulate login logic (replace with your actual authentication logic)
    if (username === 'example' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <button onClick={switchToSignup}>Switch to Signup</button>
    </form>
  );
};

export default LoginForm;
