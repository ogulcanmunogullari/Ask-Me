import React from "react";
import { useParams } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";
import { useContext } from "react";
function Questions() {
  const { gameID } = useParams();
  const { games } = useContext(General);
  return (
    <div>
      {games
        .filter((game) => game.gameID == gameID)
        .map((game) => (
          <div key={game.gameID}>{game.gameName}</div>
        ))}
    </div>
  );
}

export default Questions;
