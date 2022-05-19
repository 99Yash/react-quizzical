import React from "react";

const Quiz = (props) => {
  return (
    <div className="quiz">
      <p title="question">{props.question}</p>
    </div>
  );
};

export default Quiz;
