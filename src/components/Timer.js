import React from "react";
import { StyledTimeCount } from "../styles/STyledTimeCount";
import { StyledTimer, Circle } from "../styles/StyledTimer";
import { Link } from "react-router-dom";

const Timer = () => {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  return (
    <Circle>
      <Link to="/cleaning">
        <StyledTimeCount>
          <StyledTimer>
            <h3>{`02:00`}</h3>

            <p>{date}</p>
          </StyledTimer>
        </StyledTimeCount>
      </Link>
    </Circle>
  );
};

export default Timer;
