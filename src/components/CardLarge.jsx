import React from "react";
import { StyledCardLarge } from "./styles";

const CardLarge = ({ pos, zIndex, width }) => {
  return (
    <StyledCardLarge pos={pos} zIndex={zIndex} width={width}>
      Card
    </StyledCardLarge>
  );
};

export default CardLarge;
