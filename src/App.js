import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  const [game, setGame] = useState(false);
  const [quizData, setQuizData] = useState([
    { question: "", incorrect_answers: [], correct_answer: "" },
  ]); //? save the API in an empty array
  let options = [];

  //TODO :-- a way to display options. options are being displayed from a different index

  console.log(quizData[0][3]);
  //?define outside any function
  const randomNum = Math.floor(Math.random() * quizData.length); //?generate a random number from the API array
  options.push(quizData[randomNum].incorrect_answers);
  options.push(quizData[randomNum].correct_answer);

  const randomQues = quizData[randomNum].question; //!there was some problem here...(in dot question)
  console.log(options);
  console.log(quizData);
  // const option = quizData[randomNum].correct_answer;
  const startGame = () => {
    setGame(true);
  };

  // console.log(option);
  //?API Call using Fetch API. have to use useEffect
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  //!wrong way
  // fetch(
  //   "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
  // )
  //   .then((res) => res.json())
  //   .then((data) => setQuizData(data));//? every time the component renders it will re render the component, causing this infinite loop

  return (
    <div className="App">
      {!game ? (
        <header className="App-header">
          <h1 className="main-title">Quizzical</h1>
          <p>Fun trivia game.</p>
          <button className="btn" onClick={startGame}>
            Start Game
          </button>
        </header>
      ) : (
        <Quiz
          // data={JSON.stringify(quizData, null, 2)}
          question={randomQues}
          options={options}
        />
      )}
    </div>
  );
}

export default App;
