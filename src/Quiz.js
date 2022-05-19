import React from "react";

const Quiz = (props) => {
  return (
    <div className="quiz">
      <p title="question">{props.data[0].question}</p>
      <button type="button" className="btn--answer" id="btn-1">
        {props.options[0]}
      </button>
      <button type="button" className="btn--answer" id="btn-2">
        {props.options[1]}
      </button>
      <button type="button" className="btn--answer" id="btn-3">
        {props.options[2]}
      </button>
      <button type="button" className="btn--answer" id="btn-4">
        {props.options[3]}
      </button>
      <hr width="65%" />
    </div>
  );
};
export default Quiz;
