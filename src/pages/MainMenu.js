import React from "react";
import Timer from "../components/Timer";
import MainMenuView from "../components/MainMenuView";
import { StyledMainContent } from "../styles/StyledMainMenu";

const MainMenu = () => {
  return (
    <StyledMainContent>
      <Timer />
      <MainMenuView />
    </StyledMainContent>
  );
};

export default MainMenu;
