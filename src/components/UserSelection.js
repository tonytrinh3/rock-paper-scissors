import React from "react";
// import ROCK from "assets/img/icon-rock.svg";
// import PAPER from "assets/img/icon-paper.svg";
// import SCISSORS from "assets/img/icon-scissors.svg";
// import SPOCK from "assets/img/icon-spock.svg";
// import LIZARD from "assets/img/icon-lizard.svg";
import pentagon from "assets/img/bg-pentagon.svg";

import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";

//TODO: GET STUFF IN PENTAGON AND MAKE IT RESPONSIVE
//TODO: make the game piece into a reusable component
const UserSelection = (props) => {

    const onClickFunc = (choice)=>{
        props.getUserChoice(choice);
        props.triggerRenderResults(true,true);
    };
    

  return (
    <div className="user-selection">
      <div className="user-selection__pentagon">
        <div onClick={() => onClickFunc(SCISSORS)} className="outer-circle outer-circle__scissors user-selection__pentagon__scissors">
          <div className="inner-circle inner-circle__scissors"></div>
        </div>

        <div onClick={() => onClickFunc(SPOCK)} className="outer-circle outer-circle__spock user-selection__pentagon__spock">
          <div className="inner-circle inner-circle__spock"></div>
        </div>
        {/* <img className="user-selection__pentagon__penta" src={pentagon} alt="pentagon"/> */}

        <div onClick={() => onClickFunc(PAPER)} className="outer-circle outer-circle__paper user-selection__pentagon__paper">
          <div className="inner-circle inner-circle__paper"></div>
        </div>

        <div onClick={() => onClickFunc(LIZARD)} className="outer-circle outer-circle__lizard user-selection__pentagon__lizard">
          <div className="inner-circle inner-circle__lizard"></div>
        </div>
        <div onClick={() => onClickFunc(ROCK)} className="outer-circle outer-circle__rock user-selection__pentagon__rock">
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
