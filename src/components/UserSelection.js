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
      <div className="game-piece">
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
      </div>
    </div>
  );
};

export default UserSelection;
