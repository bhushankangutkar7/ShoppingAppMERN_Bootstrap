import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ExpandContext from "../Context/ExpandContext";

const NavBar = () => {
  const { toggleExpanded } = useContext(ExpandContext);
  const { isLoggedIn } = useContext(ExpandContext);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <NavLink className="navbar-brand" to="/">
              Shopping APP
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleExpanded}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                {/* Visible if login */}
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                        Cart
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/orders">
                        Orders
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {/* Visible if login */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact-us">
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              <div className="navbar-nav ms-auto">
                <span className="d-flex">
                  <form className="d-flex">
                    <input
                      className="form-control m-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ flex: 1 }}
                    />
                    <button
                      className="btn btn-outline-success m-2"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </span>
                <span className="d-flex">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="Login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="sign-up">
                        Sign Up
                      </NavLink>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
