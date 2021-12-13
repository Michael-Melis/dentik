import React from "react";
import News from "./News";
import { data } from "../data";
import { StyledMainMenuView } from "../styles/StyledMainMenuView";

const MainMenuView = () => {
  const array = data.map((text) => {
    return text.text;
  });

  return (
    <StyledMainMenuView>
      <p>Vědeli ste, že ... ?</p>
      <News array={array} />
    </StyledMainMenuView>
  );
};

export default MainMenuView;
