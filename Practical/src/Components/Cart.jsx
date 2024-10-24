// src/Components/Cart.js
import React from 'react';
import { useCart } from '../Components/CartContext';

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <h5>{item.level}</h5>
              <p>Price: ${item.rupee}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
