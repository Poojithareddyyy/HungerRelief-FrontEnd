import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';
import logo from '../assets/logo.jpg';
import aboutBg from '../assets/about-bg.jpg'; // background image for sec1
import whoWeAreImg from '../assets/who-we-are.jpg';
import visionImg from '../assets/vision.jpg';
import goalImg from '../assets/goal.jpg';
import missionImg from '../assets/mission.jpg';
import focusImg from '../assets/focus.jpg';
import humanityImg from '../assets/humanity.jpg';
import neutralityImg from '../assets/neutrality.jpg';
import planImg from '../assets/plan.jpg';
import fundImg from '../assets/fund.jpg';
import implementImg from '../assets/implement.jpg';

const About = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="about-page">
        {/* Sidebar Toggle Button */}
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
      <header className="about-header">
        <div className="logo" onClick={() => navigate("/")}>
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

      {/* Section 1: Background with Title */}
      <section className="about-banner" style={{ backgroundImage: `url(${aboutBg})` }}>
        <h1>About Us</h1>
      </section>

      {/* Section 2: Who We Are */}
      <section className="who-we-are">
        <div className="text">
          <h2>Who Are We?</h2>
          <p>We are a committed community-driven platform focused on eliminating food waste and hunger. Our mission is to connect donors, restaurants, and NGOs to ensure surplus food reaches those in need in a fast and transparent way.</p>
        </div>
        <div className="image">
          <img src={whoWeAreImg} alt="Who We Are" />
        </div>
      </section>

      {/* Section 3: Vision, Goal, Mission */}
      <section className="info-cards">
        <div className="card">
          <img src={visionImg} alt="Vision" />
          <h3>Vision</h3>
          <p>A world where no one sleeps hungry and surplus food is used to nourish lives.</p>
        </div>
        <div className="card">
          <img src={goalImg} alt="Our Goal" />
          <h3>Our Goal</h3>
          <p>To build a sustainable and scalable network that connects food providers with those in need.</p>
        </div>
        <div className="card">
          <img src={missionImg} alt="Mission" />
          <h3>Mission</h3>
          <p>To empower communities, minimize food waste, and provide nourishment to every hungry soul.</p>
        </div>
      </section>

      {/* Section 4: Guiding Principles */}
      <section className="info-cards">
        <div className="card">
          <img src={focusImg} alt="Focus" />
          <h3>Focus</h3>
          <p>We prioritize impact, efficiency, and transparency in everything we do.</p>
        </div>
        <div className="card">
          <img src={humanityImg} alt="Humanity" />
          <h3>Humanity</h3>
          <p>Driven by empathy and compassion, we believe food is a basic right.</p>
        </div>
        <div className="card">
          <img src={neutralityImg} alt="Neutrality" />
          <h3>Neutrality</h3>
          <p>We serve everyone equally, irrespective of caste, creed, or background.</p>
        </div>
      </section>

      {/* Section 5: Carousel */}
      <section className="carousel-section">
        <h2>What Do We Do?</h2>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={planImg} alt="We Plan" />
            <h3>We Plan</h3>
            <p>We identify surplus food sources and prepare logistics for timely delivery.</p>
          </div>
          <div className="carousel-slide">
            <img src={fundImg} alt="Raise Funds" />
            <h3>Raise Funds</h3>
            <p>We work with donors and partners to gather the support needed to power our efforts.</p>
          </div>
          <div className="carousel-slide">
            <img src={implementImg} alt="Implement" />
            <h3>Implement</h3>
            <p>We execute the donation through a streamlined platform with real-time tracking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Contact us: <a href="mailto:support@hungerrelief.org">support@hungerrelief.org</a> | Follow us on <strong>@HungerRelief</strong></p>
        <p>© 2024 Hunger Relief. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
