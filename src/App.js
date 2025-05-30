import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Donate from "./components/Donate";
import Dashboard from "./components/Dashboard";
import About from "./components/About"; // Import Dashboard
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import History from "./components/History";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </Router>
  );
}

export default App;
