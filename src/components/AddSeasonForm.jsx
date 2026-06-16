import { useState } from "react";

function AddSeasonForm() {

  const [year, setYear] = useState("");
  const [winner, setWinner] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (year === "" || winner === "") {
      alert("All fields are required");
      return;
    }

    alert(`IPL ${year} Winner: ${winner}`);
  };

  return (
    <div>

      <h2>Add IPL Season</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          placeholder="Season Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Winner"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Season
        </button>

      </form>

    </div>
  );
}

export default AddSeasonForm;