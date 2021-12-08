import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { Header, Search, CardDeck } from "../components";
import { StyledMainContainer, Grid } from "./styles";

const MainContainer = () => {
  const { filteredEmojiList } = useContext(Context);
  return (
    <StyledMainContainer length={filteredEmojiList.length}>
      <Grid>
        <Header text="EmojiSearch" />
        <Search />
        <CardDeck />
      </Grid>
    </StyledMainContainer>
  );
};

export default MainContainer;
