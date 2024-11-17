import React, { useState } from 'react';
import '../styles/orderCustomization.css';

function OrderCustomizationPage({ item }) {
  const [size, setSize] = useState('Regular');
  const [addOns, setAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const availableAddOns = ['Cheese', 'Extra Sauce', 'Spicy'];

  const handleAddOnChange = (addOn) => {
    setAddOns(prevAddOns =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter(a => a !== addOn)
        : [...prevAddOns, addOn]
    );
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${size} ${item.name} with ${addOns.join(', ')} to cart.`);
  };

  return (
    <div className="order-customization">
      <h1>Customize {item.name}</h1>
      <p>{item.description}</p>

      <label>Size:</label>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="Regular">Regular</option>
        <option value="Large">Large</option>
      </select>

      <label>Add-ons:</label>
      <div className="add-ons">
        {availableAddOns.map(addOn => (
          <label key={addOn}>
            <input
              type="checkbox"
              checked={addOns.includes(addOn)}
              onChange={() => handleAddOnChange(addOn)}
            />
            {addOn}
          </label>
        ))}
      </div>

      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default OrderCustomizationPage;
