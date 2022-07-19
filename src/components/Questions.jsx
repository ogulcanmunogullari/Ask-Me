import React from "react";
import { useParams } from "react-router-dom";
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
        .map((game, index) => {
          return (
            <div key={index}>
              <div>{game.gameID}</div>
              <Question
                setState={setQuestionId}
                state={questionId}
                questions={game.questions}
                question={game.questions[questionId]}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Questions;
