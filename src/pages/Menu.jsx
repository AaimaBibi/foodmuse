import React, { useState } from "react";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";
import "./Menu.css";

function Menu({ addToCart }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(foodData.map(item => item.category))];
  const filteredItems = filter === "All"
    ? foodData
    : foodData.filter(item => item.category === filter);

  return (
    <section className="menu-page">
      <h2>🍽️ Our Menu</h2>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <FoodCard
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            onAdd={() => addToCart(item)}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
