import React from "react";
import { Link } from "react-router-dom";
function Games({ gameName, gameID }) {
  return (
    <div>
      <Link to={`/games/${gameID}`}>{gameName}</Link>
    </div>
  );
}

export default Games;
