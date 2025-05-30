import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import logo from "../assets/logo.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className="dashboard">
      {/* Sidebar Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Menu */}
      {menuOpen && (
        <aside className="sidebar">
          <ul>
            <li><button onClick={() => navigate("#")}>Home</button></li>
            <li><button onClick={() => navigate("/profile")}>Profile</button></li>
            <li><button onClick={() => navigate("/history")}>History</button></li>
            <li><button onClick={() => navigate("/")}>Logout</button></li>
          </ul>
        </aside>
      )}

      {/* Header/Navbar */}
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

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to <span className="highlight">Hunger Relief</span></h1>
        <p>Turning <strong>Excess</strong> into <strong>Access</strong> – Your contribution makes a difference.</p>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-box">
          <h3>1000+</h3>
          <p>Meals Donated</p>
        </div>
        <div className="info-box">
          <h3>500+</h3>
          <p>Active Volunteers</p>
        </div>
        <div className="info-box">
          <h3>150+</h3>
          <p>Partner Restaurants</p>
        </div>
      </section>

      {/* NGO Invitation Section */}
      <section className="ngo-invite">
        <h2>Join Us in the Fight Against Hunger</h2>
        <p>
          We cordially invite your organization to join our food donation website,
          where you can make a significant impact in the fight against hunger
          by registering and contributing to our mission.
        </p>
        <button className="register-btn" onClick={() => navigate("/register-ngo")}>Register Your Organization</button>
      </section>

      {/* Image Carousel */}
      <section className="carousel">
        <div className="carousel-container">
          <img src={carousel1} alt="Food Donation 1" />
          <img src={carousel2} alt="Food Donation 2" />
          <img src={carousel3} alt="Food Donation 3" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Contact us: <a href="mailto:support@hungerrelief.org">support@hungerrelief.org</a> | Follow us on social: <strong>@HungerRelief</strong></p>
        <p>© 2024 Hunger Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
