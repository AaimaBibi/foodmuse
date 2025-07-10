import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ clearCart }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cash",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart(); // 🧼 Auto-clear cart after confirmation
  };

  return (
    <section className="checkout-page">
      {submitted ? (
        <div className="thank-you">
          <h2>🎉 Thank You, {form.name}!</h2>
          <p>
            Your Order Has Been Confirmed. Delivery time:{" "}
            <strong>30–40 minutes</strong> 🚚
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Delivery Address:
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Payment Method:
            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </label>

          <button type="submit">Confirm Order</button>
        </form>
      )}
    </section>
  );
}

export default Checkout;
