// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (email === "user@example.com" && password === "hello") {
        console.log("Login successful"); 
      localStorage.setItem("loggedIn", true);
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button><br /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
