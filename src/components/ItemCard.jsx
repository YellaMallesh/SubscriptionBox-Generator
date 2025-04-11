import React from 'react';
import './ItemCard.css';
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

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="brand">{item.brand}</p>
      <p className="price">Price: ₹{item.price}</p>
      <p className="category">Category: {item.category}</p>
      {item.tags && item.tags.length > 0 && (
        <p className="tags">Tags: {item.tags.join(', ')}</p>
      )}
      <p className="description">{item.description}</p>
      <button onClick={() => handleSelectBox(option)}>Add to Box</button>
    </div>
  );
}

export default ItemCard;