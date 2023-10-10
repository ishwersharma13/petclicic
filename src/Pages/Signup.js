import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../component/context/AuthContext";
import "./signup.css"; // Import the CSS file

function Signup() {
  const [toggle, setToggle] = useState(false);
  const userEmail = useRef();
  const userPass = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { createUser } = UseAuth();

  function handleToggle() {
    setToggle(!toggle);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await createUser(userEmail.current.value, userPass.current.value)
        .then((res) => {
          toast.success("loggedIn Successfully");
          localStorage.setItem("user", res.user.email);
          navigate("/dashboard");
        })
        .catch((err) => {
          const code = err.code;
          toast.error(code);
          console.log(err.code);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="signup-container">
      <div className="signup-background">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="signup-wave"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h3 className="signup-heading">
          create an account
        </h3>

        <div className="signup-input">
          <label htmlFor="UserName" className="signup-label">
            UserName
          </label>
          <input
            ref={userEmail}
            type="email"
            className="signup-text-input"
            placeholder="enter Email"
          />
        </div>
        <div className="signup-input">
          <label htmlFor="Password" className="signup-label">
            Password
          </label>
          <div className="signup-password-input">
            <input
              ref={userPass}
              type={toggle ? "text" : "password"}
              className="signup-text-input"
              placeholder="enter Password"
            />
            <div className="signup-password-toggle" onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="signup-toggle-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="signup-button"
        >
          {loading ? "creating" : "create"}
        </button>
      </form>
      <p className="signup-login-text">
        <span className="signup-login-info">Already have an account?</span>
        &nbsp;&nbsp;
        <Link to="/" className="signup-login-link">
          login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
