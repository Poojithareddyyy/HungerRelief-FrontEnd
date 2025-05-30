import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import logo from "../assets/logo.jpg";
import profilePic from "../assets/profile.jpeg"; // Add a placeholder profile picture

const Profile = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="profile-page">
      {/* Menu Toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      {/* Sidebar */}
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

      {/* Header */}
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

      {/* Profile Section */}
      <section className="profile-container">
        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="profile-info">
          <p>Name :John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Address:Hmt,Swarnapuri</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </section>

      {/* Donation Count */}
      <div className="donation-count">
        <h3>Number of Donations</h3>
        <div className="donation-box">12</div>
      </div>

      {/* Footer */}
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

export default Profile;
