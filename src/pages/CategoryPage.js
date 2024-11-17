import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CategoryPage.css';

const foodData = {
  categories: [
    { name: 'Starters', image: 'https://via.placeholder.com/150/FF5733' },
    { name: 'MainCourse', image: 'https://via.placeholder.com/150/33FF57' },
    { name: 'Desserts', image: 'https://via.placeholder.com/150/5733FF' },
    { name: 'OtherVarieties', image: 'https://via.placeholder.com/150/FF33FF' },
    { name: 'Snacks', image: 'https://via.placeholder.com/150/33FFFF' },
    { name: 'Beverages', image: 'https://via.placeholder.com/150/FFFF33' },
    { name: 'Breakfast', image: 'https://via.placeholder.com/150/FF3333' },
  ],
  Starters: [
    { id: 1, name: 'Mini Chocolate Cake', description: 'Perfect for small bites and celebrations!', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Cheese Cake Bites', description: 'Delicious cheesy starter bites!', price: 200, image: 'https://via.placeholder.com/150' },
  ],
  MainCourse: [
    { id: 3, name: 'Rich Fruit Cake', description: 'A delightful fresh fruit cake!', price: 1200, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Dark Chocolate Cake', description: 'Perfect for rich chocolate lovers!', price: 1500, image: 'https://via.placeholder.com/150' },
  ],
};

function CategoryPage({ addToCart }) {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || null);
  const [notification, setNotification] = useState('');

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleAddToCart = (food) => {
    console.log('Adding to cart:', food); // Debugging log to ensure function is called
    addToCart(food);
    setNotification(`${food.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000); // Hide the notification after 3 seconds
  };

  const mainCategories = foodData.categories;
  const foods = foodData[selectedCategory] || [];

  return (
    <main className="category-page">
      {notification && <div className="cart-notification">{notification}</div>}

      {!selectedCategory ? (
        <div className="categories-container">
          {mainCategories.map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <img src={cat.image} alt={cat.name} className="category-image" />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="foods-list">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div key={food.id} className="food-card">
                <img src={food.image} alt={food.name} className="food-image" />
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p className="price">₹{food.price}</p>
                <button onClick={() => handleAddToCart(food)} className="add-to-cart">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="no-foods">No items available in this category.</p>
          )}
          <button className="back-button" onClick={() => setSelectedCategory(null)}>
            Back to Categories
          </button>
        </div>
      )}
    </main>
  );
}

export default CategoryPage;
