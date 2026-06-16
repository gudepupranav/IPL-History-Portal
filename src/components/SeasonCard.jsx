import { Link } from "react-router-dom";

function SeasonCard({ season }) {

  return (
    <div className="card">

      <h2>
        IPL {season.year}
      </h2>

      <p>
        Winner:
        {season.winner}
      </p>

      <Link
        to={`/season/${season.year}`}
      >
        <button>
          View Details
        </button>
      </Link>

    </div>
  );
}

export default SeasonCard;