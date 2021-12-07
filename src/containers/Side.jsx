import React, { useContext } from "react";
import { MiniCardList } from "../components";
import { StyledSideDrawer } from "./styles";

const SideDrawer = () => {
  return (
    <StyledSideDrawer>
      <MiniCardList />
    </StyledSideDrawer>
  );
};

export default SideDrawer;
