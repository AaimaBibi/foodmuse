import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>🍕 FoodMuse</h3>
        <p>Crafted with code & cravings by Faiza. All rights reserved © {new Date().getFullYear()}</p>

      </div>
    </footer>
  );
}

export default Footer;
