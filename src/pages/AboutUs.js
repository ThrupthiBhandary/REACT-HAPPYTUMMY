import React from 'react';
import './AboutUs.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Discover our journey, values, and what makes us unique.</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for great food and exceptional service, our food business started as a small family-owned eatery. Over the years, we have grown into a community favorite, known for our fresh ingredients, unique recipes, and warm hospitality. Every dish we serve is crafted with care, ensuring our customers leave with a smile.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bring people together through food. We aim to create memorable dining experiences by offering high-quality meals that satisfy the taste buds and nourish the soul. We believe in sustainability, locally sourced ingredients, and supporting our community.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Chef John"
              className="team-photo"
            />
            <h3>Chef John</h3>
            <p>Head Chef & Culinary Artist</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Doe"
              className="team-photo"
            />
            <h3>Jane Doe</h3>
            <p>Restaurant Manager</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Mark Lee"
              className="team-photo"
            />
            <h3>Mark Lee</h3>
            <p>Pastry Chef</p>
          </div>
        </div>
      </section>

      <section className="about-highlight">
        <h2>What Makes Us Unique</h2>
        <p>
          Our secret ingredient? Love! We pride ourselves on offering a wide variety of dishes that cater to every palate, from hearty meals to delightful desserts. Whether you're dining in or ordering online, we guarantee a delightful experience every time.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
