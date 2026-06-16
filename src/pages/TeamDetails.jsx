import { useParams } from "react-router-dom";
import teams from "../data/teams";

function TeamDetails() {

  const { id } = useParams();

  const team = teams.find(
    (t) => t.id === Number(id)
  );

  if (!team) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Team Not Found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto"
      }}
    >
      <h1>{team.name}</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        <h3>Captain</h3>
        <p>{team.captain}</p>

        <h3>Coach</h3>
        <p>{team.coach}</p>

        <h3>Home Ground</h3>
        <p>{team.stadium}</p>

        <h3>IPL Titles</h3>
        <p>{team.titles}</p>

        <h3>Team ID</h3>
        <p>{team.id}</p>
      </div>
    </div>
  );
}

export default TeamDetails;