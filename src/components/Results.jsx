import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Results() {
  const { gameID } = useParams();
  const { score, games } = useContext(General);
  return (
    <div>
      {games
        .filter((game) => game.gameID == gameID)
        .map((game, index) => {
          return (
            <div key={index}>
              <span>
                100 üzerinden: {(100 / game.questions.length) * score}
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Results;
