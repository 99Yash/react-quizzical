import React, { useState } from "react";

const Button = (props) => {
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  shuffleArray(props.allOptions);
  console.log(props.allOptions);

  return (
    <div className="quiz" id="quiz-btn">
      {/* <ul>
        {props.allOptions.map(option)=>{
         return (
                <li key={option} >
                    <button type="button" className="btn--answer" >{option}</button>
                </li>
         );
        }}
      </ul> */}
      <button
        type="button"
        // onClick={clickHandler}
        className="btn--answer color"
        id="btn-1"
      >
        {props.allOptions[0]}
      </button>
      <button
        type="button"
        // onClick={clickHandler}
        className="btn--answer color"
        id="btn-2"
      >
        {props.allOptions[1]}
      </button>
      <button
        type="button"
        // onClick={clickHandler}
        className="btn--answer color"
        id="btn-3"
      >
        {props.allOptions[2]}
      </button>
      <button
        type="button"
        // onClick={clickHandler}
        className="btn--answer color"
        id="btn-4"
      >
        {props.allOptions[3]}
      </button>
      <hr width="10%" />
    </div>
  );
};

export default Button;
