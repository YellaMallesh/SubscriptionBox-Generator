import React from 'react';
import { ShoppingCart } from 'lucide-react'; 
import './Navbar.css';

function Navbar() {
  
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">Subscribe Box</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#categories">Categories</a>
          </li>
          <li className="navbar-item">
            <a href="#build-your-box">Make Your Box</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About Us</a>
          </li>
         
          <li className="navbar-item navbar-cart">
            <a href="#Cart"> 
              <ShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;