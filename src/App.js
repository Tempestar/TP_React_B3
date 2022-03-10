import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Tournoi Civilization VI</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/règles">Règles</Link> |{" "}
        <Link to="/bracket">Bracket</Link>
      </nav>
    </div>
  );
}