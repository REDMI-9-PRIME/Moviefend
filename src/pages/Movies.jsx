import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await api.get("/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovie(id) {
    try {
      await api.delete(`/movies/${id}`);

      setMovies(
        movies.filter(
          (movie) => movie.id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" ||
      movie.genre
       .toLowerCase()
       .includes(genre.toLowerCase());

    const matchesYear =
      year === "All" ||
      String(movie.year) === year;

    return (
      matchesSearch &&
      matchesGenre &&
      matchesYear
    );
  });

  return (
    <>
      <h1 className="movies-title">
        Popular Movies
      </h1>

      <div className="add-movie-container">
        <Link to="/add-movie">
          <button className="add-movie-btn">
            + Add Movie
          </button>
        </Link>
      </div>

      <div className="filters-container">
        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />

        <select
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  className="filter-select"
>
  <option value="All">All Genres</option>

  {[...new Set(
    movies.flatMap((movie) =>
      movie.genre
        .split(/[\/,]/)
        .map((g) => g.trim())
    )
  )]
    .sort()
    .map((genreItem) => (
      <option
        key={genreItem}
        value={genreItem}
      >
        {genreItem}
      </option>
    ))}
</select>

        <select
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
          className="filter-select"
        >
          <option value="All">
            All Years
          </option>

          {[...new Set(
            movies.map((movie) =>
              String(movie.year)
            )
          )]
            .sort((a, b) => b - a)
            .map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={deleteMovie}
            />
          ))
        ) : (
          <h2 className="no-results">
            No movies found
          </h2>
        )}
      </div>
    </>
  );
}

export default Movies;