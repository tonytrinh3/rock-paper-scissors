import React from "react";

const GamePiece = (props) => {

    //TODO: MAYBE NEED TO PUT THIS AS A SEPARATE COMPONENT bc USER SELECTION USE SAME CODE
  const gamePieceLibrary = {
    ROCK: (
      <div className="outer-circle outer-circle--large outer-circle__rock">
        <div className="inner-circle inner-circle--large inner-circle__rock"></div>
      </div>
    ),
    PAPER: (
      <div className="outer-circle outer-circle--large outer-circle__paper ">
        <div className="inner-circle inner-circle--large inner-circle__paper"></div>
      </div>
    ),
    SCISSORS: (
      <div className="outer-circle outer-circle--large outer-circle__scissors ">
        <div className="inner-circle inner-circle--large inner-circle__scissors"></div>
      </div>
    ),
    SPOCK: (
      <div className="outer-circle outer-circle--large outer-circle__spock ">
        <div className="inner-circle inner-circle--large inner-circle__spock"></div>
      </div>
    ),
    LIZARD: (
      <div className="outer-circle outer-circle--large outer-circle__lizard ">
        <div className="inner-circle inner-circle--large inner-circle__lizard"></div>
      </div>
    ),
  };

  return <div className={`play-area__piece--${props.element}`} >{gamePieceLibrary[props.choice]}</div>;
};

export default GamePiece;
