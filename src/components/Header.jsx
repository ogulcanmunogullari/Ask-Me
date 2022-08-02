import React, { useContext } from "react";
import { General } from "../ContextAPI/GeneralContext";
import { Link } from "react-router-dom";

function Header() {
  const { setScore } = useContext(General);
  return (
    <div>
      <Link to={`/`} onClick={() => setScore(0)}>
        <div className="h-24 text-center flex justify-center items-center border-b-4 border-[#FAEA48]">
          Main Page
        </div>
      </Link>
    </div>
  );
}

export default Header;
