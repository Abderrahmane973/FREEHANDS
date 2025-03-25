import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login successful!"); 
    navigate("/"); // Redirige vers l'accueil après connexion
  };

  return (
    
    <div className=" page-wrapper  bg-opacity-75 p-t-130 p-b-100 font-poppins d-flex justify-content-center align-items-center vh-100">
      <div className="login-box shadow p-4 rounded bg-white">
        <h4 className="h5 text-center">Log In</h4>
        <input
          type="text"
          placeholder="Username/Email"
          className="form-control my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center mt-2">
          <a href="#!" onClick={() => alert("Sending a code to your mail to change your password.")}>
            Forget Password?
          </a>
        </p>
      </div>
    </div>
    
  );
}

export default Login;