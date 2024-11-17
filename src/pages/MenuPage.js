import React, { useState } from 'react';
import menuData from '../data/menuData';
import '../styles/menu.css';

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDietary, setSelectedDietary] = useState('All');

  const categories = ['All', 'Starters', 'Main Course', 'Desserts'];
  const dietaryOptions = ['All', 'Vegetarian', 'Gluten-Free', 'Vegan', 'High-Protein'];

  const filteredMenuItems = menuData.filter(item => {
    return (
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      (selectedDietary === 'All' || item.dietary === selectedDietary)
    );
  });

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      {/* Filter Options */}
      <div className="filters">
        <label>Category:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>

        <label>Dietary Needs:</label>
        <select onChange={(e) => setSelectedDietary(e.target.value)} value={selectedDietary}>
          {dietaryOptions.map(diet => <option key={diet} value={diet}>{diet}</option>)}
        </select>
      </div>

      {/* Display Menu Items */}
      <div className="menu-items">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
            <button className="customize-button">Customize Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
