import React, { useState } from "react";
import "../styles/History.css";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  const donationHistory = [
    { date: "2025-04-18", items: "10 food packets", location: "Hyderabad", status: "Delivered" },
    { date: "2025-03-22", items: "5 meal boxes", location: "Secunderabad", status: "Delivered" },
  ];

  return (
    <div className="history-page">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      {menuOpen && (
        <aside className="sidebar">
          <ul>
            <li><button onClick={() => navigate("/dashboard")}>Home</button></li>
            <li><button onClick={() => navigate("/profile")}>Profile</button></li>
            <li><button onClick={() => navigate("/")}>Logout</button></li>
          </ul>
        </aside>
      )}

      <header className="dashboard-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">Hunger Relief</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><button className="donate-btn" onClick={() => navigate("/donate")}>Donate</button></li>
          </ul>
        </nav>
      </header>

      <section className="history-section">
        <h1>Donation History</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Items</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.items}</td>
                <td>{entry.location}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer>
        <p>© 2024 Hunger Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default History;
