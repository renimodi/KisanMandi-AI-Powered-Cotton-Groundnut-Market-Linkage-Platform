import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          🌾 KisanMandi AI
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
