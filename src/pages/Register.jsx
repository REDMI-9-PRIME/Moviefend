import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/users", user);

    navigate("/login");
  }

  return (
    <div className="register-container">

      {/* Left Side Form */}
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="auth-btn">
            Register
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="movie-image">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjMxMzc4NTEyN15BMl5BanBnXkFtZTgwNDgyMjA3MTE@._V1_.jpg"
          alt="Movies"
        />
      </div>

    </div>
  );
}

export default Register;