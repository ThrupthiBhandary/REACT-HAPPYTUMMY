import React, { useState } from 'react';
import '../styles/cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', quantity: 2, price: 10 },
    { id: 2, name: 'Burger', quantity: 1, price: 8 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            min="0"
          />
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalAmount}</h3>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
