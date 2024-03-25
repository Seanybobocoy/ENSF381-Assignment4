// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <div style={{ width: '50%' }}>Logo</div> {/* Replace with actual logo */}
      <nav style={{ width: '50%', textAlign: 'right' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/login" style={{ marginRight: '20px' }}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
