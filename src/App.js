// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// // import AboutPage from './pages/AboutPage';
// import MenuPage from './pages/MenuPage';
// // import ContactPage from './pages/ContactPage';
// import Cart from './components/Cart';
// // import FeedbackPage from './pages/FeedbackPage';  // Import FeedbackPage

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes> {/* Replaced Switch with Routes */}
//         <Route path="/" element={<HomePage />} />
//         {/* <Route path="/about" element={<AboutPage />} /> */}
//         <Route path="/menu" element={<MenuPage />} />
//         {/* <Route path="/contact" element={<ContactPage />} /> */}
//         <Route path="/cart" element={<Cart />} />
//         {/* <Route path="/feedback" element={<FeedbackPage />} /> Feedback route */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import CakeDetailsPage from './pages/CakeDetailsPage';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import Cart from './components/Cart';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/cake/:id" element={<CakeDetailsPage />} /> */}
        <Route
          path="/category/:category"
          element={<CategoryPage addToCart={addToCart} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
