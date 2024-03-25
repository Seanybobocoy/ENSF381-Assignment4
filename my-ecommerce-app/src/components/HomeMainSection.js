// HomeMainSection.js
import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    setSelectedReviews(shuffled.slice(0, 2));
  }, []);

  return (
    <main>
      <section style={{ marginBottom: '20px' }}>
        <h2>About Us</h2>
        <button style={{ margin: '20px 0' }}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{"★".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;
