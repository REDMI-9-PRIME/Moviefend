import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav>
      <h2>MovieHub</h2>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>

      {!user ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <Link to="/logout">Logout</Link>
      )}
      <Link to="/favorites">Favorites</Link>
      
    </nav>
  );
}

export default Navbar;