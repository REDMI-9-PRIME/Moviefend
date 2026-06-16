import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";


function MovieCard({ movie, onDelete }) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(movie));
  }

  return (
    <div className="card">
      <img
        src={movie.image}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p>Director: {movie.director}</p>

      <p>Genre: {movie.genre}</p>

      <p>Year: {movie.year}</p>

      <div className="card-actions">
        <Link
          className="view-btn"
          to={`/movies/${movie.id}`}
        >
          View Details
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-movie/${movie.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(movie.id)}
        >
          Delete
        </button>
      </div>

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>
    </div>
  );
}

export default MovieCard;