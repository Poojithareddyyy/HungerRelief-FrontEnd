import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import backgroundImage from "../assets/background.jpg"; // Ensure this exists

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* App Name & Tagline */}
      <div className="header">
        <h1>Hunger Relief</h1>
        <p className="tagline">Turning Excess Into Access</p>
      </div>

      {/* Authentication Section */}
      <div className="auth-box">
        <h2>Join Us</h2>
        <p>Sign up to donate or receive food</p>
        <div className="buttons">
          <button className="btn signup" onClick={() => navigate("/signup")}>Sign Up</button>
          <button className="btn login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
