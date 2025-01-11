import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const SignUp = () => {
  const [visibility, setVisibilty] = useState("false");
  const togglePassword = () => {
    setVisibilty(!visibility);
  };

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center rounded-4 loginContainer"
        style={{ minWidth: "400px", maxWidth: "500px" }}
      >
        <h4 className="align-self-center mt-4">Sign Up</h4>
        <form className="m-3">
          <div className="mb-3">
            <label htmlFor="fName" className="form-label ms-2">
              First Name
            </label>

            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                name="fName"
                className="border p-1 rounded-start input"
                id="fName"
                aria-describedby="fNameHelp"
              />
              <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                id_card
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label ms-2">
              Last Name
            </label>

            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                name="lastName"
                className="border p-1 rounded-start input"
                id="lastName"
                aria-describedby="lastNameHelp"
              />
              <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                id_card
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label ms-2">
              Email Address
            </label>

            <div className="d-flex justify-content-center align-items-center">
              <input
                type="email"
                name="email"
                className="border p-1 rounded-start input"
                id="email"
                aria-describedby="emailHelp"
              />
              <span className="material-symbols-outlined z-index-20 p-1 border rounded-end icon">
                mail
              </span>
            </div>

            <div id="emailtext" className="form-text ms-3 fst-italic">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label ms-2">
              Password
            </label>

            <div className="d-flex justify-content-center align-items-center">
              <input
                type={visibility ? "password" : "text"}
                name="password"
                className="border p-1 rounded-start input"
                id="exampleInputPassword1"
              />
              {visibility ? (
                <span
                  className="material-symbols-outlined z-index-20 p-1 border rounded-end icon eIcon"
                  onClick={togglePassword}
                >
                  visibility_off
                </span>
              ) : (
                <span
                  className="material-symbols-outlined z-index-20 p-1 border rounded-end icon eIcon"
                  onClick={togglePassword}
                >
                  visibility
                </span>
              )}
            </div>
          </div>

          <div className="mb-3 ms-1 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Keep me Logged In
            </label>
          </div>

          <div className="d-flex flex-row justify-content-center m-1">
            <button
              type="submit"
              className="btn btn-warning d-inline-block align-self-center mb-2 logInBtn"
            >
              Sign Up
            </button>
          </div>

          <Link to="/login">
            <p className="mb-3 ms-1">Already an User? Log In</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
