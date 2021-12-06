import React from "react";
import { StyledNavigation, StyledNavCircle } from "./styles";
import { Chevron } from "../icons";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavCircle>
        <Chevron />
      </StyledNavCircle>
      <StyledNavCircle>
        <Chevron style={{ transform: "rotate(-180deg)" }} />
      </StyledNavCircle>
    </StyledNavigation>
  );
};

export default Navigation;
