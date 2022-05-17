import React from "react";

const Quiz = (props) => {
  return (
    <div className="quiz">
      <p>{props.data}</p>
      {/* <h3 title="question">{props.data}</h3> */}
      {/* <button className="btn--answer">{props.options[1]}</button>
      <button className="btn--answer">{props.options[2]}</button>
      <button className="btn--answer">{props.options[3]}</button>
      <button className="btn--answer">{props.options[4]}</button> */}
    </div>
  );
};

export default Quiz;
