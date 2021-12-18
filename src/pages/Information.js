import React from "react";
import { Link } from "react-router-dom";
import {
  StyledInfo,
  StyledInfoLinks,
  StyledInfoHeader,
  StyledList,
  StyledIconCircle,
} from "../styles/StyledInformation";

import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <StyledInfo>
      <StyledInfoHeader>
        <h1>Naučte se správne čistit své zuby</h1>
      </StyledInfoHeader>
      <StyledInfoLinks>
        <ul>
          <Link to="/information/howtoclean">
            <StyledList>
              <StyledIconCircle icon={faCircle} />
              <li>Jak správne čistit?</li>
            </StyledList>
          </Link>
          <Link to="/information/dental">
            <StyledList>
              <StyledIconCircle icon={faCircle} />
              <li>Jak vybrat dentální pomůcky?</li>
            </StyledList>
          </Link>
          <Link to="/information/facts">
            <StyledList>
              <StyledIconCircle icon={faCircle} />
              <li>Desatoro pro čištění zubů</li>
            </StyledList>
          </Link>
          <Link to="/information/health">
            <StyledList>
              <StyledIconCircle icon={faCircle} />
              <li>Vliv výživy na zuby</li>
            </StyledList>
          </Link>
        </ul>
      </StyledInfoLinks>
    </StyledInfo>
  );
};

export default Information;
