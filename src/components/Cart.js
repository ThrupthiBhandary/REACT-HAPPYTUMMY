import React from 'react';
import '../styles/cart.css';

function Cart({ cartItems, updateCartItemQuantity, removeCartItem }) {
  console.log('Cart items:', cartItems); // Debugging log to verify cart items

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateCartItemQuantity(item.id, parseInt(e.target.value, 10))
              }
              min="1"
            />
            <button onClick={() => removeCartItem(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
      <h3>Total: ₹{totalAmount}</h3>
      {cartItems.length > 0 && (
        <button className="checkout-button">Proceed to Checkout</button>
      )}
    </div>
  );
}

export default Cart;
