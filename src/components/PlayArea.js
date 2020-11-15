import React from "react";
import GamePiece from "components/GamePiece";

const PlayArea = (props) => {

    const { resultsBanner, userChoice, showCPUChoice, cpuChoice,triggerRenderResults,triggerShowCPUChoice } = props;
   
    // const timer = ()=>setTimeout(() => {
    //     triggerShowCPUChoice(true);
    //   }, 2000)
    //   timer();
    // if(showCPUChoice=== false){
    //     clearTimeout(timer)
    // }

  return (
    <div className="play-area">
      <h2 className="play-area__name play-area__name--1 ">YOU PICKED</h2>
      <h2 className="play-area__name play-area__name--2 ">THE HOUSE PICKED</h2>
      <GamePiece choice={userChoice} element={1} results={resultsBanner} />
      <div className="play-area__piece play-area__piece--2 fade-in-result ">
        <h1 className="play-area__result  ">{resultsBanner}</h1>
        <button
          onClick={() => triggerRenderResults( false,false )}
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
};

export default PlayArea;
