import { Routes, Route } from "react-router-dom";
import { General } from "./ContextAPI/GeneralContext";
import React, { useContext } from "react";

import MainPage from "./components/MainPage";
import Games from "./components/Games";
import Questions from "./components/Questions";
import Header from "./components/Header";
import Create from "./components/Create";
import Change from "./components/Change";
import Results from "./components/Results";
function App() {
  const { games } = useContext(General);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/games"
          element={games.map((game) => (
            <Games
              key={game.gameID}
              gameID={game.gameID}
              gameName={game.gameName}
            />
          ))}
        />
        <Route path="/games/:gameID" element={<Questions />} />
        <Route path="/create/change/:gameID" element={<Change />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
