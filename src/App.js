import React from "react";
import "sass/main.scss";
import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";
import getRndInteger from "utilities/getRndInteger";

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

  componentDidMount() {
    // this.getCPUChoice();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { userChoice, gameLogic, rounds, userScore } = this.state;

    if (prevState.rounds !== rounds) {
      let newCPUChoice = await this.getCPUChoice();

      if (newCPUChoice === userChoice) {
        return this.setState({
          resultsBanner: "draw",
          userScore: userScore + 0,
        });
      }

      for (let i = 0; i < gameLogic[newCPUChoice].loses.length; i++) {
        if (gameLogic[newCPUChoice].loses[i] === userChoice) {
          return this.setState({
            resultsBanner: "Player wins!",
            userScore: userScore + 1,
          });
        }
      }

      this.setState({
        resultsBanner: "Player loses :(",
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
      }, 200);
    });
  }

  getUserChoice = (choice) => {
    this.setState({
      userChoice: choice,
      rounds: this.state.rounds + 1,
    });
  };

  // componentWillUnmount () {
  //   //TODO: need to clear result before each round
  //   this.resultsBanner = this.resultsBanner.destroy();
  // }

  //TODO: RENDERING OF BUTTON COULD BE DONE THROUGH A COMPONENT
  render() {
    return (
      <div className="App">
        {`CPU chooses: ${this.state.cpuChoice}`}
        <br />
        <button onClick={() => this.getUserChoice(ROCK)}>Rock</button>
        <button onClick={() => this.getUserChoice(PAPER)}>Paper</button>
        <button onClick={() => this.getUserChoice(SCISSORS)}>Scissor</button>
        <button onClick={() => this.getUserChoice(SPOCK)}>SPOCK</button>
        <button onClick={() => this.getUserChoice(LIZARD)}>LIZARD</button>
        <br />
        {`User chooses: ${this.state.userChoice}`}
        <br />
        <div className="aewf" ref={this.resultsBanner}>
          {this.state.resultsBanner}
        </div>
        <br />
        {this.state.userScore}
      </div>
    );
  }
}

export default App;
