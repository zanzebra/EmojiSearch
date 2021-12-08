import React from "react";
import Card from "./Card";
import { StyledCardDeck } from "./styles";

const CardDeck = () => {
  return (
    <StyledCardDeck>
      <Card pos={3} zIndex={3} size={300} content />
    </StyledCardDeck>
  );
};

export default CardDeck;
