// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage'; // Import the LoginPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Add route for the login page */}
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
