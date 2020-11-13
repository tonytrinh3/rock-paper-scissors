import React from "react";
import "sass/main.scss";
import {ROCK,PAPER,SCISSORS} from "utilities/types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: null,
      cpuChoice: null,
      userScore: 0,
      rulesModal: false,
      cpuOption: [ROCK, PAPER, SCISSORS],
      gameLogic: {
        ROCK: {
          wins: SCISSORS,
          loses: PAPER,
          draw: ROCK
        },
        PAPER: {
          wins: ROCK,
          loses: SCISSORS,
          draw: PAPER
        },
        SCISSORS: {
          wins: PAPER,
          loses: ROCK,
          draw: SCISSORS
        },
      },
    };
  }

  getCPUChoice() {}

  render() {
    return <div className="App">hi</div>;
  }
}

export default App;
