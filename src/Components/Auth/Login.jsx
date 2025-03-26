import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Your Email is :", email);
    console.log("Your Password is :", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="Form">
      <div className="Form-Content">
        <h2
          style={{ color: "#0fa541", marginBottom: "20px", fontSize: "24px" }}
        >
          Login
        </h2>
        <form onSubmit={handleForm}>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" className="Login-Btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
