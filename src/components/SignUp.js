import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", user);
  };

  return (
    <div className="signup-page">
       <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
