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
      resultsBanner: null,
      rulesModal: false,
      rounds: 0,
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
    // this.getCPUChoice();
  }

  async componentDidUpdate(prevProps, prevState){
    const { userChoice, cpuChoice,gameLogic,rounds } = this.state;

    let result = null;
   
    if(prevState.rounds !== rounds){
      let newCPUChoice = await this.getCPUChoice();

      if(newCPUChoice === userChoice){
        result = "draw"
        console.log(result)
      } 
      else if (gameLogic[newCPUChoice].loses === userChoice){
        result = "Player wins!"
        console.log(result)
      } else {
        result = "Player loses :("
        console.log(result)
      }

      this.setState({
        resultsBanner: result
      })
    }
  }

  getCPUChoice() {
    return new Promise(resolve =>{
      const index = getRndInteger(0,2);
      const cpuChoice = this.state.cpuOption[index];
      this.setState({
        cpuChoice: cpuChoice
      })
      setTimeout(()=>{
        resolve(this.state.cpuChoice)
      },200)
    })
   
  }

  getUserChoice=(choice) =>{
    this.setState({
      userChoice: choice,
      rounds: this.state.rounds + 1
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
        <br/>
        {this.state.userChoice}
        <br/>
        {this.state.resultsBanner}
      </div>
    )
  }
}

export default App;


