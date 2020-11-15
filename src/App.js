import React from "react";
import "sass/main.scss";
import {
  ROCK,
  PAPER,
  SCISSORS,
  SPOCK,
  LIZARD
} from "utilities/types";
import gameLogicSelection from "utilities/gameLogicSelection";
import cpuChoice from "utilities/cpuChoice";

import Header from "components/Header";
import UserSelection from "components/UserSelection";

import RulesModal from "components/RulesModal";
import PlayArea from "components/PlayArea";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: null,
      cpuChoice: null,
      userScore: 0,
      resultsBanner: null,
      showRulesModal: false,
      showCPUChoice: false,
      rounds: 0,
      showResults: false,
      cpuOption: [ROCK, PAPER, SCISSORS, SPOCK, LIZARD],
      gameLogic: {
        ROCK: {
          wins: [SCISSORS, LIZARD],
          loses: [PAPER, SPOCK],
        },
        PAPER: {
          wins: [ROCK, SPOCK],
          loses: [SCISSORS, LIZARD],
        },
        SCISSORS: {
          wins: [PAPER, LIZARD],
          loses: [ROCK, SPOCK],
        },
        SPOCK: {
          wins: [SCISSORS, ROCK],
          loses: [PAPER, LIZARD],
        },
        LIZARD: {
          wins: [SPOCK, PAPER],
          loses: [SCISSORS, ROCK],
        },
      },
      scoring: {
        DRAW: 0,
        "YOU WIN": 1,
        "YOU LOSE": -1,
      },
    };
  }

  componentDidMount() {
    let userScore = parseInt(localStorage.getItem("userScore"));

    if (Number.isNaN(userScore)) {
      userScore = 0;
    }

    this.setState({
      userScore: userScore,
    });

  }

  _handleScoreUpdate = (update) => {
    let { scoring } = this.state;
    let userScore = parseInt(localStorage.getItem("userScore"));

    if (Number.isNaN(userScore)) {
      userScore = 0;
    }

    const merge = userScore + scoring[update];

    localStorage.setItem("userScore", merge);

    const timer = setTimeout(() => {
      this.setState({ userScore: merge });
    }, 2500);
  };


 

  async componentDidUpdate(prevProps, prevState) {
    const { userChoice, gameLogic, rounds, cpuOption } = this.state;

    if (prevState.rounds !== rounds) {
      let newCPUChoice = await cpuChoice(cpuOption, this.getCPUChoice);

      const timer = setTimeout(() => {
        this.setState({ showCPUChoice: true });
      }, 2000);

      gameLogicSelection(
        newCPUChoice,
        userChoice,
        gameLogic,
        this.getResultsBanner,
        this._handleScoreUpdate
      );
    }
  }

  getResultsBanner = (nextState) => {
    this.setState({
      resultsBanner: nextState,
    });
  };

  getCPUChoice = (nextState) => {
    this.setState({
      cpuChoice: nextState,
    });
  };

  getUserChoice = (choice) => {
    this.setState({
      userChoice: choice,
      rounds: this.state.rounds + 1,
    });
  };

  triggerRenderResults = (nextStateResult, nextStateChoice) => {
    this.setState({
      showResults: nextStateResult,
      showCPUChoice: nextStateChoice,
    });
  };

  triggerShowCPUChoice = (nextState) => {
    this.setState({
      showCPUChoice: nextState,
    });
  };

  closeModal = (nextState) => {
    this.setState({
      showRulesModal: nextState,
    });
  };

  render() {
    const {
      userScore,
      showResults,
      showRulesModal,
      resultsBanner,
      userChoice,
      showCPUChoice,
      cpuChoice,
    } = this.state;

    return (
      <div className="container">
        <Header score={userScore} />
        {showResults ? (
          <PlayArea
            resultsBanner={resultsBanner}
            userChoice={userChoice}
            showCPUChoice={showCPUChoice}
            cpuChoice={cpuChoice}
            triggerRenderResults={this.triggerRenderResults}
            triggerShowCPUChoice={this.triggerShowCPUChoice}
          />
        ) : (
          <UserSelection
            getUserChoice={this.getUserChoice}
            triggerRenderResults={this.triggerRenderResults}
          />
        )}

        {showRulesModal ? <RulesModal closeModal={this.closeModal} /> : null}

        <button
          onClick={() => {
            this.setState({ showRulesModal: true });
          }}
          className="rules-btn"
        >
          RULES
        </button>
      </div>
    );
  }
}

export default App;
