import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API, or show a success message)
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="contact-us">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p className="intro">
          Have a question or want to place a special order? Reach out to us, and we’ll be happy to assist you.
        </p>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Our Contact Information</h2>
          <p>If you'd rather reach us directly, here are our contact details:</p>
          <ul>
            <li><strong>Email:</strong> support@HappyTummy.com</li>
            <li><strong>Phone:</strong> +91 123 456 7890</li>
            <li><strong>Address:</strong> 123 Cake Street, Baking Town, India</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
