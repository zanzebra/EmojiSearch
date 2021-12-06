import React from "react";
import { Header } from "../components";
import { StyledMainContainer, Grid } from "./styles";

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Grid>
        <Header text="EmojiSearch" />
      </Grid>
    </StyledMainContainer>
  );
};

export default MainContainer;
