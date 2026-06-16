import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMovies() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    poster: "",
    genre: "",
    description: ""
  });

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const response = await api.get(`/movies/${id}`);
    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(
      `/movies/${id}`,
      formData
    );

    navigate("/movies");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />

        <input
          type="text"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Movie
        </button>

      </form>
    </div>
  );
}

export default EditMovies;