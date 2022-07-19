import React, { useContext } from "react";
import { General } from "../ContextAPI/GeneralContext";

function Results() {
  const { score } = useContext(General);
  return (
    <div>
      <span>100 üzerinden: </span>
      {score * 25}
    </div>
  );
}

export default Results;
