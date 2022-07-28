import React, { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Change() {
  const [checked, setChecked] = useState(false);
  const [qId, setQid] = useState(0);
  const [element, setElement] = useState({});
  const [changedText, setChangedText] = useState("");
  const [takeID, setTakeID] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const { games, setGames } = useContext(General);
  const { gameID } = useParams();
  const [pass, setPass] = useState("");
  const [passDialog, setPassDialog] = useState(false);
  const navigate = useNavigate();
  const openDialog = (e, questionID) => {
    setElement(e);
    setDialog((currentDialog) => !currentDialog);
    setChangedText((current) => (current = e.title));
    setTakeID(questionID);
  };
  const handleDialog = (changedText) => {
    element.title = changedText;
    element.isTrue = checked;
    setDialog((current) => !current);
  };
  const deleteDialog = () => {
    games
      .filter((game) => game.gameID == gameID)
      .map((game) => {
        game.questions = game.questions.filter((item) => item != element);
      });
    setDialog((current) => !current);
  };
  const clearQ = (x) => {
    x[0].value = "";
    x[1].value = "";
    x[2].checked = false;
    x[3].value = "";
    x[4].checked = false;
    x[5].value = "";
    x[6].checked = false;
    x[7].value = "";
    x[8].checked = false;
  };
  const handleDialog2 = (e) => {
    e.preventDefault();
    let list = [...e.target.elements];
    let newQ = {
      id: games.filter((game) => game.gameID == gameID)[0].questions.length + 1,
      title: list[0].value,
      answers: [
        {
          id: 1,
          title: list[1].value,
          isTrue: list[2].checked,
        },
        {
          id: 2,
          title: list[3].value,
          isTrue: list[4].checked,
        },
        {
          id: 3,
          title: list[5].value,
          isTrue: list[6].checked,
        },
        {
          id: 4,
          title: list[7].value,
          isTrue: list[8].checked,
        },
      ],
    };
    clearQ(e.target.elements);
    games.filter((game) => game.gameID == gameID)[0].questions.push(newQ);
    //Database yollama gelecek???
    setDialog2((current) => !current);
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
        <input
          type="button"
          value="Save"
          onClick={() => handleDialog(changedText)}
        />
        <input
          type="button"
          value="Delete This Question"
          onClick={() => deleteDialog()}
        />
      </dialog>
      <dialog open={dialog2}>
        <form onSubmit={handleDialog2}>
          <div className="create_question">
            <input
              type="text"
              autoComplete="off"
              name="title"
              placeholder="Question"
            />
          </div>
          <div className="create_answers">
            <div>
              <input
                type="text"
                required
                autoComplete="off"
                name="answer1"
                placeholder="Answer1"
              />
              <label htmlFor="ans1">Is True?</label>
              <input
                type="radio"
                required
                id="ans1"
                name="isTrue"
                value={true}
              />
            </div>
            <div>
              <input
                type="text"
                required
                autoComplete="off"
                name="answer2"
                placeholder="Answer2"
              />
              <label htmlFor="ans2">Is True?</label>
              <input
                type="radio"
                required
                id="ans2"
                name="isTrue"
                value={true}
              />
            </div>
            <div>
              <input
                type="text"
                required
                autoComplete="off"
                name="answer3"
                placeholder="Answer3"
              />
              <label htmlFor="ans3">Is True?</label>
              <input
                type="radio"
                required
                id="ans3"
                name="isTrue"
                value={true}
              />
            </div>
            <div>
              <input
                type="text"
                required
                autoComplete="off"
                name="answer4"
                placeholder="Answer4"
              />
              <label htmlFor="ans4">Is True?</label>
              <input
                type="radio"
                required
                id="ans4"
                name="isTrue"
                value={true}
              />
            </div>
          </div>
          <button type="Submit">Add</button>
          <button
            type="reset"
            onClick={() => {
              setDialog2((old) => !old);
            }}
          >
            Close
          </button>
        </form>
      </dialog>
      {games
        .filter((game) => game.gameID == gameID)
        .map((game) => (
          <div key={game.gameID}>
            <div>{game.gameName}</div>
            <div className="change_delete" onClick={() => filterFunc()}>
              Delete this game
            </div>
            <div onClick={() => setDialog2((old) => !old)}>
              Add new question
            </div>
            {game.password == pass ? (
              game.questions.map((question) => (
                <div key={Math.random() * 1_000_000_000} id={question.id}>
                  <div onClick={(e) => openDialog(question)}>
                    {question.title}
                  </div>
                  {question.answers.map((answer) => (
                    <span
                      onClick={(e) => openDialog(question)}
                      style={{ marginLeft: "10px" }}
                      key={answer.id}
                    >
                      <span>{answer.title}</span>{" "}
                      <span>{answer.isTrue && " / true"}</span>{" "}
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
