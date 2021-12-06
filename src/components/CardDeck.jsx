import React from "react";
import CardLarge from "./CardLarge";
import { StyledCardDeck } from "./styles";

const CardDeck = () => {
  return (
    <StyledCardDeck>
      <CardLarge pos={1} zIndex={5} width={300} />
      <CardLarge pos={2} zIndex={4} width={295} />
      <CardLarge pos={3} zIndex={3} width={290} />
      <CardLarge pos={4} zIndex={2} width={285} />
      <CardLarge pos={5} zIndex={1} width={280} />
    </StyledCardDeck>
  );
};

export default CardDeck;
