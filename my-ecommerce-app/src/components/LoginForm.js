// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert validation and submission logic here
    alert('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', padding: '20px' }}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <button type="button" onClick={switchToSignup}>Switch to Signup</button>
      </div>
    </form>
  );
};

export default LoginForm;
