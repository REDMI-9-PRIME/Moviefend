import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoriteSlice";
import "./Favorites.css";

function Favorites() {
  const favorites = useSelector(
    state => state.favorites
  );

  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <h1>My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map(movie => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <p>
                <strong>Director:</strong>{" "}
                {movie.director}
              </p>

              <p>
                <strong>Genre:</strong>{" "}
                {movie.genre}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {movie.year}
              </p>

              <button
                onClick={() =>
                  dispatch(removeFavorite(movie.id))
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;