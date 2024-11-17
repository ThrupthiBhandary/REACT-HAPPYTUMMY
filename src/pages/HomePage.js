import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

// Import images
import bannerImage from '../assets/BANNER1.jpg';

function HomePage() {
  return (
    <main className="home">
      {/* Banner Section */}
      <section className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1>Welcome to Sweet Slice!</h1>
          <p>Discover cakes for every occasion, freshly baked and delightful!</p>
          {/* Button to Navigate to Categories */}
          <Link to="/categories">
            <button className="explore-categories-btn">Explore All Categories</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
