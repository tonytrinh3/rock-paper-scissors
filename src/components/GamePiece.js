import React from "react";
import { YOU_WIN, YOU_LOSE } from "utilities/types";

const GamePiece = (props) => {
  //TODO: NEED TO PUT THIS AS A SEPARATE COMPONENT bc USER SELECTION USE SAME CODE
  let renderedElement = null;
  const { element, results,choice } = props;

  const renderGamePiece = (choice) =>{
    return (<div className={`outer-circle outer-circle--large outer-circle__${choice}` }>
        <div className={`inner-circle inner-circle--large inner-circle__${choice}`}></div>
      </div>)
  }

  if (results === YOU_WIN && element === 1) {
    renderedElement = (
      <div className={`pulse play-area__piece play-area__piece--${1} `}>
        {renderGamePiece(choice)}
      </div>
    );
  } else if (results === YOU_LOSE && element === 3) {
    renderedElement = (
      <div className={`pulse play-area__piece play-area__piece--${3} `}>
        {renderGamePiece(choice)}
      </div>
    );
  } else if (element === 1) {
    renderedElement = (
      <div className={`play-area__piece play-area__piece--${1} `}>
        {renderGamePiece(choice)}
      </div>
    );
  } else {
    renderedElement = (
      <div className={`play-area__piece play-area__piece--${3}`}>
        {renderGamePiece(choice)}
      </div>
    );
  }

  return renderedElement;
};

export default GamePiece;
