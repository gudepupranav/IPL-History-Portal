import { createContext, useState } from "react";

export const TeamContext = createContext();

function TeamProvider({ children }) {

  const [favoriteTeam, setFavoriteTeam] = useState("");

  return (
    <TeamContext.Provider
      value={{
        favoriteTeam,
        setFavoriteTeam
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export default TeamProvider;