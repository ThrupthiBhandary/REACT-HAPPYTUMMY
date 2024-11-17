import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const toggleSignUpModal = () => {
    setSignUpModalOpen(!isSignUpModalOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Food App</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/feedback">Feedback</Link>  {/* Add Feedback link */}
        <Link to="/cart" className="cart-link">Cart</Link>
        <button className="signup-button" onClick={toggleSignUpModal}>Sign Up</button>
      </nav>

      {isSignUpModalOpen && <SignUpModal closeModal={toggleSignUpModal} />}
    </header>
  );
}

const SignUpModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Submit</button>
        </form>
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Header;
