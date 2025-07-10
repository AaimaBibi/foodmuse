import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Delicious Bites. Delivered Right.</h1>
        <p>Fresh, hot, and cheesy—served with love from FoodMuse 🍟</p>
        <a href="/menu" className="hero-btn">Explore Menu</a>
      </div>
      <div className="hero-img">
        <img src="/images/hero-burger.jpg" alt="Burger Banner" />
      </div>
    </section>
  );
}

export default Home;
