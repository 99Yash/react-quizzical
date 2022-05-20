import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Buttons from "./Buttons";
import axios from "axios";

const App = () => {
  const [game, setGame] = useState(false);
  const [quizData, setQuizData] = useState([]); //? save the API in empty array
  const allOptions = [];
  console.log(quizData);

  const startGame = () => {
    setGame(true);
  };

  const onSubmit = () => {};
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
      );
      setQuizData(data.data.results);
    };
    fetchData();
  }, []);

  const backgroundStyle = {
    backgroundColor: game
      ? "linear-gradient(45deg, #d05c9c, #e1664c, #66c3dd, #536eec)"
      : "#c8ceda",
  };

  return (
    <div className="App" style={backgroundStyle}>
      {!game ? (
        <header className="App-header">
          <h1 className="main-title">Quizzical</h1>
          <p>Fun trivia game.</p>
          <button className="btn" onClick={startGame}>
            Start Game
          </button>
        </header>
      ) : (
        <div className="App-start">
          <ul>
            {quizData.map((q) => {
              return (
                <li key={q.question}>
                  <Quiz question={q.question} />
                  <Buttons
                    allOptions={[...q.incorrect_answers, q.correct_answer]}
                  />
                </li>
              );
            })}
          </ul>
          <button type="submit" className="btn--submit">
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
