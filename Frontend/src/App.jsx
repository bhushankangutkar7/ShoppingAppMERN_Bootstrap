import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Cart from "./Components/Cart.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import ExpandContext from "./Context/ExpandContext.jsx";
import Orders from "./Components/Orders.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Need to be confirm with JWT Token after password verification with Bcrypt
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <>
      <ExpandContext.Provider
        value={{ isExpanded, isLoggedIn, toggleExpanded }}
      >
        <Router>
          <NavBar />
          <section className="h-100vh ">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Orders />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
            </Routes>
          </section>
          <Footer />
        </Router>
      </ExpandContext.Provider>
    </>
  );
}

export default App;
