import React from "react";
import "sass/main.scss";
import {
  ROCK,
  PAPER,
  SCISSORS,
  SPOCK,
  LIZARD,
  DRAW,
  YOU_WIN,
  YOU_LOSE,
} from "utilities/types";

import gameLogicSelection from "utilities/gameLogicSelection";
import cpuChoice from "utilities/cpuChoice";

import Header from "components/Header";
import UserSelection from "components/UserSelection";
import GamePiece from "components/GamePiece";
import RulesModal from "components/RulesModal";

//TODO: NEED TO MAKE SCORE CONSTANT AFTER REFRESH
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
    //localStorage.setItem('userScore', 0) //reset
    //this is inital call of score
    let userScore = parseInt(localStorage.getItem("userScore"));
    console.log(typeof userScore);

    this.setState({
      userScore: userScore,
    });

    this.timer = setTimeout(() => {
      this.setState({ showCPUChoice: true });
    }, 2000);
  }

  _handleScoreUpdate = (update) => {
    let { scoring } = this.state;
 

    const merge = parseInt(localStorage.getItem("userScore")) + scoring[update]+0;

    localStorage.setItem("userScore", merge);

    const timer = setTimeout(() => {
      this.setState({ userScore: merge });
    }, 2000);
  };

  // componentWillUnmount(){
  //   console.log("component will unmount")
  //   clearTimeout(this.timer)
  // }
  // async componentDidUpdate(prevProps, prevState){
  //   const {  showCPUChoice } = this.state;

  //   if (prevState.showCPUChoice === showCPUChoice){
  //     setTimeout(() => {
  //       this.setState({ showCPUChoice: true });
  //     }, 2000);
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    const { userChoice, gameLogic, rounds,cpuOption } = this.state;

    if (prevState.rounds !== rounds) {

     
      let newCPUChoice = await cpuChoice(cpuOption,this.getCPUChoice);

      gameLogicSelection(
        newCPUChoice,
        userChoice,
        gameLogic,
        this.getResultsBanner,
        this._handleScoreUpdate
      );

    }
  }

  getResultsBanner=(nextState)=> {
    this.setState({
      resultsBanner: nextState
    });
  }

  getCPUChoice=(nextState)=> {

    this.setState({
      cpuChoice: nextState
    });


  }

  getUserChoice = (choice) => {
    this.setState({
      userChoice: choice,
      rounds: this.state.rounds + 1,
    });
  };

  triggerRenderResults = (nextState) => {
    this.setState({
      showResults: nextState,
    });
  };

  closeModal = (nextState) => {
    this.setState({
      showRulesModal: nextState,
    });
  };

  //i want to keep this here to avoid 2 drops of props if this were to become a separate component
  renderPlayArea() {
    const { resultsBanner, userChoice, showCPUChoice, cpuChoice } = this.state;

    return (
      <div className="play-area">
        <h2 className="play-area__name play-area__name--1 ">YOU PICKED</h2>
        <h2 className="play-area__name play-area__name--2 ">
          THE HOUSE PICKED
        </h2>
        <GamePiece choice={userChoice} element={1} results={resultsBanner} />
        <div className="play-area__piece play-area__piece--2 fade-in-result ">
          <h1 className="play-area__result  ">{resultsBanner}</h1>
          <button
            onClick={() => this.setState({ showResults: false })}
            className=" play-area__play-btn"
          >
            PLAY AGAIN
          </button>
        </div>
        {showCPUChoice ? (
          <GamePiece choice={cpuChoice} element={3} results={resultsBanner} />
        ) : (
          <div className="outer-circle outer-circle--large outer-circle__cpu-only play-area__piece play-area__piece--3"></div>
        )}
      </div>
    );
  }

  render() {
    const { userScore, showResults, showRulesModal } = this.state;

    return (
      <div className="container">
        <Header score={userScore} />
        {showResults ? (
          this.renderPlayArea()
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
