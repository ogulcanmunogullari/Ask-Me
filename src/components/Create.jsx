import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { General } from "../ContextAPI/GeneralContext";

function Create() {
  const { games, setNewGame } = useContext(General);
  const [newQuestions, setNewQuestions] = useState([]);
  const [qID, setQID] = useState(1);
  const [dialog, setDialog] = useState(false);
  const clearQ = (x) => {
    x[0].value = "";
    x[1].value = "";
    x[3].value = "";
    x[5].value = "";
    x[7].value = "";
  };
  const dialogHandle = (e) => {
    e.preventDefault();
    let list = [...e.target.elements];

    let newQ = {
      id: qID,
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
    setNewQuestions((old) => [...old, newQ]);
    setQID((old) => old + 1);
    clearQ(e.target.elements);

    setDialog((old) => !old);
  };
  const formHandle = (e) => {
    e.preventDefault();
    let list = [...e.target.elements];
    if (list.every((item) => item.value)) {
      setNewGame({
        gameID: games.length + 1,
        gameName: list[1].value,
        password: list[2].value,
        changeble: list[3].checked,
        questions: newQuestions,
      });
    } else {
      alert("Fill the question");
    }
  };

  return (
    <div>
      <div>
        <h1> Create </h1>
        <form onSubmit={formHandle}>
          <input
            type="number"
            name="gameID"
            value={games.length + 1}
            disabled
          />
          <input
            type="text"
            name="gameName"
            placeholder="Game Name"
            autoComplete="off"
          />
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="changeble">Can people change my game:</label>
          <label htmlFor="true">Yes</label>
          <input type="checkbox" id="true" name="changeble" value={true} />

          <span onClick={() => setDialog((curr) => !curr)}>Add Question</span>
          <input type="submit" value="Save" />
        </form>
        <dialog open={dialog}>
          <form onSubmit={dialogHandle}>
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
                setDialog((old) => !old);
              }}
            >
              Close
            </button>
          </form>
        </dialog>
      </div>
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
