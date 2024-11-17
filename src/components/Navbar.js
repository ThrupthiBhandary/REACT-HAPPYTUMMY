import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import './Navbar.css';


function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <header className="navbar">
      <h1>Happy Tummy</h1>
      <nav className="navbar-links">
      
       
         <a href="/">Home</a>
        
         <a href="/about">About Us</a>
         <a href="contact/">Contact Us</a>

        <a href="/cart">Cart</a>
       <button onClick={() => setShowSignUp(true)}>Sign Up</button>
     </nav>
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </header>
  );
 }

 export default Navbar;




// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <header className="navbar">
//       <h1>Sweet Slice</h1>
//       <nav className="navbar-links">
//         <a href="/">Home</a>
//         <a href="/categories">Categories</a>
//         <a href="/cart">Cart</a>
//         <button>Sign Up</button>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
