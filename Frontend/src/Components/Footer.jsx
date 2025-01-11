import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="d-flex justify-content-around w-full bg-dark text-white b-0 p-4">
          <div>
            <span className="bg-light logo"> hi</span>
          </div>

          <div>
            <h5>Know More About Us</h5>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <NavLink className="footerNavLink">About Us</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Mission</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Vision</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h5>Connect Us</h5>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <NavLink className="footerNavLink">X</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Instagram</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Facebook</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h5>Know More</h5>
            <ul style={{ listStyleType: "none" }}>
              <li style={{ textDecoration: "none" }}>
                <NavLink className="footerNavLink">About-us</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Mission</NavLink>
              </li>
              <li>
                <NavLink className="footerNavLink">Vision</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
