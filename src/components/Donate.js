import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Donate.css";
import logo from "../assets/logo.jpg";

const Donate = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([{ item: "", quantity: "" }]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addItem = () => {
    setItems([...items, { item: "", quantity: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  return (
    <div className="donate-page">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      {menuOpen && (
        <aside className="sidebar">
          <ul>
            <li><button onClick={() => navigate("/dashboard")}>Home</button></li>
            <li><button onClick={() => navigate("/profile")}>Profile</button></li>
            <li><button onClick={() => navigate("/history")}>History</button></li>
            <li><button onClick={() => navigate("/")}>Logout</button></li>
          </ul>
        </aside>
      )}

      <header className="dashboard-header">
        <div className="logo">
          <img src={logo} alt="Hunger Relief Logo" />
          <span className="logo-text">Hunger Relief</span>
        </div>

        <nav>
        <ul className="nav-links">
            <li><a href="/dashboard" className="nav-item">Home</a></li>
            <li><a href="/about" className="nav-item">About</a></li>
            <li><a href="/contact" className="nav-item">Contact Us</a></li>
            <li>
              <button className="donate-btn" onClick={() => navigate("/donate")}>
                Donate
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Donation Form */}
      <div className="donation-form">
        <h2>Donation Form</h2>
        <button className="add-item-btn" onClick={addItem}>+ Add Item</button>

        {items.map((entry, index) => (
          <div key={index} className="food-entry">
            <input
              type="text"
              placeholder="Food Item"
              value={entry.item}
              onChange={(e) => handleChange(index, "item", e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={entry.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
            />
          </div>
        ))}

        <input type="text" placeholder="Restaurant Name" className="input-field" />
        <textarea placeholder="Restaurant Address" className="input-field textarea" />
        <input type="text" placeholder="Contact Information" className="input-field" />

        <button className="submit-btn">Donate</button>
      </div>

      <footer>
        <p>
          Contact us:{" "}
          <a href="mailto:support@hungerrelief.org">support@hungerrelief.org</a> |
          Follow us on social: <strong>@HungerRelief</strong>
        </p>
        <p>© 2024 Hunger Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Donate;
