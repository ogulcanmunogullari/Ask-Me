import React, { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Change() {
  const [checked, setChecked] = useState(false);
  const [qId, setQid] = useState(0);
  const [changedText, setChangedText] = useState("");
  const [takeID, setTakeID] = useState(0);
  const [dialog, setDialog] = useState(false);
  const { games, setGames } = useContext(General);
  const { gameID } = useParams();
  const [pass, setPass] = useState("");
  const [passDialog, setPassDialog] = useState(false);
  const navigate = useNavigate();
  const openDialog = (e, questionID) => {
    setDialog((currentDialog) => !currentDialog);
    setChangedText((current) => (current = e.title));
    setTakeID(questionID);
    setQid(e);
  };
  const handleDialog = (changedText) => {
    games
      .filter((game) => game.gameID == gameID)
      .map((game) => {
        if (qId.answers) {
          game.questions[takeID.id - 1].title = changedText;
        } else {
          game.questions[takeID.id - 1].answers[qId.id - 1].title = changedText;
          game.questions[takeID.id - 1].answers[qId.id - 1].isTrue = checked;
        }
      });
    setDialog((current) => !current);
  };

  const filterFunc = () => {
    setGames(games.filter((item) => item.gameID != gameID));
    navigate(`/`, { replace: true });
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
            <div>{game.gameName}</div>
            <div className="change_delete" onClick={() => filterFunc()}>
              Delete this game
            </div>
            {game.password == pass ? (
              game.questions.map((question) => (
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
              ))
            ) : (
              <div>
                <dialog open={passDialog}>
                  <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <button onClick={() => setPassDialog((old) => !old)}>
                    Submit
                  </button>
                </dialog>
                <div>You have to know password of question</div>
                <button onClick={() => setPassDialog((old) => !old)}>
                  I know the password
                </button>
                <Link to="/games">I dont know the password</Link>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Change;
