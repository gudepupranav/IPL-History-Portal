import { useState } from "react";
import teams from "../data/teams";
import TeamCard from "../components/TeamCard";

function Teams() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  );

  return (
    <div className="container">

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        IPL Teams
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px"
        }}
      >
        <input
          type="text"
          placeholder="Search Team..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          style={{
            width: "350px"
          }}
        />
      </div>

      <div className="team-grid">

        {filteredTeams.length > 0 ? (

          filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
            />
          ))

        ) : (

          <h2
            style={{
              textAlign: "center",
              width: "100%"
            }}
          >
            No Team Found
          </h2>

        )}

      </div>

    </div>
  );
}

export default Teams;