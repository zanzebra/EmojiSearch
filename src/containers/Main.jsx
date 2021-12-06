import React from "react";
import { Header, Search, Carousel } from "../components";
import { StyledMainContainer, Grid } from "./styles";

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Grid>
        <Header text="EmojiSearch" />
        <Search />
        <Carousel />
      </Grid>
    </StyledMainContainer>
  );
};

export default MainContainer;
