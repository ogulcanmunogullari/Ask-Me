import React from "react";
import { useParams, Link } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";
import { useContext, useState } from "react";
import Question from "./Question";
function Questions() {
  const [questionId, setQuestionId] = useState(0);
  const { gameID } = useParams();
  const { games } = useContext(General);
  return (
    <div>
      {games
        .filter((game) => game.gameID == gameID)
        .find((game) => game.questions[0]) ? (
        games
          .filter((game) => game.gameID == gameID)
          .map((game, index) => {
            return (
              <div key={index}>
                <div>{game.gameID}</div>
                <Question
                  gameID={gameID}
                  setState={setQuestionId}
                  state={questionId}
                  questions={game.questions}
                  question={game.questions[questionId]}
                />
              </div>
            );
          })
      ) : (
        <div>
          <Link to={`/create/change/${gameID}`}>
            <h2>There is no question here, click for create one</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Questions;
