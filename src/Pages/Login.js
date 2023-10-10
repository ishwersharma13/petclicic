import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../component/context/AuthContext";
import "./logic.css"; // Import the CSS file

function Login() {
  const [toggle, setToggle] = useState(false);
  const userEmail = useRef();
  const userPass = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signIn } = UseAuth();

  function handleToggle() {
    setToggle(!toggle);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userEmail.current.value || !userPass.current.value) return;
    try {
      setLoading(true);
      await signIn(userEmail.current.value, userPass.current.value)
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
    <div className="login-container">
      <div className="login-background">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="login-wave"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-heading">
          Login
        </h3>
        <div className="mt-10">
          <label htmlFor="UserName" className="login-label">
            UserName
          </label>
          <input
            ref={userEmail}
            type="email"
            className="login-text-input"
            placeholder="Email"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="Password" className="login-label">
            Password
          </label>
          <div className="login-password-input">
            <input
              ref={userPass}
              type={toggle ? "text" : "password"}
              className="login-text-input"
              placeholder="Password"
            />
            <div className="login-password-toggle" onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="login-toggle-icon"
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
        <p className="mt-2 login-forgot-password">
          <span className="login-info">Forgot password?</span>
        </p>
        <button
          disabled={loading}
          className="login-button"
        >
          {loading ? "Logging in" : "Login"}
        </button>
      </form>
      <p className="mt-2 login-need-account">
        <span className="login-info">Need an account?</span>
        &nbsp;&nbsp;
        <Link
          to="/signup"
          className="login-create-account-link"
        >
          Create
        </Link>
      </p>
    </div>
  );
}

export default Login;
