import { DRAW, YOU_WIN, YOU_LOSE } from "utilities/types";

const gameLogicSelection = (
  newCPUChoice,
  userChoice,
  gameLogic,
  getResultsBanner,
  handleScoreUpdate
) => {
  if (newCPUChoice === userChoice) {
    handleScoreUpdate(DRAW);
    return getResultsBanner(DRAW);
  }

  for (let i = 0; i < gameLogic[newCPUChoice].loses.length; i++) {
    if (gameLogic[newCPUChoice].loses[i] === userChoice) {
      handleScoreUpdate(YOU_WIN);
      return getResultsBanner(YOU_WIN);
    } else {
      handleScoreUpdate(YOU_LOSE);
      return getResultsBanner(YOU_LOSE);
    }
  }
};

export default gameLogicSelection;
