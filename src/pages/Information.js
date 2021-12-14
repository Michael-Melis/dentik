import React from "react";
import { Link } from "react-router-dom";
import { StyledInfo, StyledInfoLinks, Dot } from "../styles/StyledInformation";

const Information = () => {
  return (
    <StyledInfo>
      <h1>Naučte se správne čistit své zuby</h1>
      <StyledInfoLinks>
        <ul>
          <Link to="/information/howtoclean">
            <li>Jak správne čistit?</li>
          </Link>
          <Link to="/information/dental">
            <li>Jak vybrat dentální pomůcky?</li>
          </Link>
          <Link to="/information/facts">
            <li>Desatoro pro čištění zubů</li>
          </Link>
          <Link to="/information/health">
            <li>Vliv výživy na zuby</li>
          </Link>
        </ul>
      </StyledInfoLinks>
    </StyledInfo>
  );
};

export default Information;
