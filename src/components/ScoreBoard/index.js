import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div className="jumboron">
      <h1 className="scoreboard">{props.children}</h1>
      <div>
        <div className="card score">Score: {props.score}
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard;
