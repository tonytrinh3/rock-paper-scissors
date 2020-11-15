import getRndInteger from "utilities/getRndInteger";

const cpuChoice = (cpuOption,getCPUChoice) =>{
 //in order to make sure we get cpu results first then render game results and score second
 return new Promise((resolve) => {
    const index = getRndInteger(0, 4);
    const cpuChoice = cpuOption[index];
    getCPUChoice(cpuChoice);
    setTimeout(() => {
      resolve(cpuChoice);
    }, 10);
  });
}

export default cpuChoice;