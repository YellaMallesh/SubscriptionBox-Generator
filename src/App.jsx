import React, { useState } from 'react';
import { Package, Gift, ShoppingCart, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';


function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [boxSize, setBoxSize] = useState('medium');
  const { dispatch } = useCart();

  const categories = {
    beauty: { icon: Sparkles, color: 'beauty', dataUrl: '/data/skincare.json' },
    food: { icon: Package, color: 'food', dataUrl: '/data/food.json' },
    fitness: { icon: Heart, color: 'fitness', dataUrl: '/data/fitness.json' },
    books: { icon: Gift, color: 'books', dataUrl: '/data/books.json' },
  };

  const boxOptions = {
    beauty: [
      { id: 'b1', name: 'Skincare Essentials', price: 499, description: 'Monthly selection of premium skincare products' },
      { id: 'b2', name: 'Makeup Box', price: 999, description: 'Curated makeup products from top brands' },
    ],
    food: [
      { id: 'f1', name: 'Gourmet Snacks', price: 399, description: 'Artisanal snacks from around the world' },
      { id: 'f2', name: 'Coffee Lovers', price: 299, description: 'Premium coffee beans and treats' },
    ],
    fitness: [
      { id: 'ft1', name: 'Workout Essentials', price: 449, description: 'Monthly fitness gear and supplements' },
      { id: 'ft2', name: 'Recovery Box', price: 399, description: 'Products focused on post-workout recovery' },
    ],
    books: [
      { id: 'bk1', name: 'Fiction Favorites', price: 299, description: 'Bestselling fiction books monthly' },
      { id: 'bk2', name: 'Non-Fiction Bundle', price: 399, description: 'Thought-provoking non-fiction selections' },
    ],
  };

  const handleSelectBox = (box) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: box.id,
        name: box.name,
        price: box.price,
        type: 'box'
      }
    });
  };

  return (
    <div>
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            Create Your Perfect
            <span> Subscription Box</span>
          </h1>
          <p>
            Personalize your monthly box with items you'll love. Choose from our curated selection of products across multiple categories.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div id="categories" className="container">

        {/* Category Selection */}
        <div className="category-grid">
          {Object.entries(categories).map(([category, { icon: Icon, color }]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-card ${color} ${selectedCategory === category ? 'selected' : ''}`}
            >
              <Icon />
              <p>{category}</p>
            </button>
          ))}
        </div>

       

        {/* Recommended Boxes */}
        <section id="build-your-box" className="box-options">
          <h2>Recommended Boxes</h2>
          <div className="options-grid">
            {boxOptions[selectedCategory]?.map((option) => (
              <div key={option.id} className="option-card">
                <h3>{option.name}</h3>
                <p>{option.description}</p>
                <div className="price-row">
                  <span className="price">{option.price}₹</span>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleSelectBox(option)}
                  >
                    Select
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
            {!boxOptions[selectedCategory] && <p>No pre-defined boxes available for {selectedCategory}.</p>}
          </div>
        </section>


             {/* Box Size Selection */}
        <section className="box-size">
          <h2>Choose Your Box Size</h2>
          <div className="size-grid">
            {['small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => setBoxSize(size)}
                className={`size-card ${boxSize === size ? 'selected' : ''}`}
              >
                <p>{size}</p>
                <p>
                  {size === 'small' ? '3-4 items' : size === 'medium' ? '5-6 items' : '7-8 items'}
                </p>
              </button>
            ))}
          </div>
        </section>


        {/* Individual Item Listing */}
        <section className="individual-items">
          <h2>Explore Individual Items</h2>
          {categories[selectedCategory]?.dataUrl && (
            <ItemList
              category={selectedCategory}
              jsonDataUrl={categories[selectedCategory].dataUrl}
            />
          )}
          {!categories[selectedCategory]?.dataUrl && (
            <p>No individual items available for {selectedCategory}.</p>
          )}
        </section>

        {/* Cart Section */}
        <section id="cart" className="cart-section">
          <h2>Your Cart</h2>
          <Cart />
        </section>
      </div>

      <AboutUs />

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of happy subscribers today!</p>
          <button className="btn btn-white">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;