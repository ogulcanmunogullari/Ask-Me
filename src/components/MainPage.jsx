import { Link } from "react-router-dom";

function mainPage() {
  return (
    <div>
      <Link to="/create"> Create Game </Link>
      <Link to="/games"> Play </Link>
    </div>
  );
}

export default mainPage;
