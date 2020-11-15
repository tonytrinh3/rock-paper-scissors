import React from "react";

import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";

//TODO: make the game piece into a reusable component
const UserSelection = (props) => {
  const onClickFunc = (choice) => {
    props.getUserChoice(choice);
    props.triggerRenderResults(true);
  };

  const choices = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

  const renderChoices = () =>{
    return choices.map(choice =>{
      return (<div className={`weapon-select user-selection__pentagon__${choice}`}>
      <div
        onClick={() => onClickFunc(choice)}
        className={`outer-circle outer-circle__${choice} `}
      >
        <div className={`inner-circle inner-circle__${choice}`}></div>
      </div>
    </div>)

    })
  }

  return (
    <div className="user-selection">
      <div className="user-selection__pentagon">
          {renderChoices()}
        
      </div>
    </div>
  );
};

export default UserSelection;

{
  /* <div className="game-piece game-piece--rock">
<img className="game-piece__img" src={ROCK} alt="ROCK" />
</div>
<div className="game-piece">
<img className="game-piece__img" src={PAPER} alt="PAPER" />
</div>
<div className="game-piece">
<img className="game-piece__img" src={SCISSORS} alt="SCISSORS" />
</div>
<div className="game-piece">
<img className="game-piece__img" src={LIZARD} alt="LIZARD" />
</div>
<div className="game-piece">
<img className="game-piece__img" src={SPOCK} alt="SPOCK" />
</div> */
}
