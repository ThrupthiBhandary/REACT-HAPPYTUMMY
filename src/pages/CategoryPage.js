const foodData = {
    Starters: [
      { id: 1, name: 'Mini Chocolate Cake', description: 'Perfect for small bites and celebrations!', price: 150, image: 'https://...' },
      { id: 2, name: 'Cheese Cake Bites', description: 'Delicious cheesy starter bites!', price: 200, image: 'https://...' },
      // Add more items as needed
    ],
    MainCourse: [
      { id: 3, name: 'Rich Fruit Cake', description: 'A delightful fresh fruit cake!', price: 1200, image: 'https://...' },
      { id: 4, name: 'Dark Chocolate Cake', description: 'Perfect for rich chocolate lovers!', price: 1500, image: 'https://...' },
      // Add more items as needed
    ],
    Desserts: [
      { id: 5, name: 'Tiramisu', description: 'A classic Italian dessert!', price: 800, image: 'https://...' },
      { id: 6, name: 'Brownie Delight', description: 'Rich and gooey chocolate brownies.', price: 500, image: 'https://...' },
      // Add more items as needed
    ],
    OtherVarieties: [
      { id: 7, name: 'Customized Cupcakes', description: 'Made to order with your favorite toppings!', price: 1000, image: 'https://...' },
      { id: 8, name: 'Eggless Cakes', description: 'Perfect for vegetarians!', price: 900, image: 'https://...' },
      // Add more items as needed
    ]
  };
  function CategoryPage({ addToCart }) {
    const { category } = useParams();
    const formattedCategory = category ? category.replace(/([A-Z])/g, ' $1').trim() : 'Category';
    const foods = foodData[category] || [];
    const navigate = useNavigate();
  
    const handleAddToCart = (food) => {
      addToCart(food);
      navigate('/cart');
    };
  
    return (
      <main className="category-page">
        <h2>{formattedCategory}</h2>
        {foods.length > 0 ? (
          <div className="foods-list">
            {foods.map((food) => (
              <div key={food.id} className="food-card">
                <img src={food.image} alt={food.name} className="food-image" />
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p className="price">₹{food.price}</p>
                <button onClick={() => handleAddToCart(food)} className="add-to-cart">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-foods">No items available in this category.</p>
        )}
      </main>
    );
  }
  export default CategoryPage;