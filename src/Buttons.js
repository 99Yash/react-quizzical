import React, { useState } from "react";

const Button = (props) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick((prevClick) => !prevClick);
    // {
    //   click && { backgroundColor: "green" };
    // }
  };

  return (
    <div className="quiz" id="quiz-btn">
      <button
        type="button"
        onClick={clickHandler}
        className="btn--answer"
        id="btn-1"
      >
        {props.options[0]}
      </button>
      <button
        type="button"
        onClick={clickHandler}
        className="btn--answer"
        id="btn-2"
      >
        {props.options[1]}
      </button>
      <button
        type="button"
        onClick={clickHandler}
        className="btn--answer"
        id="btn-3"
      >
        {props.options[2]}
      </button>
      <button
        type="button"
        onClick={clickHandler}
        className="btn--answer"
        id="btn-4"
      >
        {props.options[3]}
      </button>
      <hr width="65%" />
    </div>
  );
};

export default Button;
