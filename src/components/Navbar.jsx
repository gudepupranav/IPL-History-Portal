import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>

      <div className="logo">
        IPL PORTAL
      </div>

      <div>

        <Link to="/">Home</Link>

        <Link to="/teams">Teams</Link>

        <Link to="/seasons">Seasons</Link>

        <Link to="/stats">Stats</Link>

        <Link to="/dashboard">Dashboard</Link>

      </div>

    </nav>
  );
}

export default Navbar;