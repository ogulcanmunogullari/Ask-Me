import React, { useContext } from "react";
import { General } from "../ContextAPI/GeneralContext";
import { Link } from "react-router-dom";

function mainPage() {
  const { games } = useContext(General);
  return (
    <div>
      <Link to="/create"> Create Game </Link>
      <Link to="/games"> Play </Link>
    </div>
  );
}

export default mainPage;
