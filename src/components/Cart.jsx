import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  if (state.items.length === 0) {
    return (
      <div  id ="Cart" className="cart-empty">
        <ShoppingBag size={48} />
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      {state.items.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p className="cart-item-type">{item.type}</p>
            <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
          </div>
          
          <div className="cart-item-actions">
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                <Minus size={16} />
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button 
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
              className="remove-btn"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ))}
      
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>₹{state.total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;