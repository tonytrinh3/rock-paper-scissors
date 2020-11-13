import React from "react";
import "sass/main.scss";
import {ROCK,PAPER,SCISSORS} from "utilities/types";
import getRndInteger from 'utilities/getRndInteger';

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
        "ROCK": {
          wins: SCISSORS,
          loses: PAPER,
        },
        "PAPER": {
          wins: ROCK,
          loses: SCISSORS,
        },
        "SCISSORS": {
          wins: PAPER,
          loses: ROCK,
        },
      },
    };
  }

  componentDidMount(){
    this.getCPUChoice()
  }

  getCPUChoice() {

    const index = getRndInteger(0,2);

    const cpuChoice = this.state.cpuOption[index];

    this.setState({
      cpuChoice: cpuChoice
    })

  }

  getUserChoice=(choice) =>{
    this.setState({
      userChoice: choice
    })
  }

  //TODO: RENDERING OF BUTTON COULD BE DONE THROUGH A COMPONENT
  render() {
    return (
      <div className="App">
        {this.state.cpuChoice}
        <br/>
        <button onClick={()=>this.getUserChoice(ROCK)}>Rock</button>
        <button onClick={()=>this.getUserChoice(PAPER)}>Paper</button>
        <button onClick={()=>this.getUserChoice(SCISSORS)}>Scissor</button>
        {this.state.userChoice}
      </div>
    )
  }
}

export default App;


