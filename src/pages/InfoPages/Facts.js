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
              <p>{fact.id}.</p>
              <h3>{fact.text}</h3>
            </StyledFact>
          );
        })}
      </ul>
    </StyledFacts>
  );
};

export default Facts;
