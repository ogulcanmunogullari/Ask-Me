import React, { useContext, useEffect } from "react";
import { General } from "../ContextAPI/GeneralContext";
function Games({ gameName, gameID }) {
  const { setScore } = useContext(General);
  useEffect(() => {
    setScore(0);
  }, []);

  return (
    <div>
      <Link to={`/games/${gameID}`}>{gameName}</Link>
    </div>
  );
}

export default Games;
