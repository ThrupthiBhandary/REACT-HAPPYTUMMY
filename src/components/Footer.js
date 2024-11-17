import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">Sweet Slice Cakes</h3>
          <p className="footer-description">Delicious cakes for every occasion. From birthdays to anniversaries, we’ve got you covered!</p>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>Email: support@Happy Tummy.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Location: Manglore, India</li>
          </ul>

          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Happy Tummy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
