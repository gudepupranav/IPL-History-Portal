import { useRef } from "react";

function SearchBox() {

  const inputRef = useRef();

  const searchTeam = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Search Team"
      />

      <button onClick={searchTeam}>
        Search
      </button>
    </>
  );
}

export default SearchBox;