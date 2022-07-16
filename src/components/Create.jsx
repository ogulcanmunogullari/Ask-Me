import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Create() {
  const { games } = useContext(General);
  return (
    <div>
      <div>Create</div>
      <div>
        <h2>Change</h2>
        {games.map((game, index) =>
          game.changeble === true ? (
            <div key={index}>
              <Link to={`/create/change/${game.gameID}`}>{game.gameName}</Link>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Create;
