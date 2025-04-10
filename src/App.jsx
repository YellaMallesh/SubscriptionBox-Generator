import React, { useState } from 'react';
import { Package, Gift, ShoppingCart, Heart, Sparkles, ChevronRight } from 'lucide-react';
import ItemList from './components/ItemList'; // Correct import path

function App() {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [boxSize, setBoxSize] = useState('medium');

  const categories = {
    beauty: { icon: Sparkles, color: 'beauty', dataUrl: '/data/skincare.json' },
    food: { icon: Package, color: 'food', dataUrl: '/data/food.json' }, // Assuming you'll create food.json
    fitness: { icon: Heart, color: 'fitness', dataUrl: '/data/fitness.json' }, // Assuming you'll create fitness.json
    books: { icon: Gift, color: 'books', dataUrl: '/data/books.json' },
  };

  const boxOptions = {
    beauty: [
      { id: 'b1', name: 'Skincare Essentials', price: 39.99, description: 'Monthly selection of premium skincare products' },
      { id: 'b2', name: 'Makeup Box', price: 49.99, description: 'Curated makeup products from top brands' },
    ],
    food: [
      { id: 'f1', name: 'Gourmet Snacks', price: 34.99, description: 'Artisanal snacks from around the world' },
      { id: 'f2', name: 'Coffee Lovers', price: 29.99, description: 'Premium coffee beans and treats' },
    ],
    fitness: [
      { id: 'ft1', name: 'Workout Essentials', price: 44.99, description: 'Monthly fitness gear and supplements' },
      { id: 'ft2', name: 'Recovery Box', price: 39.99, description: 'Products focused on post-workout recovery' },
    ],
    books: [
      { id: 'bk1', name: 'Fiction Favorites', price: 29.99, description: 'Bestselling fiction books monthly' },
      { id: 'bk2', name: 'Non-Fiction Bundle', price: 34.99, description: 'Thought-provoking non-fiction selections' },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
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
      <div className="container">
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

        {/* Available Boxes (Pre-defined options) */}
        <section className="box-options">
          <h2>Available Boxes</h2>
          <div className="options-grid">
            {boxOptions[selectedCategory]?.map((option) => (
              <div key={option.id} className="option-card">
                <h3>{option.name}</h3>
                <p>{option.description}</p>
                <div className="price-row">
                  <span className="price">${option.price}</span>
                  <button className="btn btn-primary">
                    Select
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
            {/* Handle case where there are no options for the selected category */}
            {!boxOptions[selectedCategory] && <p>No pre-defined boxes available for {selectedCategory}.</p>}
          </div>
        </section>

        {/* Individual Item Listing (Using ItemList component) */}
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
      </div>

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

export default App;