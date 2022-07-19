import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Change() {
  const [checked, setChecked] = useState(false);
  const [qId, setQid] = useState(0);
  const [changedText, setChangedText] = useState("");
  const [takeID, setTakeID] = useState(0);
  const [dialog, setDialog] = useState(false);
  const { games, setGames } = useContext(General);
  const { gameID } = useParams();
  const openDialog = (e, questionID) => {
    setDialog((currentDialog) => !currentDialog);
    setChangedText((current) => (current = e.title));
    setTakeID(questionID);
    setQid(e);
  };
  const handleDialog = (changedText) => {
    if (qId.answers) {
      games[gameID - 1].questions[takeID.id - 1].title = changedText;
    } else {
      games[gameID - 1].questions[takeID.id - 1].answers[qId.id - 1].title =
        changedText;
      games[gameID - 1].questions[takeID.id - 1].answers[qId.id - 1].isTrue =
        checked;
    }
    console.log(takeID);
    setDialog((current) => !current);
  };
  return (
    <div>
      <dialog open={dialog}>
        <div>
          <input
            type="text"
            value={changedText}
            onChange={(e) => setChangedText(e.target.value)}
          />
        </div>
        <div>
          is True
          <input
            type="checkbox"
            onChange={() => setChecked((current) => !current)}
            checked={checked}
          />
        </div>
        <input type="button" onClick={() => handleDialog(changedText)} />
      </dialog>
      {games
        .filter((game) => game.gameID == gameID)
        .map((game) => (
          <div key={game.gameID}>
            {game.questions.map((question) => (
              <div key={question.id} id={question.id}>
                <div onClick={(e) => openDialog(question, question)}>
                  {question.title}
                </div>
                {question.answers.map((answer) => (
                  <span
                    onClick={(e) => openDialog(answer, question)}
                    style={{ marginLeft: "10px" }}
                    key={answer.id}
                  >
                    {answer.title} {answer.isTrue && " / true"}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Change;
