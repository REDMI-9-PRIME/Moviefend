import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;