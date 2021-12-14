import React from "react";
import { data } from "../../data";
import { StyledFacts, StyledFact } from "../../styles/StyledFacts";

const Facts = () => {
  return (
    <StyledFacts>
      <ul>
        {data.map((fact) => {
          return (
            <StyledFact>
              <li>{fact.text}</li>
            </StyledFact>
          );
        })}
      </ul>
    </StyledFacts>
  );
};

export default Facts;
