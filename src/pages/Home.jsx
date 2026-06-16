import FavoriteTeam from "../components/FavoriteTeam";
import FavoritePlayer from "../components/FavoritePlayer";


function Home() {

  return (
    <>
      <div className="hero">

        <h1>IPL HISTORY PORTAL</h1>

        <p>
          Explore Every IPL Season,
          Champions,
          Teams,
          Awards and Records
        </p>

      </div>

      <div className="container">

        <FavoriteTeam />

        <br />

        <FavoritePlayer />

        <div className="stats-grid">

          <div className="stat-box">
            <h2>18</h2>
            <p>IPL Seasons</p>
          </div>

          <div className="stat-box">
            <h2>10</h2>
            <p>IPL Teams</p>
          </div>

         <div className="stat-box">
  <h2>750+</h2>
  <p>Matches Played</p>
</div>

<div className="stat-box">
  <h2>1000+</h2>
  <p>Players Featured</p>
</div>

        </div>

      </div>
    </>
  );
}

export default Home;