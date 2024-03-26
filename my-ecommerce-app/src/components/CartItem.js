// CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;

  const handleRemoveClick = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>${price} x {quantity} = ${(price * quantity).toFixed(2)}</p>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;