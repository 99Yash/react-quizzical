import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  const [game, setGame] = useState(false);
  const [quizData, setQuizData] = useState([
    { question: "", incorrect_answers: [], correct_answer: "" },
  ]); //? save the API in empty array
  let options = [];

  //TODO :-- a way to display without hard-coding

  console.log(quizData[0]);
  //?define outside any function
  const randomNum = Math.floor(Math.random() * quizData.length); //?generate a random number from the API array
  options.push(quizData[randomNum].incorrect_answers); //!concat issue
  options.push(quizData[randomNum].correct_answer);

  //? shuffle options
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  // shuffleArray(options);
  // let [a, b, c] = options[0];
  // let [e, f, g] = a;
  options = [...options[0], options[1]];
  shuffleArray(options);

  const randomQues = quizData[randomNum].question; //!there was some problem here...(in dot question)

  console.log(options);
  console.log(quizData);

  const startGame = () => {
    setGame(true);
  };

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

  // const questionArr = quizData.map((q) => (
  //   <Quiz
  //     key={Math.random().toString()}
  //     data={JSON.stringify(quizData, null, 2)}
  //     question={randomQues}
  //     options={options}
  //   />
  // ));

  let qnArr = [];
  const questionArray = () => {
    const n = Math.floor(Math.random() * quizData.length);
    for (let i = 0; i < quizData.length; i++) {
      qnArr = quizData[i].question;
      options.concat(quizData[i].incorrect_answers);
      options.push(quizData[i].correct_answer);
    }
  };

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
        <div className="App">
          <Quiz
            // key={Math.random().toString()}
            data={quizData}
            question={randomQues}
            options={options}
          />
        </div>
      )}
      {/* <button type="submit">SUBMIT</button> */}
    </div>
  );
}

export default App;
