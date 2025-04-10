import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

function ItemList({ category, jsonDataUrl }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(jsonDataUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);

        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, [jsonDataUrl]);

  if (loading) {
    return <div>Loading {category} items...</div>;
  }

  if (error) {
    return <div>Error loading {category} items: {error.message}</div>;
  }

  return (
    <div className={`item-list-${category.toLowerCase()}`}>
      <h2>{category}</h2>
      <div className="items-container">
        {items.map(item => (
          <ItemCard key={item.productId} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;