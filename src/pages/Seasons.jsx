import seasons from "../data/seasons";
import SeasonCard from "../components/SeasonCard";

function Seasons() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>IPL Seasons History</h1>

      {seasons.map((season) => (
        <SeasonCard
          key={season.year}
          season={season}
        />
      ))}
    </div>
  );
}

export default Seasons;