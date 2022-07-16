import { createContext, useState } from "react";

export const General = createContext();

export const GeneralProvider = ({ children }) => {
  let data = [
    {
      gameID: 1,
      gameName: "Oğulcan'ın Soruları",
      password: "",
      changeble: true,
      questions: [
        {
          id: 1,
          title: "Örümceklerin Kaç Ayağı Var?",
          answers: [
            {
              id: 1,
              title: "8",
              isTrue: true,
            },
            {
              id: 2,
              title: "6",
              isTrue: false,
            },
            {
              id: 3,
              title: "10",
              isTrue: false,
            },
            {
              id: 4,
              title: "2",
              isTrue: false,
            },
          ],
        },
        {
          id: 2,
          title: "Bebek filler yaklaşık kaç kilo doğar?",
          answers: [
            {
              id: 1,
              title: "90 Kg",
              isTrue: true,
            },
            {
              id: 2,
              title: "120 Kg",
              isTrue: false,
            },
            {
              id: 3,
              title: "60 Kg",
              isTrue: false,
            },
            {
              id: 4,
              title: "150 Kg",
              isTrue: false,
            },
          ],
        },
      ],
    },
    {
      gameID: 2,
      gameName: "Sorular",
      password: "",
      changeble: true,
      questions: [
        {
          id: 1,
          title: "Soru 1?",
          answers: [
            {
              id: 1,
              title: "Cevap1",
              isTrue: false,
            },
            {
              id: 2,
              title: "Cevap2",
              isTrue: true,
            },
            {
              id: 3,
              title: "Cevap3",
              isTrue: false,
            },
            {
              id: 4,
              title: "Cevap4",
              isTrue: false,
            },
          ],
        },
        {
          id: 2,
          title: "Soru2?",
          answers: [
            {
              id: 1,
              title: "Cevap1",
              isTrue: true,
            },
            {
              id: 2,
              title: "Cevap2",
              isTrue: false,
            },
            {
              id: 3,
              title: "Cevap3",
              isTrue: false,
            },
            {
              id: 4,
              title: "Cevap4",
              isTrue: false,
            },
          ],
        },
      ],
    },
  ];
  const [games, setGames] = useState(data);
  const values = {
    games,
    setGames,
  };
  return <General.Provider value={values}>{children}</General.Provider>;
};
