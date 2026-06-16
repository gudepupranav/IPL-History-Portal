import { Link } from "react-router-dom";

function TeamCard({ team }) {

  return (
    <div
      className="team-card"
      style={{
        borderTop: `8px solid ${team.color}`
      }}
    >

      <img
        src={team.logo}
        alt={team.name}
        className="team-logo"
      />

      <h2>{team.name}</h2>

      <p>
        Captain: {team.captain}
      </p>

      <p>
        Titles: {team.titles}
      </p>

      <Link to={`/team/${team.id}`}>
        <button>
          View Team
        </button>
      </Link>

    </div>
  );
}

export default TeamCard;