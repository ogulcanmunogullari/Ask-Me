import { createContext, useState, useEffect } from "react";

export const General = createContext();

export const GeneralProvider = ({ children }) => {
  let data = [];
  const [score, setScore] = useState(0);
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState("");
  useEffect(() => {
    setGames(data);
  }, []);
  useEffect(() => {
    if (newGame !== "") {
      setGames((old) => [...old, newGame]);
    }
    setNewGame("");
  }, [newGame]);
  const values = {
    games,
    setGames,
    score,
    setScore,
    newGame,
    setNewGame,
  };
  return <General.Provider value={values}>{children}</General.Provider>;
};
