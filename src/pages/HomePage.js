import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';


// Import images
import birthdayCakeImage from '../assets/BANNER1.jpg';
import anniversaryCakeImage from '../assets/BANNER1.jpg';
import celebrationCakeImage from '../assets/BANNER1.jpg';
import bannerImage from '../assets/BANNER1.jpg';

const foodCategories = [
  { id: 1, name: 'Birthday', description: 'Cakes for Birthday celebrations.', image: birthdayCakeImage },
  { id: 2, name: 'Anniversary', description: 'Special cakes for anniversaries.', image: anniversaryCakeImage },
  { id: 3, name: 'Celebration', description: 'Cakes for all celebrations!', image: celebrationCakeImage }
];

function HomePage() {
 
  return (
    <main className="home">
      {/* Banner Section */}
      <section className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1>Welcome to Sweet Slice!</h1>
          <p>Discover cakes for every occasion, freshly baked and delightful!</p>
         
        </div>
      </section>

      {/* Categories Section */}
      <h3 className="category-title">Categories</h3>
      <div className="categories">
        {foodCategories.map(category => (
          <Link key={category.id} to={`/category/${category.name}`} className="category-link">
            <div className="category-card">
              <img src={category.image} alt={`${category.name} Cakes`} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
