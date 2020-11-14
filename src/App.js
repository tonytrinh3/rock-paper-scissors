import React from "react";
import "sass/main.scss";
import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";
import getRndInteger from "utilities/getRndInteger";

import Header from "components/Header";
import UserSelection from "components/UserSelection";
import GamePiece from "components/GamePiece";

//TODO on load - show modal first...
class App extends React.Component {
  constructor(props) {
    super(props);
    this.resultsBanner = React.createRef();
    this.state = {
      userChoice: null,
      cpuChoice: null,
      userScore: 0,
      resultsBanner: null,
      rulesModal: false,
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
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    const { userChoice, gameLogic, rounds, userScore } = this.state;

    if (prevState.rounds !== rounds) {
      let newCPUChoice = await this.getCPUChoice();
      //TODO - put into new component to make code cleaner
      if (newCPUChoice === userChoice) {
        return this.setState({
          resultsBanner: "DRAW",
          userScore: userScore + 0,
        });
      }

      for (let i = 0; i < gameLogic[newCPUChoice].loses.length; i++) {
        if (gameLogic[newCPUChoice].loses[i] === userChoice) {
          return this.setState({
            resultsBanner: "YOU WIN",
            userScore: userScore + 1,
          });
        }
      }

      this.setState({
        resultsBanner: "YOU LOSE",
        userScore: userScore - 1,
      });
    }
  }

  getCPUChoice() {
    //in order to make sure we get cpu results first then render game results and score second
    return new Promise((resolve) => {
      const index = getRndInteger(0, 4);
      const cpuChoice = this.state.cpuOption[index];
      this.setState({
        cpuChoice: cpuChoice,
      });
      setTimeout(() => {
        resolve(this.state.cpuChoice);
      }, 10);
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

  // componentWillUnmount () {
  //   //TODO: need to clear result before each round
  //   this.resultsBanner = this.resultsBanner.destroy();
  // }

  //TODO: RENDERING OF BUTTON COULD BE DONE THROUGH A COMPONENT
  //TODO: NEED TO MAKE SCORE CONSTANT AFTER REFRESH

  renderPlayArea() {
    return (
      <div className="play-area">
        <GamePiece choice={this.state.userChoice} element={1} />
        <div className="play-area__piece--2">
          <h1 className="play-area__result " ref={this.resultsBanner}>
            {this.state.resultsBanner}
          </h1>
          <button onClick = {()=>this.setState({showResults: false})}className="play-area__play-btn">PLAY AGAIN</button>
        </div>
        <GamePiece choice={this.state.cpuChoice} element={3} />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.userScore} />
        {this.state.showResults ? (
          this.renderPlayArea()
        ) : (
          <UserSelection getUserChoice={this.getUserChoice} triggerResults={this.triggerRenderResults} />
        )}
        {/* {this.renderPlayArea()}
        <UserSelection getUserChoice={this.getUserChoice} /> */}
      </div>
    );
  }
}

export default App;
