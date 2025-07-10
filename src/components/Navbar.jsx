import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ cartItems }) {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-logo">🍕 FoodMuse</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li>
          <Link to="/cart">
            Cart 🛒
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </Link>
        </li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;