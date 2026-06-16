import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./AddMovies.css";

function AddMovies() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    image: "",
    genre: "",
    year: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/movies", formData);

    navigate("/movies");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="director"
          placeholder="Director Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />

        <input
          type="text"
          name="year"
          placeholder="Release Year"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Movie Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovies;