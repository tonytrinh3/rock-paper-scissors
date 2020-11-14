import React from "react";
import "sass/main.scss";
import { ROCK, PAPER, SCISSORS, SPOCK, LIZARD } from "utilities/types";
import getRndInteger from "utilities/getRndInteger";

import Header from 'components/Header';
import UserSelection from 'components/UserSelection';
import GamePiece from 'components/GamePiece';

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


  async componentDidUpdate(prevProps, prevState) {
    const { userChoice, gameLogic, rounds, userScore } = this.state;

    if (prevState.rounds !== rounds) {
      let newCPUChoice = await this.getCPUChoice();
      //TODO - put into new component to make code cleaner
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
  //TODO: NEED TO MAKE SCORE CONSTANT AFTER REFRESH
  render() {
    return (
      <div className="container">
        <Header score = {this.state.userScore} />



        {`User chooses: ${this.state.userChoice}`}
        <GamePiece choice ={this.state.userChoice}/>
        <br />
        
        {`CPU chooses: ${this.state.cpuChoice}`}
        <GamePiece choice ={this.state.cpuChoice}/>
        <br />
    
      
        <div className="aewf" ref={this.resultsBanner}>
          {this.state.resultsBanner}
        </div>
        
        <br />


        <UserSelection getUserChoice = {this.getUserChoice}/>



      </div>
    );
  }
}

export default App;
