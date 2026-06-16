import { useState, useEffect } from "react";

function FavoritePlayer() {

  const [player, setPlayer] = useState("");

  useEffect(() => {

    const savedPlayer =
      localStorage.getItem("favoritePlayer");

    if(savedPlayer){
      setPlayer(savedPlayer);
    }

  }, []);

  const savePlayer = () => {

    localStorage.setItem(
      "favoritePlayer",
      player
    );

    alert("Favorite Player Saved");
  };

  return (

    <div className="card">

      <h2>Favorite IPL Player</h2>

      <select
        value={player}
        onChange={(e)=>
          setPlayer(e.target.value)
        }
      >

        <option value="">
          Select Player
        </option>

        <option>Virat Kohli</option>
<option>MS Dhoni</option>
<option>Rohit Sharma</option>
<option>Hardik Pandya</option>
<option>Jasprit Bumrah</option>
<option>Suryakumar Yadav</option>
<option>Ruturaj Gaikwad</option>
<option>Shubman Gill</option>
<option>Sanju Samson</option>
<option>KL Rahul</option>
<option>Yashasvi Jaiswal</option>
<option>Rashid Khan</option>
<option>Andre Russell</option>
<option>Sunil Narine</option>
<option>Pat Cummins</option>

      </select>

      <br/><br/>

      <button onClick={savePlayer}>
        Save Player
      </button>

      <p>
        Current Favorite:
        {player}
      </p>

    </div>

  );
}

export default FavoritePlayer;