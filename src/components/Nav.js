import React from "react";
import HomeLogo from "../img/home.svg";
import Clean from "../img/cisteni.svg";
import CalendarBtn from "../img/calendar.svg";
import Study from "../img/study.svg";
import { StyledNav, StyledNavButton } from "../styles/StyledNav";
import { Routes, Route, Link } from "react-router-dom";
import Cleaning from "../pages/Cleaning";
import MainMenu from "../pages/MainMenu";
import Information from "../pages/Information";
import CalendarComponent from "../pages/CalendarComponent";
import HowToClean from "../pages/InfoPages/HowToClean";
import DentalCare from "../pages/InfoPages/DentalCare";
import Facts from "../pages/InfoPages/Facts";
import Supplements from "../pages/InfoPages/Supplements";

const Nav = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/information" element={<Information />} />
        <Route path="/information/howtoclean" element={<HowToClean />} />
        <Route path="/information/dental" element={<DentalCare />} />
        <Route path="/information/facts" element={<Facts />} />
        <Route path="/information/health" element={<Supplements />} />
      </Routes>
      <StyledNav>
        <Link to="/">
          <StyledNavButton>
            <img src={HomeLogo} alt="Home" />
            <h3>Domov</h3>
          </StyledNavButton>
        </Link>
        <Link to="/cleaning">
          <StyledNavButton>
            <img src={Clean} alt="Clean " />
            <h3>Čištení</h3>
          </StyledNavButton>
        </Link>
        <Link to="/calendar">
          <StyledNavButton>
            <img src={CalendarBtn} alt="Calendar" />
            <h3>Kalendář</h3>
          </StyledNavButton>
        </Link>
        <Link to="/information">
          <StyledNavButton>
            <img src={Study} alt="Study" />
            <h3>Informace</h3>
          </StyledNavButton>
        </Link>
      </StyledNav>
    </div>
  );
};

export default Nav;
