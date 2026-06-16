import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const response = await api.get(`/movies/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title} ({movie.year})</h1>
      <p><strong>Plot:</strong> {movie.description}</p>
      
      <h3>Director</h3>
      <p>{movie.director}</p>

      <h3>Genre</h3>
      <p>{movie.genre}</p>

      <h3>Duration</h3>
      <p>{movie.duration}</p>

      <h3>Rating</h3>
      <p>⭐ {movie.rating}</p>

      <h3>Cast</h3>
      <ul>
        {movie.cast.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;