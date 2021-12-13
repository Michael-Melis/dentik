import React from "react";
import HomeLogo from "../img/home.svg";
import Clean from "../img/cisteni.svg";
import Calendar from "../img/calendar.svg";
import Study from "../img/study.svg";
import { StyledNav, StyledNavButton } from "../styles/StyledNav";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavButton>
        <img src={HomeLogo} alt="Home" />
        <h3>Domov</h3>
      </StyledNavButton>
      <StyledNavButton>
        <img src={Clean} alt="Clean " />
        <h3>Čištení</h3>
      </StyledNavButton>
      <StyledNavButton>
        <img src={Calendar} alt="Calendar" />
        <h3>Kalendář</h3>
      </StyledNavButton>
      <StyledNavButton>
        <img src={Study} alt="Study" />
        <h3>Informace</h3>
      </StyledNavButton>
    </StyledNav>
  );
};

export default Nav;
