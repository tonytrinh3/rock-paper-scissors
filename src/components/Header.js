import React from "react";
import logo from "assets/img/logo-bonus.svg";

//TODO - REDUCE HEADER WIDTH TO BE LIKE PIC
const Header = (props) => {
  return (
    <div className="header">
      <img className = "header__logo" src={logo} alt="logo" />

      <div className="header__score-card">
          <p className="header__score-card__title">Score</p>
          <p className="header__score-card__score">{props.score}</p>
      </div>
  
    </div>
  );
};

export default Header;
