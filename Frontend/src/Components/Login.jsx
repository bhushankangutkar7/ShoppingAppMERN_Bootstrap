import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Login = () => {
  const [visibility, setVisibilty] = useState("false");
  const togglePassword = () => {
    setVisibilty(!visibility);
  };

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center bg-light mt-5 border border-grey rounded-4 login"
        style={{ minWidth: "400px", maxWidth: "500px" }}
      >
        <h4 className="align-self-center mt-4">Log In</h4>
        <form className="m-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label ms-2">
              Email address
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

          <div className="mb-3">
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
              Log In
            </button>
          </div>

          <Link to="/sign-up">
            <p className="mb-3 ms-1">Don't have an Account?</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
