import { useContext, useEffect, useState } from "react";
import { TeamContext } from "../context/TeamContext";

function FavoriteTeam() {

  const { favoriteTeam, setFavoriteTeam } =
    useContext(TeamContext);

  const [selectedTeam, setSelectedTeam] =
    useState("");

  useEffect(() => {

    const savedTeam =
      localStorage.getItem("favoriteTeam");

    if (savedTeam) {
      setFavoriteTeam(savedTeam);
      setSelectedTeam(savedTeam);
    }

  }, []);

  const saveTeam = () => {

    localStorage.setItem(
      "favoriteTeam",
      selectedTeam
    );

    setFavoriteTeam(selectedTeam);

    alert("Favorite Team Saved");
  };

  return (
    <div>

      <h2>Select Favorite Team</h2>

      <select
        value={selectedTeam}
        onChange={(e) =>
          setSelectedTeam(e.target.value)
        }
      >

        <option value="">
          Select Team
        </option>

       <option value="CSK">Chennai Super Kings</option>
<option value="MI">Mumbai Indians</option>
<option value="RCB">Royal Challengers Bengaluru</option>
<option value="KKR">Kolkata Knight Riders</option>
<option value="SRH">Sunrisers Hyderabad</option>
<option value="DC">Delhi Capitals</option>
<option value="PBKS">Punjab Kings</option>
<option value="RR">Rajasthan Royals</option>
<option value="LSG">Lucknow Super Giants</option>
<option value="GT">Gujarat Titans</option>
      </select>

      <br /><br />

      <button onClick={saveTeam}>
        Save Favorite Team
      </button>

      <h3>
        Current Favorite Team:
        {favoriteTeam}
      </h3>

    </div>
  );
}

export default FavoriteTeam;