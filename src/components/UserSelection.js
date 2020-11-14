import React from "react";
import ROCK from "assets/img/icon-rock.svg";
import PAPER from "assets/img/icon-paper.svg";
import SCISSORS from "assets/img/icon-scissors.svg";
import SPOCK from "assets/img/icon-spock.svg";
import LIZARD from "assets/img/icon-lizard.svg";
import pentagon from "assets/img/bg-pentagon.svg";

const UserSelection = () => {
  return (
    <div className="user-selection">
      <div class="outer-circle outer-circle__rock">
        <div class="inner-circle inner-circle__rock"></div>
      </div>
      <div class="outer-circle outer-circle__paper">
        <div class="inner-circle inner-circle__paper"></div>
      </div>
      <div class="outer-circle outer-circle__scissors">
        <div class="inner-circle inner-circle__scissors"></div>
      </div>
      <div class="outer-circle outer-circle__spock">
        <div class="inner-circle inner-circle__spock"></div>
      </div>
      <div class="outer-circle outer-circle__lizard">
        <div class="inner-circle inner-circle__lizard"></div>
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
