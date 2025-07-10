import React, { useState } from "react";
import "./FoodCard.css";

function FoodCard({ name, image, price, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // Reset after 1 sec
  };

  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAdd}>
        {added ? "✔ Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default FoodCard;
