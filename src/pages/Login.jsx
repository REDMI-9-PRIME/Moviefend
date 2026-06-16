import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get("/users", {
        params: {
          email: email.trim(),
        },
      });

      const user = response.data[0];

      if (user && user.password === password.trim()) {
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Successful");
        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="login-page">
      
      {/* Left Side Form */}
      <div className="login-card">
        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="movie-image">
        <img
          src="https://wallpaperaccess.com/full/140057.jpg"
          alt="Movie Poster"
        />
      </div>

    </div>
  );
}

export default Login;