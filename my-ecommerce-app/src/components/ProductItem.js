// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { id, name, price, image, description } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div>
        <h3
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          {name}
        </h3>
        {showDetails && <p>{description}</p>}
        <p>${price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;