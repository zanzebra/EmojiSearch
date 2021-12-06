import React from "react";
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchButton,
} from "./styles";

const Search = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchInput placeholder="Happy" type="text" />
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchContainer>
  );
};

export default Search;
