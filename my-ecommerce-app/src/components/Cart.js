// Cart.js
import React from 'react';
import CartItem from './CartItem'; // You'll need to create this component

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))
      )}
      <p>Total: ${calculateTotal(cartItems).toFixed(2)}</p>
    </div>
  );
};

export default Cart;