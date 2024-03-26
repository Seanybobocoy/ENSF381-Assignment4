// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const logo = process.env.PUBLIC_URL + '/images/Seacho.png';
  return (
    <header>
      <div style={{ padding: '20px', textAlign: 'right'}}>
        Seacho
      </div>
      <div>
        <img src={logo} alt="Logo" style={{ padding: '20px', width: '100px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ padding: '20px', textAlign: 'left' }}>Home</Link>
        <Link to="/products" style={{ padding: '20px', textAlign: 'center' }}>Products</Link>
        <Link to="/login" style={{ padding: '20px', textAlign: 'right' }}>Login</Link>
      </div>
    </header>
  );
};

export default Header;
