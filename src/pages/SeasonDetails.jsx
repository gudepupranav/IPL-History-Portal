import { useParams } from "react-router-dom";
import seasons from "../data/seasons";

function SeasonDetails() {

  const { year } = useParams();

  const season = seasons.find(
    s => s.year === Number(year)
  );

  if (!season) {
    return <h1>Season Not Found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>IPL {season.year}</h1>

      <h3>Winner</h3>
      <p>{season.winner}</p>

      <h3>Runner Up</h3>
      <p>{season.runnerUp}</p>

      <h3>Orange Cap</h3>
      <p>{season.orangeCap}</p>

      <h3>Purple Cap</h3>
      <p>{season.purpleCap}</p>

      <h3>MVP</h3>
      <p>{season.mvp}</p>

      <h3>Emerging Player</h3>
      <p>{season.emergingPlayer}</p>

    </div>
  );
}

export default SeasonDetails;