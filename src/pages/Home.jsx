import "./Home.css";

function Home() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>🎬 Welcome to MovieHub</h1>

          <p>
            Discover thousands of movies, explore trending titles,
            save your favourites, and enjoy the world of entertainment
            all in one place.
          </p>

          <button className="explore-btn">
            Explore Movies
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            alt="Avengers: Endgame"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;