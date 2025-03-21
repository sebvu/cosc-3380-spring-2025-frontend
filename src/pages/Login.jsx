import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bag-full-logo.svg";
import Validation from "../components/LoginValidation";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault;
    setErrors(Validation(email, password));
  };

  return (
    <div className="center-container">
      <div className="p-6 bg-mantle text-text rounded-xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-64 h-64" />
        </div>
        <h1 className="text-lg font-bold mb-4 text-subtext1">Please sign in</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-subtext0">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border p-2 w-full rounded bg-surface2 text-text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-subtext0">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border p-2 w-full rounded bg-surface2 text-text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6 text-center">
            <button className="bg-maroon text-base py-2 px-4 rounded hover:bg-peach">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-subtext0">Don't have an account?</p>
          <button
            className="bg-green text-base py-2 px-4 rounded hover:bg-teal"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
