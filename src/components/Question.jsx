import React, { useState, useEffect, useContext } from "react";
import { General } from "../ContextAPI/GeneralContext";
import { useNavigate } from "react-router-dom";

function Question({ question, state, setState, questions, gameID }) {
  const { setScore } = useContext(General);
  const [check, setCheck] = useState(false);
  const [isDisabled, setIsDisabled] = useState(null);
  const { answers, title } = question;
  let navigate = useNavigate();
  const stateFunc = () => {
    state < questions.length - 1
      ? setState((current) => current + 1)
      : navigate(`/results/${gameID}`, { replace: true });

    setIsDisabled(null);
    //null yerine sonuçlar linkine gidecek
  };
  const a = ["A", "B", "C", "D"];

  const checkFunction = (q) => {
    answers[q - 1].isTrue ? setCheck(true) : setCheck(false);
  };
  const scoreFunction = (e) => {
    e.preventDefault();
    check == true
      ? setScore((current) => current + 1)
      : setScore((current) => current + 0);
    setIsDisabled("disabled");
  };

  return (
    <div>
      {title}
      <form onSubmit={(e) => scoreFunction(e)}>
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              <label htmlFor={`${index + 10}`}>{a[index]}</label>:
              <div
                id={index}
                onClick={() => checkFunction(index + 1)}
                dangerouslySetInnerHTML={{
                  __html: `<input id="${
                    index + 10
                  }" type="radio" name="answers" ${isDisabled}>
                    ${answer.title}
                  </input>`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <input type="submit" value={"Save Answer"} />
      </form>

      <div onClick={() => stateFunc()}>Next</div>
    </div>
  );
}

export default Question;
