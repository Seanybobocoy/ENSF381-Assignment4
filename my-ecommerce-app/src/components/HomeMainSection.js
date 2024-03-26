// HomeMainSection.js
import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

const getRandomReviews = (reviews, count) => {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    setSelectedReviews(getRandomReviews(reviews, 2));
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <section style={{ marginBottom: '40px' }}>
        <h2>About Us</h2>
        <p>We, Seacho, are working and collaborating with local and global services to spread knowledge and products about sponges.</p>
        <button>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h4>{review.customerName}</h4>
            <p>{review.reviewContent}</p>
            <p>Rating: {"★".repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;
