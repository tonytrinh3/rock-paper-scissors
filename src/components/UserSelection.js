import React from "react";
// import ROCK from "assets/img/icon-rock.svg";
// import PAPER from "assets/img/icon-paper.svg";
// import SCISSORS from "assets/img/icon-scissors.svg";
// import SPOCK from "assets/img/icon-spock.svg";
// import LIZARD from "assets/img/icon-lizard.svg";
// import pentagon from "assets/img/bg-pentagon.svg";

import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";

//TODO: GET STUFF IN PENTAGON AND MAKE IT RESPONSIVE
//TODO: make the game piece into a reusable component
const UserSelection = (props) => {

    const onClickFunc = (choice)=>{
        props.getUserChoice(choice);
        props.triggerResults(true);
    };
    

  return (
    <div className="user-selection">
      <div className="user-selection__pentagon">
        <div onClick={() => onClickFunc(SCISSORS)} className="outer-circle outer-circle__scissors outer-circle__scissors--position">
          <div className="inner-circle inner-circle__scissors"></div>
        </div>

        <div onClick={() => onClickFunc(SPOCK)} className="outer-circle outer-circle__spock outer-circle__spock--position">
          <div className="inner-circle inner-circle__spock"></div>
        </div>

        <div onClick={() => onClickFunc(PAPER)} className="outer-circle outer-circle__paper outer-circle__paper--position">
          <div className="inner-circle inner-circle__paper"></div>
        </div>

        <div onClick={() => onClickFunc(LIZARD)} className="outer-circle outer-circle__lizard outer-circle__lizard--position">
          <div className="inner-circle inner-circle__lizard"></div>
        </div>
        <div onClick={() => onClickFunc(ROCK)} className="outer-circle outer-circle__rock outer-circle__rock--position">
          <div className="inner-circle inner-circle__rock"></div>
        </div>
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
