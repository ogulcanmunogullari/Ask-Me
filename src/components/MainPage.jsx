import { Link } from "react-router-dom";

function mainPage() {
  return (
    <div className="flex flex-row h-full justify-around items-center sm:gap-10 gap-5 sm:px-10 px-5 sm:text-5xl text-lg">
      <div className="flex-1">
        <Link to="/create">
          <div className="h-[60vh] sm:h-[40vh] flex justify-center items-center bg-[#F637EC] hover:bg-[#3330E4] text-[#3330E4] hover:text-[#F637EC] rounded-3xl border-4 border-[#FAEA48]">
            {" "}
            Create Game
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/games">
          <div className="h-[60vh] sm:h-[40vh]  flex justify-center items-center bg-[#F637EC] hover:bg-[#3330E4] text-[#3330E4]  hover:text-[#F637EC] rounded-3xl border-4 border-[#FAEA48]">
            {" "}
            Play
          </div>
        </Link>
      </div>
    </div>
  );
}

export default mainPage;
