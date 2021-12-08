import React, { useContext } from "react";
import { MiniCardList } from "../components";
import { Context } from "../context/AppContext";
import { StyledSideDrawer } from "./styles";

const SideDrawer = () => {
  const { filteredEmojiList } = useContext(Context);
  return (
    <StyledSideDrawer length={filteredEmojiList.length}>
      <MiniCardList />
    </StyledSideDrawer>
  );
};

export default SideDrawer;
