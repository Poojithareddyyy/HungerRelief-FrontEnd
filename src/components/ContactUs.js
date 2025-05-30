import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ContactUs.css";
import logo from "../assets/logo.jpg";

const ContactUs = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="contact-page">
      {/* Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Menu */}
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

      {/* Navbar */}
      <header className="dashboard-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
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

      {/* Section 1: Heading */}
      <section className="contact-heading">
        <h1>Contact Us</h1>
      </section>

      {/* Section 2: Help Info */}
      <section className="help-section">
        <h2>How Can We Help You?</h2>
        <p>We’re here to assist you in any way possible. Whether you have questions, concerns, or ideas to share—reach out!</p>
      </section>

      {/* Section 3: Have any Questions */}
      <section className="questions-section">
        <h2>Have Any Questions?</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Question" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Section 4: Feedback */}
      <section className="feedback-section">
        <h2>Any Feedback?</h2>
        <form className="feedback-form">
          <textarea placeholder="We'd love to hear your feedback!" required />
          <button type="submit">Send Feedback</button>
        </form>
      </section>

      {/* Section 5: Contact Details */}
      <section className="details-section">
        <h2>Reach Out to Us</h2>
        <p><strong>Email:</strong> support@hungerrelief.org</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 12/3A, Hope Lane, Hyderabad, Telangana, 500001</p>
        <p><strong>Charity Number:</strong> HR12345678</p>
      </section>

      {/* Footer */}
      <footer>
        <p>Contact us: <a href="mailto:support@hungerrelief.org">support@hungerrelief.org</a> | Follow us on social: <strong>@HungerRelief</strong></p>
        <p>© 2024 Hunger Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
