import React from "react";
import { YOU_WIN, YOU_LOSE } from "utilities/types";

const GamePiece = (props) => {
  //TODO: NEED TO PUT THIS AS A SEPARATE COMPONENT bc USER SELECTION USE SAME CODE
  let renderedElement = null;

  const { element, results } = props;
  const gamePieceLibrary = {
    ROCK: (
      <div className="outer-circle outer-circle--large outer-circle__ROCK">
        <div className="inner-circle inner-circle--large inner-circle__ROCK"></div>
      </div>
    ),
    PAPER: (
      <div className="outer-circle outer-circle--large outer-circle__PAPER ">
        <div className="inner-circle inner-circle--large inner-circle__PAPER"></div>
      </div>
    ),
    SCISSORS: (
      <div className="outer-circle outer-circle--large outer-circle__SCISSORS ">
        <div className="inner-circle inner-circle--large inner-circle__SCISSORS"></div>
      </div>
    ),
    SPOCK: (
      <div className="outer-circle outer-circle--large outer-circle__SPOCK ">
        <div className="inner-circle inner-circle--large inner-circle__SPOCK"></div>
      </div>
    ),
    LIZARD: (
      <div className="outer-circle outer-circle--large outer-circle__LIZARD ">
        <div className="inner-circle inner-circle--large inner-circle__LIZARD"></div>
      </div>
    ),
  };

  if (results === YOU_WIN && element === 1) {
    renderedElement = (
      <div className={`pulse play-area__piece play-area__piece--${1} `}>
        {gamePieceLibrary[props.choice]}
      </div>
    );
  } else if (results === YOU_LOSE && element === 3) {
    renderedElement = (
      <div className={`pulse play-area__piece play-area__piece--${3} `}>
        {gamePieceLibrary[props.choice]}
      </div>
    );
  } else if (element === 1) {
    renderedElement = (
      <div className={`play-area__piece play-area__piece--${1} `}>
        {gamePieceLibrary[props.choice]}
      </div>
    );
  } else {
    renderedElement = (
      <div className={`play-area__piece play-area__piece--${3}`}>
        {gamePieceLibrary[props.choice]}
      </div>
    );
  }

  return renderedElement;
};

export default GamePiece;
