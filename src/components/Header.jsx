import React, { useContext } from "react";
import { General } from "../ContextAPI/GeneralContext";
import { Link } from "react-router-dom";

function Header() {
  const { setScore } = useContext(General);
  return (
    <div>
      <Link to={`/`} onClick={() => setScore(0)}>
        Header
      </Link>
    </div>
  );
}

export default Header;
