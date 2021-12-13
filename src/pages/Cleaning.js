import React from "react";
import { useStopwatch } from "react-timer-hook";
import { StyledTimeCount, StyledTimerBtns } from "../styles/STyledTimeCount";
import play from "../img/play.svg";
import pauseBtn from "../img/pause.svg";
import resetBtn from "../img/reset.svg";

import MainMenuView from "../components/MainMenuView";
import { StyledTimer, Circle } from "../styles/StyledTimer";

function Cleaning() {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  return (
    <StyledTimeCount>
      <Circle>
        <StyledTimer>
          <h3>{`${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`}</h3>
          <StyledTimerBtns>
            {isRunning ? (
              <img onClick={pause} src={pauseBtn} alt="play button" />
            ) : (
              <img onClick={start} src={play} alt="play button" />
            )}
            <img onClick={reset} src={resetBtn} alt="play button" />
          </StyledTimerBtns>
        </StyledTimer>
      </Circle>
      <MainMenuView />
    </StyledTimeCount>
  );
}
export default Cleaning;
