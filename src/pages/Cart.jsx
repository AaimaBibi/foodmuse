import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, onAdd, onRemove }) {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-actions">
                  <button onClick={() => onRemove(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            className="place-order-btn"
            onClick={() => navigate("/checkout")}
          >
            Place Order
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
